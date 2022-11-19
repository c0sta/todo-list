import styled, { css } from 'styled-components'
import { ThemeType } from '../../global'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: calc(638px + 90px + 8px);
  gap: 12px;
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
