import App from '../src/App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('renders headline', () => {
    render(<App />)
    const app = screen.getByText('Hello Vite + React!')

    expect(app).toBeInTheDocument()
  })
})
