import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

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
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    )
  },
})

const hostRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: '/host',
  component: function HostPage() {
    return <div className="p-2">Hello from Host!</div>
  },
})

const visitorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/visitor',
  component: function VisitorPage() {
    return <div className="p-2">Hello from Test!</div>
  },
})

const routeTree = rootRoute.addChildren([indexRoute, hostRouter, visitorRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}