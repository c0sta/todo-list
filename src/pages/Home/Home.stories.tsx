import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Home as HomeComponent } from '.'

export default {
  title: 'Example/Home',
  component: HomeComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof HomeComponent>

export const Home: ComponentStory<typeof HomeComponent> = () => (
  <HomeComponent />
)
