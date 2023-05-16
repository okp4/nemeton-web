import type { GetServerSideProps, NextPage } from 'next'
import { Head } from '@/components/head/Head'
import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import type { Config } from '@/types/config.type'
import { config } from '@/lib/config'
import { PhaseCard } from '@/components/card/phase/PhaseCard'
import Phases from '@/data/phase/index'
import type { PhaseDTO } from '@/data/phase/dto.type'

export type HomeProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls' | 'phases'>

const Home: NextPage<HomeProps> = props => {
  const { urls, phases } = props

  return (
    <div>
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-home-main" id="home">
          {Object.values(Phases(phases)).reverse().map(
            ({ tasks, phaseDescription, phaseName, status, number, phaseDuration }: PhaseDTO) => (
              <div key={number}>
                <PhaseCard
                  number={number}
                  phaseDescription={phaseDescription}
                  phaseDuration={phaseDuration}
                  phaseName={phaseName}
                  status={status}
                  tasks={tasks}
                />
              </div>
            )
          )}
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
