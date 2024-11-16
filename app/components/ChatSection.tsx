import { Box, Button, Flex, Paper, Text, TextInput } from '@mantine/core';
import ChatMessageSection from './ChatMessageSection';
import {
  cacheExchange,
  Client,
  fetchExchange,
  gql,
  subscriptionExchange,
  useMutation,
} from 'urql';
import { useState } from 'react';
import { Message } from '../types/chatTypes';
import { createClient as createWSClient } from 'graphql-ws';

interface ChatSectionProps {
  userId: string;
  visitId: string;
}

const GET_MESSAGES = gql`
  subscription Chat_messages($visitId: uuid!) {
    chat_messages(where: { visit_id: { _eq: $visitId } }) {
      from_user_id
      id
      message
      visit_id
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation Insert_chat_messages_one($object: chat_messages_insert_input!) {
    insert_chat_messages_one(object: $object) {
      created_at
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

  const [_, sendMessageMutation] = useMutation(SEND_MESSAGE);

  const [data, setData] = useState<Message[] | undefined>([]);
  const [message, setMessage] = useState<string>('');

  const sendMessage = (message: string) => {
    if (message) {
      sendMessageMutation({
        object: { from_user_id: userId, visit_id: visitId, message: message },
      });
      setMessage('');
    }
  };

  client.subscription(GET_MESSAGES, { visitId: visitId }).subscribe((result) => {
    result.data?.chat_messages && setData(result.data?.chat_messages);
  });

  if (!data) return <Box>Loading...</Box>;

  return (
    <Flex direction={'column'} maw={1080} mx={'auto'} style={{ height: '100vh' }}>
      <ChatMessageSection messages={data} userId={userId} />
      <Flex px={24} py={20} gap={10} direction={'column'}>
        <Flex gap={8} wrap={'wrap'}>
          <Button
            variant="white"
            color="black"
            style={{ fontWeight: 400, fontSize: 12 }}
            onClick={() => sendMessage("I'm here!")}
          >
            {"I'm here!"}
          </Button>
          <Button
            variant="white"
            color="black"
            style={{ fontWeight: 400, fontSize: 12 }}
            onClick={() => sendMessage("I'll meet you by the meeting room")}
          >
            {"I'll meet you by the meeting room"}
          </Button>
        </Flex>
        <Flex gap={15} style={{ backgroundColor: '#f0e9e3' }}>
          <TextInput
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && message) {
                sendMessage(message);
              }
            }}
            placeholder="Write message..."
            style={{ flex: 1 }}
          />
          <Button disabled={!message} onClick={() => sendMessage(message)} color="black">
            {'Send'}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
