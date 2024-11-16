// app/routes/index.tsx
import {
  createFileRoute,
  redirect,
  useNavigate,
  useRouter,
} from '@tanstack/react-router';
import { Box, Button, Center, Flex, Select, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { gql, useQuery } from 'urql';
import { useState } from 'react';

const VisitsQuery = gql`
  query {
    visit {
      id
      during
      host {
        id
        email
        name
      }
      visitor {
        email
        id
        name
      }
    }
  }
`;

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: (search: Record<string, unknown>): appState => {
    return {
      visitId: search.visitId as string,
      userId: search.userId as string,
    };
  },
  beforeLoad: async ({ search }: { search: appState }) => {
    if (!search.userId) {
      throw redirect({
        to: '/login',
        statusCode: 301,
      });
    }
  },
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate({ from: Route.fullPath });

  const [result] = useQuery({ query: VisitsQuery });
  const { data, fetching } = result;
  const [value, setValue] = useState<string | null>('');
  const visitsMap = fetching
    ? []
    : data.visit.map((v) => ({
      label: v?.visitor.name + ' → ' + v.host?.name,
      value: v.id,
    }));

  console.log({ value, visitsMap, fetching });

  return (
    <>
      <Flex bg="#F0E9E3" align="center">
        <Box m={12}>
          <img src="/eidra-logo.svg" height={30} />
        </Box>
        <Flex justify="center" w="100%">
          <h2>Visitor Management</h2>
        </Flex>
      </Flex>
      <Center h={200}>
        <Stack>
          <Button
            onClick={() => {
              navigate({
                to: '/createvisit',
                search: (prev) => prev,
              });
            }}
          >
            Create New Visit
          </Button>

          <Select
            label={"Select a visit to view"}
            placeholder="Visit..."
            value={value} onChange={setValue}
            data={visitsMap}
          />

          <Button
            disabled={!value}
            onClick={() => {
              navigate({
                to: '/visitor',
                search: (prev) => ({...prev, visitId: value}),
              });
            }}
          >
            Visit
          </Button>

          <Button
            onClick={() => {
              navigate({
                to: '/doors',
                search: (prev) => prev,
              });
            }}
          >
            Doors
          </Button>
        </Stack>
      </Center>
    </>
  );
}
