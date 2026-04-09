import { useState } from 'react'
import { Layout } from '@shared/components/Layout'
import { Card } from '@shared/components/Card'
import { Button } from '@shared/components/Button'

type ModuleType =
  | 'sales'
  | 'inventory'
  | 'customer'
  | 'purchase'
  | 'reporting'
  | 'access-control'
  | 'integration'

const MODULES: { id: ModuleType; name: string; description: string; icon: string }[] = [
  { id: 'sales', name: 'Sales & Checkout', description: 'Fast checkout, cart, returns', icon: '💳' },
  { id: 'inventory', name: 'Inventory', description: 'Products, stock, transfers', icon: '📦' },
  { id: 'customer', name: 'Customer', description: 'Profiles, history, loyalty', icon: '👤' },
  { id: 'purchase', name: 'Purchase', description: 'Orders, suppliers, receiving', icon: '🛒' },
  { id: 'reporting', name: 'Reporting', description: 'Analytics, dashboards, reports', icon: '📊' },
  {
    id: 'access-control',
    name: 'Access Control',
    description: 'Users, roles, permissions',
    icon: '🔐',
  },
  {
    id: 'integration',
    name: 'Integration',
    description: 'Settings, API, webhooks',
    icon: '⚙️',
  },
]

export function Dashboard() {
  const [activeModule, setActiveModule] = useState<ModuleType | null>(null)

  if (activeModule) {
    return (
      <Layout>
        <div className="flex items-center gap-2 mb-6">
          <Button variant="secondary" onClick={() => setActiveModule(null)}>
            ← Back
          </Button>
          <h1 className="text-2xl font-bold capitalize">{activeModule} Module</h1>
        </div>
        <Card>
          <p className="text-neutral-600">Module UI coming soon...</p>
        </Card>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Welcome to cloudePOS</h1>
        <p className="text-neutral-600 mt-2">Cloud-based retail operating system for fashion stores</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MODULES.map((module) => (
          <Card
            key={module.id}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setActiveModule(module.id)}
          >
            <div className="text-4xl mb-3">{module.icon}</div>
            <h3 className="text-lg font-semibold text-neutral-900">{module.name}</h3>
            <p className="text-sm text-neutral-600 mt-2">{module.description}</p>
            <Button variant="primary" className="mt-4 w-full">
              Open
            </Button>
          </Card>
        ))}
      </div>
    </Layout>
  )
}
