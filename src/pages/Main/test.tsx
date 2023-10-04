import { render, screen } from '@testing-library/react'

import Main from './index'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/theme/default'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Main
          title="Boilerplate V3"
          description="Typescript, ReactJS, NextJS e Styled Components"
        />
      </ThemeProvider>
    )

    expect(
      screen.getByRole('heading', { name: /Boilerplate/i })
    ).toBeInTheDocument()
  })
})
