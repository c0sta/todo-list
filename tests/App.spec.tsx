import App from '../src/App'
import { customRender } from './utils'

describe('App', () => {
  it('renders headline', () => {
    const { container: app } = customRender(<App />)

    expect(app).toBeInTheDocument()
  })
})
