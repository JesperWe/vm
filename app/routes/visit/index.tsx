import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import VisitSection from '../../components/VisitSection';

type visitState = {
  visitId: string;
  userId: string;
};

export const Route = createFileRoute('/visit/')({
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

  return <VisitSection visitId={visitId} userId={userId} />;
}
