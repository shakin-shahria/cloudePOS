import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@shared/lib/queryClient'
import { ServiceProvider } from '@shared/context/ServiceContext'
import { EventBusProvider } from '@shared/context/EventBusContext'
import { Dashboard } from '@/Dashboard'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EventBusProvider>
        <ServiceProvider>
          <Dashboard />
        </ServiceProvider>
      </EventBusProvider>
    </QueryClientProvider>
  )
}

export default App
