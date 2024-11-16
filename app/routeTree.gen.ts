/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as DoorsImport } from './routes/doors'
import { Route as IndexImport } from './routes/index'
import { Route as VisitIndexImport } from './routes/visit/index'
import { Route as CreatevisitIndexImport } from './routes/createvisit/index'
import { Route as ChatIndexImport } from './routes/chat/index'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const DoorsRoute = DoorsImport.update({
  id: '/doors',
  path: '/doors',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const VisitIndexRoute = VisitIndexImport.update({
  id: '/visit/',
  path: '/visit/',
  getParentRoute: () => rootRoute,
} as any)

const CreatevisitIndexRoute = CreatevisitIndexImport.update({
  id: '/createvisit/',
  path: '/createvisit/',
  getParentRoute: () => rootRoute,
} as any)

const ChatIndexRoute = ChatIndexImport.update({
  id: '/chat/',
  path: '/chat/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/doors': {
      id: '/doors'
      path: '/doors'
      fullPath: '/doors'
      preLoaderRoute: typeof DoorsImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/chat/': {
      id: '/chat/'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof ChatIndexImport
      parentRoute: typeof rootRoute
    }
    '/createvisit/': {
      id: '/createvisit/'
      path: '/createvisit'
      fullPath: '/createvisit'
      preLoaderRoute: typeof CreatevisitIndexImport
      parentRoute: typeof rootRoute
    }
    '/visit/': {
      id: '/visit/'
      path: '/visit'
      fullPath: '/visit'
      preLoaderRoute: typeof VisitIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/doors': typeof DoorsRoute
  '/login': typeof LoginRoute
  '/chat': typeof ChatIndexRoute
  '/createvisit': typeof CreatevisitIndexRoute
  '/visit': typeof VisitIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/doors': typeof DoorsRoute
  '/login': typeof LoginRoute
  '/chat': typeof ChatIndexRoute
  '/createvisit': typeof CreatevisitIndexRoute
  '/visit': typeof VisitIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/doors': typeof DoorsRoute
  '/login': typeof LoginRoute
  '/chat/': typeof ChatIndexRoute
  '/createvisit/': typeof CreatevisitIndexRoute
  '/visit/': typeof VisitIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/doors' | '/login' | '/chat' | '/createvisit' | '/visit'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/doors' | '/login' | '/chat' | '/createvisit' | '/visit'
  id:
    | '__root__'
    | '/'
    | '/doors'
    | '/login'
    | '/chat/'
    | '/createvisit/'
    | '/visit/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DoorsRoute: typeof DoorsRoute
  LoginRoute: typeof LoginRoute
  ChatIndexRoute: typeof ChatIndexRoute
  CreatevisitIndexRoute: typeof CreatevisitIndexRoute
  VisitIndexRoute: typeof VisitIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DoorsRoute: DoorsRoute,
  LoginRoute: LoginRoute,
  ChatIndexRoute: ChatIndexRoute,
  CreatevisitIndexRoute: CreatevisitIndexRoute,
  VisitIndexRoute: VisitIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/doors",
        "/login",
        "/chat/",
        "/createvisit/",
        "/visit/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/doors": {
      "filePath": "doors.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/chat/": {
      "filePath": "chat/index.tsx"
    },
    "/createvisit/": {
      "filePath": "createvisit/index.tsx"
    },
    "/visit/": {
      "filePath": "visit/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
