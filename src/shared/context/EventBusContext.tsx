import React, { createContext, ReactNode } from 'react'
import { EventBus } from '@shared/lib/eventBus'

const EventBusContext = createContext<EventBus | undefined>(undefined)

export function EventBusProvider({ children }: { children: ReactNode }) {
  const eventBus = new EventBus()

  return <EventBusContext.Provider value={eventBus}>{children}</EventBusContext.Provider>
}

export function useEventBus(): EventBus {
  const eventBus = React.useContext(EventBusContext)
  if (!eventBus) {
    throw new Error('useEventBus must be used within EventBusProvider')
  }
  return eventBus
}
