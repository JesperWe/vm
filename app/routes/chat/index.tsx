import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import ChatSection from '../../components/ChatSection';

type visitState = {
  visitId: string;
  userId: string;
};

export const Route = createFileRoute('/chat/')({
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

  return <ChatSection visitId={visitId} userId={userId} />;
}
