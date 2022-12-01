import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SidhChallenges } from './Challenges'
import { useMediaType } from '../../hook/useMediaType'

export const Sidh = (): JSX.Element => {
  const [isChallengesOpen, setIsChallengesOpen] = useState<boolean>(false)
  const challengeContainerRef = useRef<HTMLDivElement | null>(null)
  const isMobileScreen = useMediaType('(max-width: 580px)')
  const description =
    " This first phase is pretty basic, it is dedicated to setting up Druids' validator environment, participating in the genesis, and getting familiar with the OKP4 testnet."

  const toggleChallengesOpen = useCallback(() => {
    setIsChallengesOpen(!isChallengesOpen)
  }, [isChallengesOpen])

  useEffect(() => {
    if (isChallengesOpen) {
      challengeContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [isChallengesOpen])

  return (
    <div className="okp4-nemeton-web-phase-main">
      <div className="okp4-nemeton-web-phase-container sidh">
        <div className="okp4-nemeton-web-phase-content-container sidh">
          <div className="okp4-nemeton-web-phase-content-details">
            <div className="okp4-nemeton-web-phase-content-title">
              <h2>Phase 1</h2>
              <h1>Sidh</h1>
            </div>
            <p>{description}</p>
            {!isMobileScreen && (
              <div
                className="okp4-nemeton-web-phase-content-button-container"
                onClick={toggleChallengesOpen}
              >
                <span className="okp4-nemeton-web-challenge-button">Challenges & Rewards</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {isMobileScreen && (
        <div
          className="okp4-nemeton-web-phase-content-button-container"
          onClick={toggleChallengesOpen}
        >
          <span className="okp4-nemeton-web-challenge-button">Challenges & Rewards</span>
        </div>
      )}
      {isChallengesOpen && (
        <SidhChallenges onClose={toggleChallengesOpen} refObj={challengeContainerRef} />
      )}
    </div>
  )
}
