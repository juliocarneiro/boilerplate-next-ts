import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { defaultTheme, HEADER } from 'theme/defaultTheme'

import GlobalStyles from 'theme/GlobalStyles'
import { ThemeProvider } from 'styled-components'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Head>
        <title>{HEADER.title}</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000" />
        <meta name="description" content={HEADER.description} />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
