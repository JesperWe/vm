import { Box, Flex, ScrollArea } from '@mantine/core';
import ChatMessageBox from './ChatMessageBox';
import { useEffect, useRef } from 'react';
import { Message } from '../types/chatTypes';

interface ChatMessageSectionProps {
  userId: string;
  messages: Message[];
}

export default function ChatMessageSection({
  userId,
  messages,
}: ChatMessageSectionProps) {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({
      top: viewport.current!.scrollHeight,
      behavior: 'smooth',
    });

  useEffect(() => {
    if (messages) {
      scrollToBottom();
    }
  }, [messages]);

  return (
    <ScrollArea h={'500'} viewportRef={viewport}>
      <Flex direction={'column'} gap={20} bg={'gray'} p={15}>
        {messages?.map((message) => (
          <Box
            style={{
              width: '40%',
              alignSelf: userId === message.from_user_id ? 'end' : 'start',
            }}
          >
            <ChatMessageBox
              message={message.message}
              color={userId === message.from_user_id ? 'teal' : 'white'}
            />
          </Box>
        ))}
      </Flex>
    </ScrollArea>
  );
}
