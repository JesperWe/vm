import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/createvisit/createvisit')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /visitor/!'
}
 