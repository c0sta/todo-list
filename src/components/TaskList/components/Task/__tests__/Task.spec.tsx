import { screen } from '@testing-library/react'

import { Task } from '..'
import { customRender } from '../../../../../../tests/utils'

describe('Task', () => {
  it('should render', () => {
    customRender(<Task id='1' checked={false} text='Lorem ipsum' />)

    const task = screen.getByText('Lorem ipsum')
    expect(task).toBeInTheDocument()
  })
})
