import { screen } from '@testing-library/react'

import { Task } from '..'
import { customRender } from '../../../../../../tests/utils'

describe('Task', () => {
  it('should render', () => {
    customRender(
      <Task
        checked={false}
        text='Lorem ipsum'
        onDelete={() => {
          return
        }}
      />
    )

    const task = screen.getByText('Lorem ipsum')
    expect(task).toBeInTheDocument()
  })
})
