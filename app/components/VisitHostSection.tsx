import { useNavigate } from '@tanstack/react-router';
import { Meeting } from '../types/visitTypes';
import { Button, Flex, Text } from '@mantine/core';

export default function VisitHostSection({ meeting }: { meeting: Meeting }) {
  const navigate = useNavigate();

  return (
    <Flex
      direction={'column'}
      gap={8}
      px={24}
      py={12}
      pos={'relative'}
      style={{ height: '100vh' }}
    >
      <Text
        fw={600}
        style={{ fontSize: 24 }}
      >{`${meeting?.visitor.name} has arrived!`}</Text>
      <Text mb={16}>
        {
          'Your visitor just let you know they are here. Give them access or let them know if you need more time.'
        }
      </Text>
      <Button color="black" size="md">
        <Text>Give access</Text>
      </Button>
      <Button variant="default" size="md">
        Deny access
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
}
