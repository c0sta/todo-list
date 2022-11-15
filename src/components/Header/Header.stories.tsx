import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header as HeaderComponent } from '.'

export default {
  title: 'Example/Header',
  component: HeaderComponent
} as ComponentMeta<typeof HeaderComponent>

export const Header: ComponentStory<typeof HeaderComponent> = () => (
  <div style={{ height: '100vh' }}>
    <HeaderComponent />
  </div>
)
