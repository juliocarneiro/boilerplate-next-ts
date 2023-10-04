'use client'

import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => `
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    h1{
      font-weight: 800;
      font-size: ${theme.sizes.display.xl};
      margin-bottom: 10px;
    }
    p{
      font-weight: 400;
      font-size: ${theme.sizes.display.s};
    }
`}
`
