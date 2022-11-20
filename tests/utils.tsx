import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/global'
import { TodoProvider } from '../src/hooks'

export const customRender = (component: ReactNode) =>
  render(
    <ThemeProvider theme={theme}>
      <TodoProvider>{component}</TodoProvider>
    </ThemeProvider>
  )
