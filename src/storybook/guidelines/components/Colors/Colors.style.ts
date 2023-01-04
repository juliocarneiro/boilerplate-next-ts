import styled, { css } from 'styled-components'
import { ColorsStyleProps } from './Colors.types'

export const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  flex-direction: column;
  font-family: sans-serif;
`

export const Color = styled.div<ColorsStyleProps>`
  ${({ color }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${color};
    padding: 32px;
    flex-wrap: wrap;
  `}
`

export const Description = styled.div<ColorsStyleProps>`
  ${({ color }) => css`
    color: ${color};
    font-weight: 700;
  `}
`

export const Code = styled.div<ColorsStyleProps>`
  ${({ color }) => css`
    color: ${color};
    font-weight: 400;
  `}
`
