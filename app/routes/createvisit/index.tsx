import * as React from 'react';
import { createFileRoute, useSearch } from '@tanstack/react-router';
import VisitForm from '../../components/VisitForm';
import { Center, Container, Flex, Title } from '@mantine/core';

interface state {
  userId: string;
}
export const Route = createFileRoute('/createvisit/')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): state => {
    return {
      userId: search.userId as string,
    };
  },
});

function RouteComponent() {
  const { userId } = Route.useSearch();

  return (
    <Flex direction={'column'} justify={'center'} align={'center'} w={'100%'}>
      <Container px={'24'} pt={'108'}>
        <Flex direction={'column'} mb={24} gap={8}>
          <Title order={1} size={24}>
            Register your visitor
          </Title>
          <Title order={2} size={16} font-weight style={{ fontWeight: '400' }}>
            Add some details about your visitor to get an invite link.
          </Title>
        </Flex>
        <Center w={'100%'}>
          <VisitForm hostId={userId} />
        </Center>
      </Container>
    </Flex>
  );
}
