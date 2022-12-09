import type { GetServerSideProps, NextPage } from 'next'
import { Head } from '../components/head/Head'
import { Header } from '../components/layout/header/Header'
import { Footer } from '../components/layout/footer/Footer'

import { Sidh } from '../components/sidh/Sidh'
import { Imbolc } from '../components/imbolc/Imbolc'
import { Beltaine } from '../components/beltaine/Beltaine'
import type { Config } from '../types/config.type'
import { config } from '../lib/config'

export type HomeProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Home: NextPage<HomeProps> = props => {
  const { urls } = props
  return (
    <div>
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-phases-main" id="home">
          <Sidh />
          <Imbolc />
          <Beltaine />
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => ({
  props: {
    ...config
  }
})

export default Home
