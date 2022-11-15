import { screen } from '@testing-library/react'
import { CreateTask } from '../'
import { customRender } from '../../../../tests/utils'
describe('CreateTask tests', () => {
  it('should render component', () => {
    customRender(<CreateTask />)
    const createTask = screen.getByPlaceholderText(/Adicione uma nova tarefa/i)
    expect(createTask).toBeInTheDocument()
  })
})
