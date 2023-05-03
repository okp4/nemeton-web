import { config } from '../../lib/config'
import { Head } from '../../components/head/Head'
import { Header } from '../../components/layout/header/Header'
import { Footer } from '../../components/layout/footer/Footer'
import type { GetServerSideProps, NextPage } from 'next'
import type { Config } from '../../types/config.type'

export type ChallengesProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Challenges: NextPage<ChallengesProps> = props => {
  const { urls } = props

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-page-content-container" id="challenges">
          <h1>Challenges</h1>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<ChallengesProps> = async () => ({
  props: {
    ...config
  }
})

export default Challenges
