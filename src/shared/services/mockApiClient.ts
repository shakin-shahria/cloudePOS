import type { ApiClient } from './types'

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

class MockApiClient implements ApiClient {
  async get<T>(url: string): Promise<T> {
    await delay(200) // Simulate network latency
    console.log(`[MOCK API] GET ${url}`)

    // Return mock data based on URL
    const mockData = this.getMockData(url)
    return mockData as T
  }

  async post<T>(url: string, data: unknown): Promise<T> {
    await delay(300)
    console.log(`[MOCK API] POST ${url}`, data)

    // Return success response with mock ID
    return { id: Math.random(), ...(typeof data === 'object' ? data : {}) } as T
  }

  async put<T>(url: string, data: unknown): Promise<T> {
    await delay(300)
    console.log(`[MOCK API] PUT ${url}`, data)

    return data as T
  }

  async delete<T>(url: string): Promise<T> {
    await delay(200)
    console.log(`[MOCK API] DELETE ${url}`)

    return { success: true } as T
  }

  private getMockData(url: string) {
    // Route to appropriate mock data
    if (url.includes('/products')) {
      return this.getMockProducts()
    }
    if (url.includes('/customers')) {
      return this.getMockCustomers()
    }
    if (url.includes('/sales')) {
      return this.getMockSales()
    }
    if (url.includes('/inventory')) {
      return this.getMockInventory()
    }
    return []
  }

  private getMockProducts() {
    return [
      {
        id: '1',
        name: 'Black T-Shirt',
        sku: 'BTS-001',
        price: 29.99,
        variants: [
          { id: 'v1', size: 'S', color: 'Black', stock: 15 },
          { id: 'v2', size: 'M', color: 'Black', stock: 20 },
          { id: 'v3', size: 'L', color: 'Black', stock: 12 },
        ],
      },
      {
        id: '2',
        name: 'Blue Jeans',
        sku: 'BJ-001',
        price: 79.99,
        variants: [
          { id: 'v4', size: '28', color: 'Blue', stock: 8 },
          { id: 'v5', size: '30', color: 'Blue', stock: 10 },
          { id: 'v6', size: '32', color: 'Blue', stock: 6 },
        ],
      },
    ]
  }

  private getMockCustomers() {
    return [
      {
        id: '1',
        name: 'John Doe',
        phone: '555-0100',
        email: 'john@example.com',
        loyaltyPoints: 150,
      },
      {
        id: '2',
        name: 'Jane Smith',
        phone: '555-0101',
        email: 'jane@example.com',
        loyaltyPoints: 320,
      },
    ]
  }

  private getMockSales() {
    return [
      {
        id: '1',
        customerId: '1',
        total: 109.98,
        items: 2,
        timestamp: new Date().toISOString(),
      },
    ]
  }

  private getMockInventory() {
    return {
      totalItems: 2,
      totalStock: 71,
      lowStockCount: 3,
    }
  }
}

export const mockApiClient = new MockApiClient()
