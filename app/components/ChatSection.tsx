import { Box, Button, Flex, Paper, Text, TextInput } from '@mantine/core';
import ChatMessageSection from './ChatMessageSection';
import {
  cacheExchange,
  Client,
  fetchExchange,
  gql,
  subscriptionExchange,
  useMutation,
  useQuery,
} from 'urql';
import { useState } from 'react';
import { Message } from '../types/chatTypes';
import { createClient as createWSClient } from 'graphql-ws';
import ChatRecommendations from './ChatRecommendations';
import { Meeting } from '../types/visitTypes';
import { useNavigate } from '@tanstack/react-router';

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

const GET_VISIT = gql`
  query Visit_by_pk($visitId: uuid!) {
    visit_by_pk(id: $visitId) {
      access_granted
      during
      host_id
      id
      room_id
      visitor_email
      visitor {
        email
        id
        name
        role
      }
      room {
        floor
        id
        locked
        name
      }
      host {
        email
        id
        name
        role
      }
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

  const navigate = useNavigate();
  const [_, sendMessageMutation] = useMutation(SEND_MESSAGE);
  const [visitResult] = useQuery({
    query: GET_VISIT,
    variables: { visitId: visitId },
  });
  const { data: visitData, fetching } = visitResult;
  const meeting: Meeting = visitData?.visit_by_pk;
  const isHost = meeting?.host_id === userId;

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

  if (!data || fetching) return <Box>Loading...</Box>;

  return (
    <Flex direction={'column'} maw={1080} mx={'auto'} style={{ height: '100vh' }}>
      <Flex py={12} pos={'relative'}>
        <Text
          ta="center"
          fw={500}
          size="lg"
          style={{ width: '100%' }}
        >{`Chatting with ${isHost ? meeting.visitor.name : meeting.host.name}`}</Text>
        <Button
          pos={'absolute'}
          size="sm"
          variant="transparent"
          style={{
            top: '50%',
            left: 0,
            transform: 'translate(0, -50%)',
            color: 'black',
          }}
          onClick={() => {
            navigate({
              to: '/visit',
              search: (prev) => ({ ...prev, visitId: meeting.id }),
            });
          }}
        >
          {'< back'}
        </Button>
      </Flex>
      <ChatMessageSection messages={data} userId={userId} />
      <Flex px={24} py={20} gap={10} direction={'column'}>
        <ChatRecommendations isHost={isHost} sendMessage={sendMessage} />
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
