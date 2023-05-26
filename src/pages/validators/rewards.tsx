import { config } from '@/lib/config'
import type { GetServerSideProps, NextPage } from 'next'
import type { Config } from '@/types/config.type'

export type RewardsProps = Pick<Config, 'urls'>

const Rewards: NextPage<RewardsProps> = () => (
  <div className="okp4-nemeton-web-page-main">
    <div className="okp4-nemeton-web-page-content-container" id="rewards">
      <h1>Rewards</h1>
      <p>Druids will be rewarded with a mix of token rewards + delegation commitment.</p>
      <p>
        1% of the total supply of mainnet tokens will be given to Druids as a reward based on their
        participation and performance during the program. Many more tokens (OKP4 foundation vesting)
        will be delegated to Druids based on their participation and performance during the program.
      </p>
    </div>
  </div>
)

export const getServerSideProps: GetServerSideProps<RewardsProps> = async () => ({
  props: {
    ...config
  }
})

export default Rewards
