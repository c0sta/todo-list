import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 16px;
    padding-top: 16px;

    @media (min-width: ${theme.breakpoints.tablet}) {
      padding: 16px 64px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
      padding: 16px;
      gap: 32px;
    } ;
  `}
`
