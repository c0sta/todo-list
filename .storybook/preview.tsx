import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/global'
import { TodoProvider } from '../src/hooks'
import '../src/global/reset.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <TodoProvider>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '32px'
          }}
        >
          <Story />
        </div>
      </TodoProvider>
    </ThemeProvider>
  )
]
