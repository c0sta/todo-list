import { screen } from '@testing-library/react'
import { TaskList } from '..'
import { customRender } from '../../../../tests/utils'

describe('TaskList', () => {
  it('should render empty list', () => {
    customRender(<TaskList tasks={[]} />)
    const emptyList = screen.getByText('Você ainda não tem tarefas cadastradas')
    expect(emptyList).toBeInTheDocument()
  })

  it('should render one task', () => {
    customRender(
      <TaskList
        tasks={[
          {
            id: '1',
            checked: false,
            text: 'Lorem ipsum'
          }
        ]}
      />
    )
    const task = screen.getByText('Lorem ipsum')
    expect(task).toBeInTheDocument()
  })
})
