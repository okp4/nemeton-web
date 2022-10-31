import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const Document = (): JSX.Element => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="/script/matomo.js" strategy="beforeInteractive"></Script>
      </body>
    </Html>
  )
}

export default Document
