'use client'

import GlobalStyles from '@/styles/global'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/theme/default'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
