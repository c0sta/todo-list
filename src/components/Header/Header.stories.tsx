import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header as HeaderComponent } from '.'

export default {
  title: 'Components/Header',
  component: HeaderComponent
} as ComponentMeta<typeof HeaderComponent>

export const Header: ComponentStory<typeof HeaderComponent> = () => (
  <HeaderComponent />
)
