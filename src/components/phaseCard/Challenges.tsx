import ClearIcon from '@mui/icons-material/Clear'
import LoupeIcon from '@mui/icons-material/Loupe'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import type { Challenges as TChallenges } from '../../entity/phases/types'

type ChallengesProps = {
  challenges: TChallenges
  refObj: React.RefObject<HTMLDivElement> | null
  onClose: () => void
  phase: string
}

export const Challenges: React.FC<ChallengesProps> = ({
  challenges: { duration, taskCategories },
  phase,
  onClose,
  refObj
}): JSX.Element => {
  const from = duration ? moment(duration.from).utc().format('MMM. Do') : ''
  const to = duration ? moment(duration.to).utc().format('MMM. Do') : ''

  return (
    <div className="okp4-nemeton-web-challenges-container" ref={refObj}>
      <div className="okp4-nemeton-web-challenges">
        <ClearIcon className="okp4-nemeton-web-challenge-clear-icon" onClick={onClose} />
        <div className="okp4-nemeton-web-challenges-duration">
          <p>
            Duration: {duration && moment(duration.to).diff(moment(duration.from), 'weeks')} weeks
          </p>
          <p>{`From ${from} to ${to}`}</p>
        </div>
        <div className="okp4-nemeton-web-challenges-summary">
          {taskCategories.map(({ subject, tasks }, index: number) => (
            <div className="okp4-nemeton-web-challenge-subject" key={index}>
              <h3>{subject}</h3>
              <div className="okp4-nemeton-web-challenges-rewards">
                {tasks.map(({ summary, points }, index: number) => (
                  <div className="okp4-nemeton-web-challenge-reward" key={index}>
                    <p>{summary}</p>
                    <p>{points.toLocaleString()} Pts</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="okp4-nemeton-web-challenge-details-container">
            <LoupeIcon />
            <Link href={`/tasks#${phase}`}>See detailled tasks</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
