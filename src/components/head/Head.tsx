import getConfig from 'next/config'
import HtmlHead from 'next/head'

export type HeadProps = {
  title: string
  keywords: string
}

// eslint-disable-next-line @typescript-eslint/typedef
const { publicRuntimeConfig } = getConfig()

export const Head: React.FC<HeadProps> = ({ title, keywords }): JSX.Element => (
  <HtmlHead>
    <title>{title}</title>
    <meta content={keywords} name="keywords" />
    <meta content={publicRuntimeConfig.version} name="version" />
    <link href="/okp4-logo.png" rel="icon" />
  </HtmlHead>
)
