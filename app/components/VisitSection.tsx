import { gql, useQuery } from 'urql';
import { Meeting } from '../types/visitTypes';
import VisitHostSection from './VisitHostSection';
import VisitorSection from './VisitorSection';
import { Flex } from '@mantine/core';

interface VisitSectionProps {
  userId: string;
  visitId: string;
  during: string;
}

const GET_VISIT = gql`
  query Visit_by_pk($visitId: uuid!) {
    visit_by_pk(id: $visitId) {
      access_granted
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

export default function VisitSection({ visitId, userId, during }: VisitSectionProps) {
  const [visitResult, reexecuteQuery] = useQuery({
    query: GET_VISIT,
    variables: { visitId: visitId },
  });
  const { data: visitData, fetching } = visitResult;
  const meeting: Meeting = visitData?.visit_by_pk;
  const isHost = meeting?.host_id === userId;
  const [res] = useQuery({ query: GET_VISIT, variables: { visitId } });

  if (fetching) {
    return <></>;
  }

  return (
    <Flex>
      {isHost ? (
        <>
          <VisitHostSection meeting={meeting} refetch={() => reexecuteQuery()} />
        </>
      ) : (
        <>
          <>
            <VisitorSection during={meeting?.during} />
          </>
        </>
      )}
    </Flex>
  );
}
