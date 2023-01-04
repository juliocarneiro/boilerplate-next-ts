import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'theme/defaultTheme'
import GlobalStyles from '@/theme/GlobalStyles'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
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
