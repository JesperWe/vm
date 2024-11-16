'use client';

import { Box, Button, Flex, Paper, Text, TextInput } from '@mantine/core';
import ChatMessageSection from './ChatMessageSection';
import { cacheExchange, Client, fetchExchange, gql, subscriptionExchange } from 'urql';
import { useState } from 'react';
import { Message } from '../types/chatTypes';
import { createClient as createWSClient } from 'graphql-ws';

interface ChatSectionProps {
  userId: string;
  visitId: string;
}

const messagesQuery = gql`
  subscription Chat_messages($visitId: uuid!) {
    chat_messages(where: { visit_id: { _eq: $visitId } }) {
      from_user_id
      id
      message
      visit_id
    }
  }
`;

const wsClient = createWSClient({
  url: 'ws://64.226.112.55:8080/v1/graphql',
});

const client = new Client({
  url: 'http://64.226.112.55:8080/v1/graphql',
  exchanges: [
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription(request) {
        const input = { ...request, query: request.query || '' };
        return {
          subscribe(sink) {
            const unsubscribe = wsClient.subscribe(input, sink);
            return { unsubscribe };
          },
        };
      },
    }),
  ],
});

export default function ChatSection({ visitId, userId }: ChatSectionProps) {
  if (typeof window === 'undefined') {
    return <></>;
  }

  const [data, setData] = useState<Message[] | undefined>([]);

  client.subscription(messagesQuery, { visitId: visitId }).subscribe((result) => {
    result.data?.chat_messages && setData(result.data?.chat_messages);
  });

  if (!data) return <Box>Loading...</Box>;

  return (
    <Paper shadow="sm" maw={1080} mx={'auto'} radius="md" style={{ overflow: 'hidden' }}>
      <Text p={15} bg={'blue'}>
        {'Your messages'}
      </Text>
      <ChatMessageSection messages={data} userId={userId} />
      <Flex gap={15} p={15} bg={'cyan'}>
        <TextInput placeholder="Send a message here!" style={{ width: '95%' }} />
        <Button>{'Send'}</Button>
      </Flex>
    </Paper>
  );
}
