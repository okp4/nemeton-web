import classNames from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useMediaType } from '../../hook/useMediaType'
import { Challenges } from './Challenges'
import type { Phase } from '../../entity/phases/types'

export type PhaseCardProps = Phase

export const PhaseCard = ({
  number,
  name,
  description,
  challenges,
  status
}: PhaseCardProps): JSX.Element => {
  const [isChallengesOpen, setIsChallengesOpen] = useState<boolean>(false)
  const challengeContainerRef = useRef<HTMLDivElement | null>(null)
  const isMobileScreen = useMediaType('(max-width: 580px)')

  const toggleChallengesOpen = useCallback(() => {
    status === 'active' && setIsChallengesOpen(!isChallengesOpen)
  }, [isChallengesOpen, status])

  useEffect(() => {
    if (isChallengesOpen) {
      challengeContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [isChallengesOpen])

  const buttonChallenges = (
    <div className="okp4-nemeton-web-phase-content-button-container" onClick={toggleChallengesOpen}>
      <span className="okp4-nemeton-web-challenge-button right">Challenges & Rewards</span>
    </div>
  )

  return (
    <div className="okp4-nemeton-web-phase-main">
      <div className={classNames('okp4-nemeton-web-phase-container', name)}>
        <div
          className={classNames(
            'okp4-nemeton-web-phase-content-container',
            { 'no-border': status !== 'active' },
            name
          )}
        >
          {status !== 'active' && (
            <div className="okp4-nemeton-web-phase-mask-container">
              <div className="okp4-nemeton-web-phase-mask-divider" />
              <h2>{status === 'coming' ? 'Coming Soon' : 'Closed'}</h2>
              <div className="okp4-nemeton-web-phase-mask-divider" />
            </div>
          )}
          <div className={classNames('okp4-nemeton-web-phase-content-details', name)}>
            <div className="okp4-nemeton-web-phase-content-title">
              <h2>Phase {number}</h2>
              <h1>{name}</h1>
            </div>
            <p>{description}</p>
            {status === 'active' || !isMobileScreen ? buttonChallenges : null}
          </div>
        </div>
      </div>
      {isChallengesOpen && challenges && name && (
        <Challenges
          challenges={challenges}
          onClose={toggleChallengesOpen}
          phase={name}
          refObj={challengeContainerRef}
        />
      )}
    </div>
  )
}
