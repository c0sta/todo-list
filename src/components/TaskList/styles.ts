import styled, { css } from 'styled-components'
import { ThemeType } from '../../global'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: calc(638px + 90px + 8px);
  max-height: calc(100vh - 260px);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      padding-top: 16px;
    }
  `}
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;
  overflow-y: auto;
  ${({ theme }) => css`
    ::-webkit-scrollbar {
      border: 3px solid ${theme.colors.gray['600']};
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.gray['600']};
    }

    ::-webkit-scrollbar-thumb {
      border: 3px solid ${theme.colors.gray['600']};
      border-radius: 8px;
      background: ${theme.colors.gray['400']};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.gray['500']};
    }
  `}
`

export const Header = styled.header`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Tag = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 22px;
    height: 20px;
    border-radius: 50%;
    background: ${theme.colors.gray['400']};
    color: ${theme.colors.gray['200']};
    font-size: 12px;
    font-weight: bold;
  `}
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

interface InfoProps {
  color: keyof ThemeType['colors']
}
export const Info = styled.strong<InfoProps>`
  font-size: 12px;
  ${({ color, theme }) => css`
    color: ${theme.colors[color]};
  `}
`
