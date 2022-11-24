import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'theme'
import GlobalStyles from '@/theme/GlobalStyles'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
