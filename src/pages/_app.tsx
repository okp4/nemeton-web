import '../main.scss'
import type { AppProps } from 'next/app'
import type { Config } from '../types/config.type'
import { useEffect, useState } from 'react'

const fetchConfig = async (): Promise<Config> => {
  const response = await fetch('/api/config')
  return await response.json()
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element | null {
  const [config, setConfig] = useState<Config | null>(null)

  useEffect(() => {
    fetchConfig()
      .then(setConfig)
      .catch((error: unknown) => console.error(error))
  }, [])
  return config && <Component {...pageProps} staticUrls={config.app} />
}

export default MyApp
