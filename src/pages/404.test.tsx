import React from 'react'
import { render, screen } from '../test-utils'
import NotFound from 'pages/404'

describe('HomePage', () => {
  it('should render the 404 page', () => {
    render(<NotFound />)
    const heading = screen.getByText(/Página não encontrada./i)
    expect(heading).toBeInTheDocument()
  })
})
