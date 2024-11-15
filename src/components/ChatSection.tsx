import {
  Box,
  Button,
  Flex,
  Paper,
  ScrollArea,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { Message } from '../types/chatTypes';
import ChatMessageSection from './ChatMessageSection';

interface ChatSectionProps {
  messages: Message[];
}

export default function ChatSection({ messages }: ChatSectionProps) {
  return (
    <Paper shadow="sm" maw={1080} mx={'auto'} radius="md" style={{ overflow: 'hidden' }}>
      <Text p={15} bg={'blue'}>
        {'Your Host'}
      </Text>
      <ChatMessageSection messages={messages} userId="1" />
      <Flex gap={15} p={15} bg={'cyan'}>
        <TextInput placeholder="Send a message here!" style={{ width: '95%' }} />
        <Button>{'Send'}</Button>
      </Flex>
    </Paper>
  );
}
