import styled, { css } from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'

export const Task = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 16px;
    height: 72px;
    width: 100%;

    border-radius: 8px;
    border: 1px solid ${theme.colors.gray['400']};
    background: ${theme.colors.gray['500']};
    list-style: none;
  `}
`

export const Radio = styled.input`
  ${({ theme }) => css`
    min-width: 17.5px;
    height: 17.5px;

    appearance: none;
    border-radius: 50%;
    border: 1px solid ${theme.colors.blue};
    background: ${theme.colors.gray['500']};
    accent-color: ${theme.colors.purpleDark};

    :checked {
      border: 1px solid ${theme.colors.purpleDark} !important;
      background: ${theme.colors.purpleDark};
    }
    :checked ~ p {
      text-decoration: line-through;
      color: ${theme.colors.gray['300']};
    }
    :hover {
      cursor: pointer;
    }
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray['100']};
    font-size: 0.875rem;
    width: 90%;
  `}
`

export const CheckMark = styled(FaCheck)`
  ${({ theme }) => css`
    position: fixed;
    margin-left: 5px;
    font-size: 8px;
    color: ${theme.colors.gray['100']};
  `}
`

export const Thrash = styled(RiDeleteBin6Line)`
  ${({ theme }) => css`
    color: ${theme.colors.gray['300']};
    transition: color 0.3s ease-in-out;
    :hover {
      color: ${theme.colors.danger};
      cursor: pointer;
    }
  `}
`
