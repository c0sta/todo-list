import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Task as TaskComponent } from '.'

export default {
  title: 'Components/Task',
  component: TaskComponent
} as ComponentMeta<typeof TaskComponent>

const Template: ComponentStory<typeof TaskComponent> = args => (
  <TaskComponent {...args} />
)

export const Task = Template.bind({})
Task.args = {
  checked: false,
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
}

export const TaskChecked = Template.bind({})
TaskChecked.args = {
  checked: true,
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
}
