import { MantineProvider } from '@mantine/core';
import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router';
import { Meta, Scripts } from '@tanstack/start';
import type { ReactNode } from 'react';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import '@mantine/core/styles.css';

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'TanStack Start Starter',
    },
  ],
  component: RootComponent,
});

function RootComponent() {
  const client = new Client({
    url: 'http://64.226.112.55:8080/v1/graphql',
    exchanges: [cacheExchange, fetchExchange],
  });

  return (
    <Provider value={client}>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </Provider>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
