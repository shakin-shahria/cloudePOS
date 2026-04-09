import React, { createContext, ReactNode } from 'react'
import { mockApiClient } from '@shared/services/mockApiClient'
import type { ApiClient } from '@shared/services/types'

interface Services {
  api: ApiClient
}

const ServiceContext = createContext<Services | undefined>(undefined)

export function ServiceProvider({ children }: { children: ReactNode }) {
  const services: Services = {
    api: mockApiClient,
  }

  return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>
}

export function useServices(): Services {
  const services = React.useContext(ServiceContext)
  if (!services) {
    throw new Error('useServices must be used within ServiceProvider')
  }
  return services
}
