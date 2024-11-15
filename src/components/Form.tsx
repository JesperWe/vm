import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

function Form() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      room: '',
      date: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (value) => (value.trim().length > 0 ? null : 'Name is required'),
      room: (value) => (value.trim().length > 0 ? null : 'Room is required'),
      date: (value) => (value ? null : 'Date is required'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Your name"
        {...form.getInputProps('name')}
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
        label="Date"
        placeholder="Select date"
        {...form.getInputProps('date')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export default Form;