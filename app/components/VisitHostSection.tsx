import { useNavigate } from '@tanstack/react-router';
import { Meeting } from '../types/visitTypes';
import { Button, Flex, Text } from '@mantine/core';
import { gql, useMutation } from 'urql';

const MUTATE_ACCESS = gql`
  mutation Update_visit($id: uuid, $access: Boolean) {
    update_visit(where: { id: { _eq: $id } }, _set: { access_granted: $access }) {
      affected_rows
    }
  }
`;

interface VisitHostSectionProps {
  meeting: Meeting;
  refetch: () => void;
}

export default function VisitHostSection({ meeting, refetch }: VisitHostSectionProps) {
  const navigate = useNavigate();

  const [_, sendMutation] = useMutation(MUTATE_ACCESS);

  const grantAccess = () => {
    sendMutation({ id: meeting.id, access: true });
    refetch();
  };

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
      {!meeting.access_granted ? (
        <>
          <Button color="black" size="md" onClick={() => grantAccess()}>
            <Text>Give access</Text>
          </Button>
          <Button variant="default" size="md">
            Deny access
          </Button>
        </>
      ) : (
        <Text ta={'center'} fw={600} style={{ fontSize: 24 }}>
          Access granted!
        </Text>
      )}
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
