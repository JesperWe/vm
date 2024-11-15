import {
  Box,
  Button,
  Flex,
  Paper,
  Text,
  TextInput,
} from '@mantine/core';
import ChatMessageSection from './ChatMessageSection';
import { Message } from '../types/chatTypes';

interface ChatSectionProps {
  userId: string,
  messages: Message[];
}

export default function ChatSection({ messages, userId }: ChatSectionProps) {
  return (
    <Paper shadow="sm" maw={1080} mx={'auto'} radius="md" style={{ overflow: 'hidden' }}>
      <Text p={15} bg={'blue'}>
        {'Your Host'}
      </Text>
      <ChatMessageSection messages={messages} userId={userId} />
      <Flex gap={15} p={15} bg={'cyan'}>
        <TextInput placeholder="Send a message here!" style={{ width: '95%' }} />
        <Button>{'Send'}</Button>
      </Flex>
    </Paper>
  );
}
