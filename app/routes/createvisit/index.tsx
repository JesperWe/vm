import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import VisitForm from '../../components/VisitForm';

export const Route = createFileRoute('/createvisit/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <VisitForm />
    </div>
  );
}
