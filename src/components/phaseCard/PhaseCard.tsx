import classNames from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useMediaType } from '../../hook/useMediaType'
import { Challenges } from './Challenges'
import type { PhaseDTO } from '../../data/phase/dto.type'

export type PhaseCardProps = PhaseDTO

export const PhaseCard = ({
  number,
  phaseName,
  phaseDescription,
  tasks,
  phaseDuration,
  status
}: PhaseCardProps): JSX.Element => {
  const [isChallengesOpen, setIsChallengesOpen] = useState<boolean>(false)
  const challengeContainerRef = useRef<HTMLDivElement | null>(null)
  const isMobileScreen = useMediaType('(max-width: 580px)')

  const toggleChallenges = useCallback(() => {
    status !== 'coming' && setIsChallengesOpen(!isChallengesOpen)
  }, [isChallengesOpen, status])

  useEffect(() => {
    if (isChallengesOpen) {
      challengeContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [isChallengesOpen])

  const buttonChallenges = (
    <div className="okp4-nemeton-web-phase-content-button-container" onClick={toggleChallenges}>
      <span className="okp4-nemeton-web-challenge-button right">Challenges & Rewards</span>
    </div>
  )

  return (
    <div className="okp4-nemeton-web-phase-main">
      <div className={classNames('okp4-nemeton-web-phase-container', phaseName)}>
        <div
          className={classNames(
            'okp4-nemeton-web-phase-content-container',
            { 'no-border': status === 'coming' },
            phaseName
          )}
        >
          {status === 'coming' && (
            <div className="okp4-nemeton-web-phase-mask-container">
              <div className="okp4-nemeton-web-phase-mask-divider" />
              <h2>Coming Soon</h2>
              <div className="okp4-nemeton-web-phase-mask-divider" />
            </div>
          )}
          <div className={classNames('okp4-nemeton-web-phase-content-details', phaseName)}>
            <div className="okp4-nemeton-web-phase-content-title">
              <h2>Phase {number}</h2>
              <h1>{phaseName}</h1>
            </div>
            <p>{phaseDescription}</p>
            {status !== 'coming' || !isMobileScreen ? buttonChallenges : null}
          </div>
        </div>
      </div>
      {isChallengesOpen && phaseDuration && (
        <Challenges
          onClose={toggleChallenges}
          phaseDuration={phaseDuration}
          phaseName={phaseName}
          refObj={challengeContainerRef}
          tasks={tasks}
        />
      )}
    </div>
  )
}
