import { screen } from '@testing-library/react'
import { customRender } from '../../../../tests/utils'
import { Header } from '../index'
describe('Header tests', () => {
  it('should render header title', () => {
    customRender(<Header />)
    const title = screen.getByRole('heading', { name: /task list/i })
    expect(title).toBeInTheDocument()
  })
})
