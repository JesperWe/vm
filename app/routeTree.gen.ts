/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as VisitorIndexImport } from './routes/visitor/index'
import { Route as CreatevisitIndexImport } from './routes/createvisit/index'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const VisitorIndexRoute = VisitorIndexImport.update({
  id: '/visitor/',
  path: '/visitor/',
  getParentRoute: () => rootRoute,
} as any)

const CreatevisitIndexRoute = CreatevisitIndexImport.update({
  id: '/createvisit/',
  path: '/createvisit/',
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
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/createvisit/': {
      id: '/createvisit/'
      path: '/createvisit'
      fullPath: '/createvisit'
      preLoaderRoute: typeof CreatevisitIndexImport
      parentRoute: typeof rootRoute
    }
    '/visitor/': {
      id: '/visitor/'
      path: '/visitor'
      fullPath: '/visitor'
      preLoaderRoute: typeof VisitorIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/createvisit': typeof CreatevisitIndexRoute
  '/visitor': typeof VisitorIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/createvisit': typeof CreatevisitIndexRoute
  '/visitor': typeof VisitorIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/createvisit/': typeof CreatevisitIndexRoute
  '/visitor/': typeof VisitorIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/login' | '/createvisit' | '/visitor'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login' | '/createvisit' | '/visitor'
  id: '__root__' | '/' | '/login' | '/createvisit/' | '/visitor/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoginRoute: typeof LoginRoute
  CreatevisitIndexRoute: typeof CreatevisitIndexRoute
  VisitorIndexRoute: typeof VisitorIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginRoute: LoginRoute,
  CreatevisitIndexRoute: CreatevisitIndexRoute,
  VisitorIndexRoute: VisitorIndexRoute,
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
        "/login",
        "/createvisit/",
        "/visitor/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/createvisit/": {
      "filePath": "createvisit/index.tsx"
    },
    "/visitor/": {
      "filePath": "visitor/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
