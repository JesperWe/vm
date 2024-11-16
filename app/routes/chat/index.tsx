import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@mantine/core';
import ChatSection from '../../components/ChatSection';
import gate from './gate.png';
type visitState = {
  visitId: string;
  userId: string;
  during: string;
};

export const Route = createFileRoute('/chat/')({
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

  const extractStartDateTime = (tstzrange: string): Date => {
    const [start] = tstzrange.slice(1, -1).split(',');
    return new Date(start);
  };

  const startDate = extractStartDateTime(during);

  const validStartTime = new Date(startDate);
  validStartTime.setMinutes(validStartTime.getMinutes() - 30);

  const validEndTime = new Date(startDate);
  validEndTime.setMinutes(validEndTime.getMinutes() + 30);

  const currentTime = new Date();

  const isValid = currentTime >= validStartTime && currentTime <= validEndTime;

  const startDateTimeString = startDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <>
      <header>
        <h2>Welcome to Eira!</h2>
        <p>You will be granted access on the day of your visit.</p>
      </header>
      {isValid && <Button onClick={() => alert('Host notified!')}>Notify host</Button>}
      <section>
        <div>
          <div>{isValid ? 'valid' : 'not valid'}</div>
          <div>{startDateTimeString}</div>
        </div>
        <div>
          <h4>Access Key</h4>
          <p>
            Click the button to open the middle speed gate once inside the office
            entrance.
          </p>
          <img src={gate} alt="Gate" />
          <Button disabled={!isValid} onClick={() => alert('Access granted!')}>
            Open Gate
          </Button>
        </div>
      </section>
      {isValid && <ChatSection visitId={visitId} userId={userId} />}
    </>
  );
}
