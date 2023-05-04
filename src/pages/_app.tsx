import type { AppProps } from 'next/app'
import '@/styles.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
