import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  showSidebar?: boolean
}

export function Layout({ children, showSidebar = false }: LayoutProps) {
  return (
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar for future navigation */}
      {showSidebar && (
        <aside className="w-64 bg-white border-r border-neutral-200 shadow-sm">
          <div className="p-4 border-b border-neutral-200">
            <h2 className="text-lg font-bold text-neutral-900">cloudePOS</h2>
          </div>
          {/* Navigation will go here in Phase 1.2+ */}
        </aside>
      )}

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
