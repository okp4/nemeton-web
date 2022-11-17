import type { GetServerSideProps, NextPage } from 'next'
import { BaseCard } from '../components/card/BaseCard'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import type { PodiumStep } from '../components/podium/Podium'
import { Podium } from '../components/podium/Podium'
import { config } from '../lib/config'
import type { Config } from '../types/config.type'

export type LeaderboardProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const summaryCards = [
  {
    title: <h1 className="okp4-nemeton-web-page-leaderboard-summary-card-title">150</h1>,
    description: (
      <p className="okp4-nemeton-web-page-leaderboard-summary-card-description">
        Druids participing
      </p>
    )
  },
  {
    title: (
      <div className="okp4-nemeton-web-page-leaderboard-summary-card-title-container">
        <h2 className="okp4-nemeton-web-page-leaderboard-summary-card-title">Phase 1</h2>
        <h1 className="okp4-nemeton-web-page-leaderboard-summary-card-title">Sidh</h1>
      </div>
    ),
    description: (
      <p className="okp4-nemeton-web-page-leaderboard-summary-card-description">
        Current phase name
      </p>
    )
  },
  {
    title: <h1 className="okp4-nemeton-web-page-leaderboard-summary-card-title">12 : 54 : 26</h1>,
    description: (
      <p className="okp4-nemeton-web-page-leaderboard-summary-card-description">
        Time before the end of the current phase
      </p>
    )
  }
]

const podiumSteps: PodiumStep[] = [
  {
    rank: 1,
    backgroundImageUrl: '/image/beltaine-medium.webp',
    legend: 'Ralph Edwards'
  },
  {
    rank: 2,
    backgroundImageUrl: '/image/imbolc-medium.webp',
    legend: 'Ronald Richards'
  },
  {
    rank: 3,
    backgroundImageUrl: '/image/sidh.webp',
    legend: 'Dianne Russell'
  }
]

const Leaderboard: NextPage<LeaderboardProps> = props => {
  const { urls } = props
  const { typeformUrl } = urls

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header typeformUrl={typeformUrl} />
        <div className="okp4-nemeton-web-page-content-container" id="leaderboard">
          <h1>Leaderboard</h1>
          <div className="okp4-nemeton-web-page-divider" />
          <p>Welcome to the Nemeton Leaderboard!</p>
          <div className="okp4-nemeton-web-page-leaderboard-summary-container">
            {summaryCards.map(({ title, description }, index) => (
              <BaseCard description={description} key={index} title={title} />
            ))}
          </div>
          <div className="okp4-nemeton-web-page-leaderboard-main-container">
            <div className="okp4-nemeton-web-page-leaderboard-main-wrapper">
              <p className="okp4-nemeton-web-page-leaderboard-main-description">
                Here you can check the points earned by all the druids. <br />
                Complete more tasks to become the leader!
              </p>
              <Podium steps={podiumSteps} />
            </div>
          </div>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<LeaderboardProps> = async () => ({
  props: {
    ...config
  }
})

export default Leaderboard
