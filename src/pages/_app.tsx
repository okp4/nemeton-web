import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Layout } from '@/components/layout/Layout'
import '@/styles.scss'

const errorPagesUrls = '/_error'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  if (router.pathname === errorPagesUrls) return <Component {...pageProps} />

  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
