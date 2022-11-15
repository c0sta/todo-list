import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background: ${theme.background};
  `}
`
