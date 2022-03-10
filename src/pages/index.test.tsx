import React from 'react'
import { render, screen } from '../test-utils'
import Home from 'pages/index'

describe('HomePage', () => {
  it('should render the heading', () => {
    render(<Home />)
    const heading = screen.getByText(/Boilerplate ::/i)
    expect(heading).toBeInTheDocument()
  })
})
