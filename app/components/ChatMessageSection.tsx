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
    <ScrollArea viewportRef={viewport} style={{ height: '100%' }}>
      <Flex direction={'column'} gap={16} px={24} py={12}>
        {messages?.map((message) => (
          <Box
            key={message.id}
            style={{
              width: '45%',
              alignSelf: userId === message.from_user_id ? 'end' : 'start',
            }}
          >
            <ChatMessageBox
              message={message.message}
              color={userId === message.from_user_id ? '#1C923D' : 'white'}
            />
          </Box>
        ))}
      </Flex>
    </ScrollArea>
  );
}
