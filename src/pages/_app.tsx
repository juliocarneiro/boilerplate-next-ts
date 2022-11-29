import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { lightTheme, darkTheme, HEADER } from 'theme'

import GlobalStyles from 'theme/GlobalStyles'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Head>
        <title>{HEADER.title}</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000" />
        <meta name="description" content={HEADER.description} />
      </Head>
      <button onClick={toggleTheme} className="mode-button">
        {theme == 'light' ? 'LIGHT MODE' : 'DARK MODE'}
      </button>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
