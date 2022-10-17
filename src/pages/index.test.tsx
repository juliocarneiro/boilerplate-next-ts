import { screen, render } from '@testing-library/react'
import Home from 'pages/index'

describe('HomePage', () => {
  it('should render the index page', () => {
    render(<Home />)
    const heading = screen.getByText(/Boilerplate/i)
    expect(heading).toBeInTheDocument()
  })
})
