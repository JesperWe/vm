import React from 'react';
import { Button, Flex } from '@mantine/core';
import gate from '../routes/visit/Gate.png';
import { gql, useMutation } from 'urql';
import { Meeting } from '../types/visitTypes';
import { useNavigate } from '@tanstack/react-router';

const UPDATE_ROOM = gql`
  mutation Update_room($id: uuid!) {
    update_room_by_pk(pk_columns: { id: $id }, _set: { locked: false }) {
      locked
      id
    }
  }
`;

interface VisitorSectionTypes {
  during: any;
  meeting: Meeting;
}

const VisitorSection = ({ during, meeting }: VisitorSectionTypes) => {
  const navigate = useNavigate();
  const [_, sendMutation] = useMutation(UPDATE_ROOM);

  const grantAccess = () => {
    sendMutation({ id: '23123bc7-7750-4753-ae69-58c310d1d91d' });
  };

  const extractStartDateTime = (tstzrange) => {
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
    <Flex
      direction={'column'}
      align="center"
      pos={'relative'}
      style={{ height: '100vh' }}
    >
      <header>
        <h2>Welcome to Eira!</h2>
        <p>You will be granted access on the day of your visit.</p>
      </header>
      {isValid && <Button onClick={() => alert('Host notified!')}>Notify host</Button>}

      <div>{startDateTimeString}</div>

      <h4>Access Key</h4>
      <p>
        Click the button to open the middle speed gate once inside the office entrance.
      </p>
      <img src={gate} alt="Gate" />
      <Button disabled={!meeting?.access_granted} onClick={() => grantAccess()}>
        Open Gate
      </Button>
      <Flex
        pos={'absolute'}
        style={{
          bottom: 24,
          left: '50%',
          transform: 'translate(-50%, 0)',
          width: '100%',
        }}
        px={24}
      >
        <Button
          color="black"
          size="md"
          fullWidth
          onClick={() => {
            navigate({
              to: '/chat',
              search: (prev) => ({ ...prev, visitId: meeting.id }),
            });
          }}
        >
          Go to chat
        </Button>
      </Flex>
    </Flex>
  );
};

export default VisitorSection;
