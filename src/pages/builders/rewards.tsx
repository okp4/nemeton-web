import type { GetServerSideProps, NextPage } from 'next'
import type { Config } from '@/types/config.type'
import { config } from '@/lib/config'

export type RewardsProps = Pick<Config, 'urls'>

const Rewards: NextPage<RewardsProps> = () => (
  <div className="okp4-nemeton-web-page-main">
    <div className="okp4-nemeton-web-page-content-container" id="rewards">
      <h1>Rewards</h1>
      <p>
        Awarded Builders will be rewarded with mainnet tokens. They will also have a head start when
        looking for Grants from the OKP4 Foundation.
      </p>
      <p>
        A maximum of 2% of the total supply of mainnet tokens will be allocated to Builders based on
        their contribution judged by the OKP4 core team. OKP4 reserves the right to not allocate the
        entirety of the rewards allocated for Builders.
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
