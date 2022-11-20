import { screen, render } from '@testing-library/react'
import { lightTheme } from 'config'
import Home from 'pages/index'
import { ThemeProvider } from 'styled-components'

describe('HomePage', () => {
  it('should render the index page', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>
    )
    const heading = screen.getByText(/Boilerplate/i)
    expect(heading).toBeInTheDocument()
  })
})
