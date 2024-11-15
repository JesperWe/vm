import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/visitor/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /visitor/!'
}
