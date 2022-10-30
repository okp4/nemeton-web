import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/layout/header/Header'
import { Footer } from '../components/layout/footer/Footer'

import { Sidh } from '../components/sidh/Sidh'
import { Imbolc } from '../components/imbolc/Imbolc'
import { Beltaine } from '../components/beltaine/Beltaine'
import type { Config } from '../types/config.type'

export type HomeProps = {
  staticUrls: Config['app']
}

const Home: NextPage<HomeProps> = ({ staticUrls }) => {
  return (
    <div>
      <Head>
        <title>Nemeton Program - OKP4</title>
        <meta
          content="Incentivized testnet, Validators, Know, Blockchain, Testnet, OKP4"
          name="keywords"
        />
        <link href="/okp4-logo.png" rel="icon" />
      </Head>

      <main>
        <Header typeformUrl={staticUrls.typeformUrl} />
        <div className="okp4-nemeton-web-phases-main">
          <Sidh />
          <Imbolc />
          <Beltaine />
        </div>
        <Footer staticUrls={staticUrls} />
      </main>
    </div>
  )
}

export default Home
