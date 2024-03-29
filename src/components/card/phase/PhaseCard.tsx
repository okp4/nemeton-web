import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useMediaType } from '@/hook/useMediaType'
import type { TaskDTO, Duration, Status } from '@/data/phase/dto.type'
import { PhaseDropDown } from '@/components/dropDown/phase/PhaseDropDown'

export type PhaseCardProps = Readonly<{
  number: number
  phaseName: string
  phaseDescription: string
  tasks: TaskDTO[]
  phaseDuration?: Duration
  status: Status
}>

const PhaseCard = ({
  number,
  phaseName,
  phaseDescription,
  tasks,
  phaseDuration,
  status
}: PhaseCardProps): JSX.Element => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false)
  const dropDownContainerRef = useRef<HTMLDivElement | null>(null)
  const isMobileScreen = useMediaType('(max-width: 580px)')

  const toggleDropDown = useCallback(() => {
    status !== 'closed' && setIsDropDownOpen(!isDropDownOpen)
  }, [isDropDownOpen, status])

  useEffect(() => {
    if (isDropDownOpen) {
      dropDownContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [isDropDownOpen])

  const mask = (
    <div className="okp4-nemeton-web-phase-card-mask-container">
      <div className="okp4-nemeton-web-phase-card-mask-divider" />
      <h2>Coming Soon</h2>
      <div className="okp4-nemeton-web-phase-card-mask-divider" />
    </div>
  )

  const validatorsChallengesButton = (
    <div
      className={classNames('okp4-nemeton-web-phase-card-content-button-container', status)}
      onClick={toggleDropDown}
    >
      <span className="okp4-nemeton-web-phase-card-button right">Challenges & Rewards</span>
    </div>
  )

  const buildersChallengesButton = (
    <>
      <div className={classNames('okp4-nemeton-web-phase-card-content-button-container', status)}>
        <Link className="okp4-nemeton-web-phase-card-button right" href="/validators/tasks#tasks">
          Challenges for Validators
        </Link>
      </div>
      <div className={classNames('okp4-nemeton-web-phase-card-content-button-container', status)}>
        <Link
          className="okp4-nemeton-web-phase-card-button right"
          href="/builders/challenges#challenges"
        >
          Challenges for Builders
        </Link>
      </div>
    </>
  )

  const phaseCardState = (
    <div className={classNames('okp4-nemeton-web-phase-card-content-state', phaseName)}>
      {status === 'closed' ? 'Done' : 'In progress'}
    </div>
  )

  return (
    <div className="okp4-nemeton-web-phase-card-main">
      <div className={classNames('okp4-nemeton-web-phase-card-container', phaseName)}>
        <div className="okp4-nemeton-web-phase-card-content">
          <div
            className={classNames(
              'okp4-nemeton-web-phase-card-content-container',
              { 'no-border': status === 'coming' },
              phaseName
            )}
          >
            {status === 'coming' && mask}
            <div className={classNames('okp4-nemeton-web-phase-card-content-details', phaseName)}>
              <div className="okp4-nemeton-web-phase-card-content-title">
                <h2>Phase {number}</h2>
                <h1>{phaseName}</h1>
              </div>
              <p>{phaseDescription}</p>
              {!isMobileScreen &&
                (status !== 'coming' && phaseName !== 'samhain'
                  ? validatorsChallengesButton
                  : buildersChallengesButton)}
            </div>
          </div>
          {!isMobileScreen && status !== 'coming' && phaseCardState}
        </div>
      </div>
      {isMobileScreen && status !== 'coming' && phaseCardState}
      {isMobileScreen && status !== 'coming' && (
        <div>{phaseName !== 'samhain' ? validatorsChallengesButton : buildersChallengesButton}</div>
      )}
      {isDropDownOpen && phaseDuration && (
        <PhaseDropDown
          onClose={toggleDropDown}
          phaseDuration={phaseDuration}
          phaseName={phaseName}
          refObj={dropDownContainerRef}
          tasks={tasks}
        />
      )}
    </div>
  )
}

export default PhaseCard
