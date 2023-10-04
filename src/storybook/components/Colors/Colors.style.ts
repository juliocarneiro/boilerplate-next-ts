import styled, { css } from 'styled-components'
import { ColorsStyleProps } from './Colors.types'

export const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: sans-serif;

  gap: 16px;
`

export const Color = styled.div<ColorsStyleProps>`
  ${({ color }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${color};
    width: 144px;
    height: 144px;
    flex-wrap: wrap;
    border-radius: 12px;
  `}
`

export const Description = styled.div<ColorsStyleProps>`
  ${({ color }) => css`
    color: ${color};
    font-weight: 700;
    font-size: 14px !important;
    margin-bottom: 8px !important;
  `}
`

export const Code = styled.div<ColorsStyleProps>`
  ${({ color }) => css`
    color: ${color};
    font-weight: 400;
    font-size: 12px !important;
    background: ${(color?.includes('fff') ? `${color}fff` : `${color}000`) +
    '1A'}!important;
    border-radius: 4px !important;
    padding: 4px 8px;
  `}
`
