import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { config } from '@/lib/config'
import type { Config } from '@/types/config.type'

export type ChallengesProps = Pick<Config, 'urls' | 'phases'>

const Challenges: NextPage<ChallengesProps> = () => {
  return (
    <div className="okp4-nemeton-web-page-main">
      <div className="okp4-nemeton-web-page-content-container challenges" id="challenges">
        <div className="okp4-nemeton-web-page-challenges-container">
          <div className="okp4-nemeton-web-page-challenges-content">
            <h1>Challenges</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<ChallengesProps> = async () => ({
  props: {
    ...config
  }
})

export default Challenges
