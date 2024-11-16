// app/routes/index.tsx
import * as fs from 'node:fs';
import { createFileRoute, redirect, useRouter } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';
import { Box, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const filePath = 'count.txt';

async function readCount() {
  return parseInt(await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'));
}

const getCount = createServerFn({
  method: 'GET',
}).handler(() => {
  return readCount();
});

const updateCount = createServerFn()
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount();
    await fs.promises.writeFile(filePath, `${count + data}`);
  });

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

  return (
    <Flex bg="#F0E9E3" align="center">
      <Box m={12}>
        <img src="/eidra-logo.svg" height={30} />
      </Box>
      <Flex justify="center" w="100%">
        <h2>Visitor Management</h2>
      </Flex>
    </Flex>
  );
}
