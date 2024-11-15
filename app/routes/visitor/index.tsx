import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { gql, useQuery } from 'urql';
import ChatSection from '../../components/ChatSection';

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

type visitState = {
  visitId: string;
  userId: string;
};

export const Route = createFileRoute('/visitor/')({
  validateSearch: (search: Record<string, unknown>): visitState => {
    return {
      visitId: search.visitId as string,
      userId: search.userId as string,
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { visitId, userId } = Route.useSearch();
  const [result] = useQuery({
    query: messagesQuery,
    variables: {visitId: visitId}
  });
  const { data, fetching } = result;

  return <>{!fetching && <ChatSection messages={data?.chat_messages} userId={userId} />}</>;
}
