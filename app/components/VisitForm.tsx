import { Button, Group, Select, TextInput } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { gql, useMutation, useQuery } from 'urql';
import '@mantine/dates/styles.css';

// Mutation query to insert visit
const INSERT_VISIT = gql`
  mutation InsertVisit(
    $hostId: uuid
    $email: String!
    $roomId: uuid!
    $during: tstzrange!
  ) {
    insert_visit_one(
      object: {
        host_id: $hostId
        visitor_email: $email
        room_id: $roomId
        during: $during
      }
    ) {
      during
      host_id
      id
      room_id
      visitor_email
    }
  }
`;

//rooms query
const GET_ROOMS = gql`
  query GetRooms {
    room {
      id
      name
    }
  }
`;

function VisitForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      hostId: '',
      email: '',
      roomId: '',
      startDate: null as Date | null,
      endDate: null as Date | null,
    },

    validate: {
      hostId: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      roomId: (value) => (value.length < 1 ? 'Please select a room.' : null),
    },
  });

  const [res] = useQuery({ query: GET_ROOMS });
  const { data, fetching, error } = res;
  const [insertVisitResult, insertVisit] = useMutation(INSERT_VISIT);

  //extracting data for the select
  const roomOptions =
    data?.room.map((room: { id: string; name: string }) => ({
      value: room.id,
      label: room.name,
    })) || [];

  const handleSubmit = async (values: typeof form.values) => {
    const { startDate, endDate } = values;

    if (!startDate || !endDate) {
      console.error('Start date and end date must be provided');
      return;
    }

    try {
      const response = await insertVisit({
        hostId: values.hostId,
        email: values.email,
        roomId: values.roomId,
        during: `[${startDate.toISOString()}, ${endDate.toISOString()})`,
      });

      if (response.error) {
        console.error('Error inserting visit:', response.error);
      } else {
        console.log('Visit inserted:', response.data);
        form.reset();
      }
    } catch (err) {
      console.error('Error inserting visit:', err);
    }
  };
  return (
    <form onSubmit={form.onSubmit(handleSubmit)} style={{width:"100%", display:"flex", flexDirection:"column", gap: "12px"}}>
      <TextInput
        withAsterisk
        label="Host ID"
        placeholder="Host ID"
        {...form.getInputProps('hostId')}
      />

      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
      />

      <Select
        withAsterisk
        label="Meeting Room"
        placeholder="Select a room"
        data={roomOptions}
        {...form.getInputProps('roomId')}
      />

      <DateTimePicker
        withAsterisk
        label="Start Date"
        placeholder="Select start date"
        {...form.getInputProps('startDate')}
      />

      <DateTimePicker
        withAsterisk
        label="End Date"
        placeholder="Select end date"
        {...form.getInputProps('endDate')}
      />

      <Group>
        <Button type="submit" color='black'>Recieve a link</Button>
      </Group>
    </form>
  );
}

export default VisitForm;
