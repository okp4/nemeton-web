import type { GetServerSideProps, NextPage } from 'next'
import type { Config } from '@/types/config.type'
import { config } from '@/lib/config'
import { PhaseCard } from '@/components/card/phase/PhaseCard'
import Phases from '@/data/phase/index'
import type { PhaseDTO } from '@/data/phase/dto.type'

export type HomeProps = Pick<Config, 'phases'>

const Home: NextPage<HomeProps> = props => {
  const { phases } = props

  return (
    <div>
      <div className="okp4-nemeton-web-home-main" id="home">
        {Object.values(Phases(phases))
          .reverse()
          .map(
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
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => ({
  props: {
    ...config
  }
})

export default Home
