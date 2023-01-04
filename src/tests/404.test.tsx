import { screen, render } from '@testing-library/react'
import { defaultTheme } from 'theme/defaultTheme'
import NotFound from 'pages/404'
import { ThemeProvider } from 'styled-components'

describe('404', () => {
  it('should render the 404 page', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <NotFound />
      </ThemeProvider>
    )
    const heading = screen.getByText(/Página não encontrada./i)
    expect(heading).toBeInTheDocument()
  })
})
