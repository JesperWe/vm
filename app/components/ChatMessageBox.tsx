import { Paper } from '@mantine/core';

interface ChatMessageBox {
  message: string;
  color: string;
}

export default function ChatMessageBox({ message, color }: ChatMessageBox) {
  return (
    <Paper
      radius={'md'}
      shadow="none"
      px={12}
      py={8}
      style={{ backgroundColor: color, color: color !== 'white' ? 'white' : undefined }}
    >
      {message}
    </Paper>
  );
}
