import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TaskList as TaskListComponent } from '.'

export default {
  title: 'Components/TaskList',
  component: TaskListComponent
} as ComponentMeta<typeof TaskListComponent>

const Template: ComponentStory<typeof TaskListComponent> = args => (
  <TaskListComponent {...args} />
)

export const TaskList = Template.bind({})
TaskList.args = {
  tasks: [
    {
      id: '1',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      checked: false
    },
    {
      id: '2',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      checked: true
    },
    {
      id: '3',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      checked: false
    }
  ]
}

export const EmptyList = Template.bind({})
EmptyList.args = {
  tasks: []
}
