import { Badge, Button, Card, Center, PaperProps, Stack } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';
import { Route } from '../routes/__root';
import { cacheExchange, Client, fetchExchange, gql, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';
import { useState } from 'react';

export interface Room {
  floor: number;
  id: string;
  locked: boolean;
  name: string;
}

const DoorsQuery = gql`
  subscription rooms {
    room {
      floor
      id
      locked
      name
    }
  }
`;

const wsClient =
  typeof window === 'undefined'
    ? null
    : createWSClient({
        url: 'ws://64.226.112.55:8080/v1/graphql',
      });

const client =
  typeof window === 'undefined'
    ? null
    : new Client({
        url: 'http://64.226.112.55:8080/v1/graphql',
        exchanges: [
          cacheExchange,
          fetchExchange,
          subscriptionExchange({
            forwardSubscription(request) {
              const input = { ...request, query: request.query || '' };
              return {
                subscribe(sink) {
                  const unsubscribe = wsClient?.subscribe(input, sink);
                  return { unsubscribe };
                },
              };
            },
          }),
        ],
      });

export function Doors(props: PaperProps) {
  const navigate = useNavigate({ from: Route.fullPath });
  const [data, setData] = useState<Room[] | undefined>([]);

  if (typeof window === 'undefined') {
    return <></>;
  }

  client?.subscription(DoorsQuery, {}).subscribe((result) => {
    console.log({ result });
    result.data?.room && setData(result.data?.room);
  });

  console.log({ data });

  return (
    <Center>
      {data?.map((room) => (
        <Card shadow="sm" padding="lg" m={12} radius="md" withBorder key={room.id}>
          <Stack justify="space-between" mt="md" mb="xs">
            <h3>{room.name}</h3>
            <Button color={room.locked ? 'red' : 'green'} fullWidth mt="md" radius="md">
              {room.locked ? 'Locked' : 'Unlocked'}
            </Button>
          </Stack>
        </Card>
      ))}
    </Center>
  );
}
