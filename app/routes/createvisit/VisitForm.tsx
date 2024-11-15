import { Button, Group, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { gql, useMutation } from 'urql';

export const INSERT_VISIT = gql`
  mutation InsertVisit($hostId: uuid, $email: String!, $room: String!, $during: tstzrange!) {
    insert_visit_one(object: { host_id: $hostId, visitor_email: $email, room: $room, during: $during }) {
      during
      host_id
      id
      room
      visitor_email
    }
  }
`;

function VisitForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      hostId: '',
      email: '',
      room: '',
      startDate: null as Date | null,
      endDate: null as Date | null,
      termsOfService: false,
    },

    validate: {
      hostId: (value) => (value.trim().length > 0 ? null : 'Host ID is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      room: (value) => (value.trim().length > 0 ? null : 'Room is required'),
      startDate: (value) => (value ? null : 'Start date is required'),
      endDate: (value) => (value ? null : 'End date is required'),
    },
  });

  const [, insertVisit] = useMutation(INSERT_VISIT);

  const handleSubmit = async (values: typeof form.values) => {
    const { hostId, startDate, endDate } = values;

    if (!startDate || !endDate) {
      console.error('Start date and end date must be provided');
      return;
    }

    try {
      const response = await insertVisit({
        hostId: values.hostId,
        email: values.email,
        room: values.room,
        during: `[${startDate.toISOString()}, ${endDate.toISOString()})`,
      });
      console.log('Visit inserted:', response.data);
      form.reset();
    } catch (err) {
      console.error('Error inserting visit:', err);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
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

      <TextInput
        withAsterisk
        label="Room"
        placeholder="Room number"
        {...form.getInputProps('room')}
      />

      <DateInput
        withAsterisk
        label="Start Date"
        placeholder="Select start date"
        {...form.getInputProps('startDate')}
      />

      <DateInput
        withAsterisk
        label="End Date"
        placeholder="Select end date"
        {...form.getInputProps('endDate')}
      />

      <Group mt="md">
        <Button type="submit">
          Submit
        </Button>
      </Group>
    </form>
  );
}

export default VisitForm;