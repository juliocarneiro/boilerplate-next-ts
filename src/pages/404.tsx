import React from 'react'
import styled from 'styled-components'

const NotFoundWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const NotFound = () => (
  <NotFoundWrapper>
    <p className="text-center">
      <b style={{ fontSize: 42 }}>404</b>
      <br />
      Página não encontrada.
    </p>
  </NotFoundWrapper>
)

export default NotFound
