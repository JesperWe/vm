import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import VisitForm from '../../components/VisitForm';
import { Center, Container, Flex, Title } from '@mantine/core';

export const Route = createFileRoute('/createvisit/')({
  component: RouteComponent,
});

function RouteComponent() {
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
          <VisitForm />
        </Center>
      </Container>
    </Flex>
  );
}
