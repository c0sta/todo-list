import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CreateTask as CreateTaskComponent } from '.'

export default {
  title: 'Components/CreateTask',
  component: CreateTaskComponent
} as ComponentMeta<typeof CreateTaskComponent>

export const CreateTask: ComponentStory<typeof CreateTaskComponent> = () => (
  <div style={{ height: '100vh' }}>
    <CreateTaskComponent />
  </div>
)
