type EventListener<T = any> = (data: T) => void

export class EventBus {
  private listeners: Map<string, Set<EventListener>> = new Map()

  on<T = any>(event: string, listener: EventListener<T>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }

    this.listeners.get(event)!.add(listener as EventListener)

    // Return unsubscribe function
    return () => {
      this.listeners.get(event)?.delete(listener as EventListener)
    }
  }

  once<T = any>(event: string, listener: EventListener<T>): () => void {
    const wrappedListener: EventListener = (data: T) => {
      listener(data)
      this.off(event, wrappedListener)
    }

    return this.on(event, wrappedListener)
  }

  off(event: string, listener: EventListener): void {
    this.listeners.get(event)?.delete(listener)
  }

  emit<T = any>(event: string, data?: T): void {
    const listeners = this.listeners.get(event)
    if (listeners) {
      listeners.forEach((listener) => {
        try {
          listener(data)
        } catch (error) {
          console.error(`Error in event listener for "${event}":`, error)
        }
      })
    }
  }

  clear(): void {
    this.listeners.clear()
  }

  // For testing: get listener count
  getListenerCount(event: string): number {
    return this.listeners.get(event)?.size ?? 0
  }
}

// Global event bus instance
export const eventBus = new EventBus()
