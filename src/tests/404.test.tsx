import { screen, render } from '@testing-library/react'
import NotFound from 'pages/404'

describe('HomePage', () => {
  it('should render the 404 page', () => {
    render(<NotFound />)
    const heading = screen.getByText(/Página não encontrada./i)
    expect(heading).toBeInTheDocument()
  })
})
