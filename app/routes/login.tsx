import { createFileRoute } from '@tanstack/react-router';
import { Login } from '../components/Login';
import { Box, Center, Container, Flex } from '@mantine/core';

export const Route = createFileRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  return (
    <Container h="100vh" m={0}>
      <Flex bg="#F0E9E3" align="center">
        <Box m={12}>
          <img src="/eidra-logo.svg" height={30} />
        </Box>
        <Flex justify="center" w="100%">
          <h2>Visitor Management</h2>
        </Flex>
      </Flex>
      <Center h="50vh">
        <Login />
      </Center>
    </Container>
  );
}
