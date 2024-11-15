import { Paper } from '@mantine/core';

interface ChatMessageBox {
  message: string;
  color: 'teal' | 'white';
}

export default function ChatMessageBox({ message, color }: ChatMessageBox) {
  return (
    <Paper radius={'md'} bg={color} p={10}>
      {message}
    </Paper>
  );
}
