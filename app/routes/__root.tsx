import { MantineProvider } from '@mantine/core';
import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router';
import { Meta, Scripts } from '@tanstack/start';
import type { ReactNode } from 'react';
import '@mantine/core/styles.css';
import { ApolloClient, InMemoryCache } from '@apollo/client/core/core.cjs';
import { ApolloProvider } from '@apollo/client/react';

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
  const client = new ApolloClient({
    uri: 'http://64.226.112.55:8080/v1/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ApolloProvider>
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
