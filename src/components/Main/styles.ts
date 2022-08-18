import styled from 'styled-components'
import { COLORS } from 'config'

export const Wrapper = styled.main`
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`
