import type { NextPage } from 'next'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import type { Config } from '../types/config.type'

export type RewardsProps = Pick<Config, 'urls'>

const Rewards: NextPage<RewardsProps> = ({ urls }) => {
  const { typeformUrl } = urls

  return (
    <div className="okp4-nemeton-web-page-main">
      <main>
        <Header typeformUrl={typeformUrl} />
        <div className="okp4-nemeton-web-page-content-container">
          <h1>Rewards</h1>
          <p>Druids will be rewarded with a mix of token rewards + delegation commitment.</p>
          <br />
          <p>
            1% of the total supply of mainnet tokens will be given to Druids as a reward based on
            their participation and performance during the program.Many more tokens (OKP4 foundation
            vesting) will be delegated to Druids based on their participation and performance during
            the program.
          </p>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export default Rewards
