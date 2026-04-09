import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    screen.getByText('Click me').click()
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('renders different variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>)
    expect(screen.getByText('Primary')).toHaveClass('bg-primary-600')

    rerender(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByText('Secondary')).toHaveClass('bg-neutral-200')

    rerender(<Button variant="danger">Danger</Button>)
    expect(screen.getByText('Danger')).toHaveClass('bg-danger-600')
  })

  it('can be disabled', () => {
    const { container } = render(<Button disabled>Disabled</Button>)
    const button = container.querySelector('button')
    expect(button).toBeDisabled()
  })
})
