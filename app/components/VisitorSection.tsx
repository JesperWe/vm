import React from 'react';
import { Button, Flex } from '@mantine/core';
import gate from '../routes/visit/Gate.png';

const VisitorSection = ({ during }) => {
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
    <Flex direction={'column'} align="center">
      <header>
        <h2>Welcome to Eira!</h2>
        <p>You will be granted access on the day of your visit.</p>
      </header>
      {isValid && <Button onClick={() => alert('Host notified!')}>Notify host</Button>}

      <div>{isValid ? 'valid' : 'not valid'}</div>
      <div>{startDateTimeString}</div>

      <h4>Access Key</h4>
      <p>
        Click the button to open the middle speed gate once inside the office entrance.
      </p>
      <img src={gate} alt="Gate" />
      <Button disabled={!isValid} onClick={() => alert('Access granted!')}>
        Open Gate
      </Button>
    </Flex>
  );
};

export default VisitorSection;
