import { useCallback, useState } from 'react'
import { SidhChallenges } from './Challenges'
import './sidh.scss'

export const Sidh = (): JSX.Element => {
  const [isChallengesOpen, setIsChallengesOpen] = useState<boolean>(false)
  const description =
    " This first phase is pretty basic, it is dedicated to setting up Druids' validator environment, participating in the genesis, and getting familiar with the OKP4 testnet."

  const toggleChallengesOpen = useCallback(
    () => setIsChallengesOpen(!isChallengesOpen),
    [isChallengesOpen]
  )

  return (
    <div className="okp4-nemeton-web-sidh-with-challenges-container">
      <div className="okp4-nemeton-web-sidh-container">
        <div className="okp4-nemeton-web-sidh-phase">
          <div className="okp4-nemeton-web-sidh-phase-details">
            <div className="okp4-nemeton-web-sidh-phase-title">
              <h2>Phase 1</h2>
              <h1>Sidh</h1>
            </div>
            <p>{description}</p>
            <button onClick={toggleChallengesOpen}>Challenges & Rewards</button>
          </div>
        </div>
      </div>
      {isChallengesOpen && <SidhChallenges />}
    </div>
  )
}
