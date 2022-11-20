import { screen, render } from '@testing-library/react'
import { lightTheme } from 'config'
import NotFound from 'pages/404'
import { ThemeProvider } from 'styled-components'

describe('HomePage', () => {
  it('should render the 404 page', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <NotFound />
      </ThemeProvider>
    )
    const heading = screen.getByText(/Página não encontrada./i)
    expect(heading).toBeInTheDocument()
  })
})
