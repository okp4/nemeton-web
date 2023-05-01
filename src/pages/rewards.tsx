import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Head } from '@/components/head/Head'
import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import { config } from '@/lib/config'
import type { GetServerSideProps, NextPage } from 'next'
import type { Config } from '@/types/config.type'

export type RewardsProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Rewards: NextPage<RewardsProps> = props => {
  const router = useRouter()
  const { urls } = props

  const renderRewardsContent = useMemo(
    () =>
      router.asPath.startsWith('/builders') ? (
        <>
          <h1>Rewards</h1>
          <p>
            Awarded Builders will be rewarded with mainnet tokens. They will also have a head start
            when looking for Grants from the OKP4 Foundation.
          </p>
          <p>
            A maximum of 2% of the total supply of mainnet tokens will be allocated to Builders
            based on their contribution judged by the OKP4 core team. OKP4 reserves the right to not
            allocate the entirety of the rewards allocated for Builders.
          </p>
        </>
      ) : (
        <>
          <h1>Rewards</h1>
          <p>Druids will be rewarded with a mix of token rewards + delegation commitment.</p>
          <p>
            1% of the total supply of mainnet tokens will be given to Druids as a reward based on
            their participation and performance during the program. Many more tokens (OKP4
            foundation vesting) will be delegated to Druids based on their participation and
            performance during the program.
          </p>
        </>
      ),
    [router.asPath]
  )

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-page-content-container" id="rewards">
          {renderRewardsContent}
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<RewardsProps> = async () => ({
  props: {
    ...config
  }
})

export default Rewards
