import type { GetServerSideProps, NextPage } from 'next'
import { Head } from '../components/head/Head'
import { Header } from '../components/layout/header/Header'
import { Footer } from '../components/layout/footer/Footer'
import type { Config } from '../types/config.type'
import { config } from '../lib/config'
import { PhaseCard } from '../components/phaseCard/PhaseCard'
import Phases from '../entity/phases/index'
import type { Phase } from '../entity/phases/types'

export type HomeProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Home: NextPage<HomeProps> = props => {
  const { urls } = props

  return (
    <div>
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-phases-main" id="home">
          {Object.values(Phases).map(({ challenges, description, name, status, number }: Phase) => (
            <div key={number}>
              <PhaseCard
                challenges={challenges}
                description={description}
                name={name}
                number={number}
                status={status}
              />
            </div>
          ))}
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
