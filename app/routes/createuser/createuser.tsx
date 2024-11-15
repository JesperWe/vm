import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/createuser/createuser')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /createuser/createuser!'
}
