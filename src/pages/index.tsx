import type { NextPage } from 'next'
import getConfig from 'next/config'
import Head from 'next/head'
import { Header } from '../components/layout/header/Header'
import { Footer } from '../components/layout/footer/Footer'

import { Sidh } from '../components/sidh/Sidh'
import { Imbolc } from '../components/imbolc/Imbolc'
import { Beltaine } from '../components/beltaine/Beltaine'
import type { Config } from '../types/config.type'

export type HomeProps = {
  keywords: Config['keywords']
  urls: Config['urls']
}

// eslint-disable-next-line @typescript-eslint/typedef
const { publicRuntimeConfig } = getConfig()

const Home: NextPage<HomeProps> = ({ keywords, urls }) => {
  return (
    <div>
      <Head>
        <title>Nemeton Program - OKP4</title>
        <meta content={keywords} name="keywords" />
        <meta content={publicRuntimeConfig.version} name="version" />
        <link href="/okp4-logo.png" rel="icon" />
      </Head>

      <main>
        <Header typeformUrl={urls.typeformUrl} />
        <div className="okp4-nemeton-web-phases-main">
          <Sidh />
          <Imbolc />
          <Beltaine />
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export default Home
