import ClearIcon from '@mui/icons-material/Clear'
import LoupeIcon from '@mui/icons-material/Loupe'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import type { Duration, Task } from '../../data/phase/dto.type'

type ChallengesProps = {
  tasks: Task[]
  refObj: React.RefObject<HTMLDivElement> | null
  onClose: () => void
  phaseName: string
  phaseDuration: Duration
}

export const Challenges: React.FC<ChallengesProps> = ({
  tasks,
  phaseName,
  onClose,
  refObj,
  phaseDuration
}): JSX.Element => {
  const from = moment(phaseDuration.from).utc().format('MMM. Do')
  const to = moment(phaseDuration.to).utc().format('MMM. Do')

  return (
    <div className="okp4-nemeton-web-challenges-container" ref={refObj}>
      <div className="okp4-nemeton-web-challenges">
        <ClearIcon className="okp4-nemeton-web-challenge-clear-icon" onClick={onClose} />
        <div className="okp4-nemeton-web-challenges-duration">
          <p>
            Duration: {moment(phaseDuration.to).diff(moment(phaseDuration.from), 'weeks')} weeks
          </p>
          <p>{`From ${from} to ${to}`}</p>
        </div>

        <div className="okp4-nemeton-web-challenges-task">
          {tasks.map(({ group: subject, taskName, points }, index: number, array) => {
            const previous: Task | null = index > 0 ? array[index - 1] : null
            const mustDisplaySubject = !previous || previous.group !== subject
            return (
              <div className="okp4-nemeton-web-challenge-subject" key={index}>
                {mustDisplaySubject && <h3>{subject}</h3>}
                <div className="okp4-nemeton-web-challenges-rewards">
                  <div className="okp4-nemeton-web-challenge-reward" key={index}>
                    <p>{taskName}</p>
                    <p>{points.toLocaleString()} Pts</p>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="okp4-nemeton-web-challenge-details-container">
            <LoupeIcon />
            <Link href={`/tasks#${phaseName}`}>See detailled tasks</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
