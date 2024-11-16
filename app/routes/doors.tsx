import { createFileRoute, Link } from '@tanstack/react-router';
import { Box, Center, Container, Flex } from '@mantine/core';
import { Doors } from '../components/Doors';

export const Route = createFileRoute('/doors')({
  component: DoorsPage,
});

function DoorsPage() {
  return (
    <Container h="100vh" m={0}>
      <Flex bg="#F0E9E3" align="center">
        <Box m={12}>
          <Link to="/" search={(prev) => prev}>
            <img src="/eidra-logo.svg" height={30} />
          </Link>
        </Box>
        <Flex justify="center" w="100%">
          <h2>Gate and Door states</h2>
        </Flex>
      </Flex>
      <Center h="50vh">
        <Doors />
      </Center>
    </Container>
  );
}
