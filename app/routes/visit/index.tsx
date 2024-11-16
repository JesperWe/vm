import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import VisitSection from '../../components/VisitSection';

type visitState = {
  visitId: string;
  userId: string;
  during: string;
};

export const Route = createFileRoute('/visit/')({
  validateSearch: (search: Record<string, unknown>): visitState => {
    return {
      visitId: search.visitId as string,
      userId: search.userId as string,
      during: search.during as string,
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { visitId, userId, during } = Route.useSearch();

  return <VisitSection visitId={visitId} userId={userId} during={during} />;
}
