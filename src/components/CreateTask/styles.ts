import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 8px;

    width: 100%;
    height: 54px;

    @media (min-width: ${theme.breakpoints.tablet}) {
      position: relative;
      top: -42px;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 80%;
    max-width: 638px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.gray['700']};
    background: ${theme.colors.gray['500']};
    color: ${theme.colors.gray['100']};
    padding-left: 16px;
  `}
`
export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    height: calc(100% - 2px);
    width: 90px;
    background: ${theme.colors.blueDark};
    border-radius: 8px;
    border: none;

    font-size: 0.875rem;
    font-weight: bold;
    color: ${theme.colors.gray['100']};

    transition: background 0.5s ease;
    :hover {
      cursor: pointer;
      background: ${theme.colors.blue};
    }
  `}
`
