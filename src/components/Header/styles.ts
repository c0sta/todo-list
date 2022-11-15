import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 15%;
    width: 100vw;
    padding: 8px 16px;

    background: ${theme.colors.gray['700']};

    @media (max-width: ${theme.breakpoints.mobile}) {
      justify-content: left;
      height: 7%;
    }
    @media (max-width: ${theme.breakpoints.tablet}) and (min-width: ${theme
        .breakpoints.mobile}) {
      height: 10%;
    } ;
  `};
`

export const Logo = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.colors.blue};

    span {
      color: ${theme.colors.purpleDark};
    }
    svg {
      align-self: center;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      gap: 8px;
      font-size: 0.8rem;
      svg {
        height: 24px;
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) and (min-width: ${theme
        .breakpoints.mobile}) {
      gap: 12px;
      font-size: 1.4rem;
      svg {
        height: 32px;
      }
    } ;
  `}
`
