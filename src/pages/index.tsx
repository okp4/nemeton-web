import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/layout/header/Header'
import { Sidh } from '../components/sidh/Sidh'

const Home: NextPage = () => {
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
        <Header />
        <Sidh />
      </main>
    </div>
  )
}

export default Home
