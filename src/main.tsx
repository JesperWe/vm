import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Form from "../components/Form";
import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://64.226.112.55:8080/v1/graphql",
  cache: new InMemoryCache(),
})

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/host" className="[&.active]:font-bold">
          Host
        </Link>
        <Link to="/visitor" className="[&.active]:font-bold">
          Visitor
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    );
  },
});

const hostRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/host",
  component: function HostPage() {
    return <div className="p-2">Hello from Host!
    <Form/>
    </div>;
  },
});

const visitorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'visitor',
})

const visitorIndexRoute = createRoute({
  getParentRoute: () => visitorRoute,
  path: '/',
})

const visitorInvitedRoute = createRoute({
  getParentRoute: () => visitorRoute,
  path: '$visitorId',
  component: VisitorInvitedComponent,
})

function VisitorInvitedComponent() {
  const { data } = useQuery(gql`query Chat_messages {
    chat_messages {
        from_user_id
        id
        message
        visit_id
    }
}
`)
  console.log(data)
  const { visitorId } = visitorInvitedRoute.useParams()
  return <div>Visitor ID: {visitorId}</div>
}

const routeTree = rootRoute.addChildren([indexRoute, hostRouter, visitorRoute.addChildren([
  visitorIndexRoute,
  visitorInvitedRoute,
]),]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <MantineProvider>
        <ApolloProvider client={client}>
        <RouterProvider router={router} />
        </ApolloProvider>
      </MantineProvider>
    </StrictMode>
  );
}
