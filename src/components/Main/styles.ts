import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => `
    background-color: ${theme.colors.background};
    color: ${theme.colors.body};
  `}
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`
