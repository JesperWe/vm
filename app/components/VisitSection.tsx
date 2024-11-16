import { Flex, Text } from '@mantine/core';
import { gql, useQuery } from 'urql';

interface VisitSectionProps {
  userId: string;
  visitId: string;
}

const GET_VISIT = gql`
  query Visit_by_pk($visitId: uuid!) {
    visit_by_pk(id: $visitId) {
      during
      host_id
      id
      room_id
      visitor_email
      visitor {
        email
        id
        name
        role
      }
      room {
        floor
        id
        locked
        name
      }
      host {
        email
        id
        name
        role
      }
    }
  }
`;

export default function VisitSection({ visitId, userId }: VisitSectionProps) {
  const [visitResult] = useQuery({
    query: GET_VISIT,
    variables: { visitId: visitId },
  });
  const { data: visitData, fetching } = visitResult;
  const visit = visitData?.visit_by_pk;
  const isHost = visit?.host_id === userId;

  if (fetching) {
    return <></>;
  }

  return <Flex>{isHost ? <><Text>{`${visit?.visitor.name} has arrived`}</Text></> : <></>}</Flex>;
}
