'use client'

import { Box, Button, Flex, Paper, Text, TextInput } from '@mantine/core';
import ChatMessageSection from './ChatMessageSection';
import { Message } from '../types/chatTypes';
import { gql, useQuery } from 'urql';

interface ChatSectionProps {
  userId: string;
  visitId: string;
}

const messagesQuery = gql`
  query Chat_messages($visitId: uuid!) {
    chat_messages(where: { visit_id: { _eq: $visitId } }) {
      from_user_id
      id
      message
      visit_id
    }
  }
`;

export default function ChatSection({ visitId, userId }: ChatSectionProps) {
  const [result] = useQuery({
    query: messagesQuery,
    variables: { visitId },
  });

  const { data, fetching } = result;
  console.log({result})
  if(fetching || !data) return (
    <Box>Loading...</Box>
  )

  return (
    <Paper shadow="sm" maw={1080} mx={'auto'} radius="md" style={{ overflow: 'hidden' }}>
      <Text p={15} bg={'blue'}>
        {'Your Host'}
      </Text>
      <ChatMessageSection messages={data.chat_messages} userId={userId} />
      <Flex gap={15} p={15} bg={'cyan'}>
        <TextInput placeholder="Send a message here!" style={{ width: '95%' }} />
        <Button>{'Send'}</Button>
      </Flex>
    </Paper>
  );
}
