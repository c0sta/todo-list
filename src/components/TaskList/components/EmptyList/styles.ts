import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  height: 100%;
  border-top: 1px solid #333;
  border-radius: 8px;
  padding-top: 16px;

  svg {
    margin-bottom: 22px;
  }

  ${({ theme }) => css`
    strong,
    p {
      color: ${theme.colors.gray['300']};
    }
  `}
`
