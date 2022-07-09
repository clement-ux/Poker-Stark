import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { getInstalledInjectedConnectors, StarknetProvider } from '@starknet-react/core'

function MyApp({ Component, pageProps }: AppProps) {
  const connectors = getInstalledInjectedConnectors()

  return (
    <StarknetProvider connectors={connectors} autoConnect>
      <NextHead>
        <title>Poker Starks</title>
      </NextHead>
      <Component {...pageProps} />
    </StarknetProvider>
  )
}

export default MyApp