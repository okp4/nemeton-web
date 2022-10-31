import type { NextPage } from 'next'
import { Head } from '../components/head/Head'
import { Header } from '../components/layout/header/Header'
import { Footer } from '../components/layout/footer/Footer'

import { Sidh } from '../components/sidh/Sidh'
import { Imbolc } from '../components/imbolc/Imbolc'
import { Beltaine } from '../components/beltaine/Beltaine'
import type { Config } from '../types/config.type'

export type HomeProps = Pick<Config, 'title' | 'keywords' | 'urls'>

const Home: NextPage<HomeProps> = ({ keywords, title, urls }) => {
  return (
    <div>
      <Head keywords={keywords} title={title} />
      <main>
        <Header typeformUrl={urls.typeformUrl} />
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

export default Home
