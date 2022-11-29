import React from 'react'
import moment from 'moment'
import type { CountdownStats } from '../../hook/useCountdown'
import { useCountdown } from '../../hook/useCountdown'

export type CountdownProps = {
  countdownEndDate: string
}

export const Countdown: React.FC<CountdownProps> = ({ countdownEndDate }) => {
  const countdownStats = useCountdown(moment(countdownEndDate))
  return (
    <div className="okp4-nemeton-web-countdown-main">
      {Object.keys(countdownStats).map((key: string, index: number) => {
        const value =
          countdownStats[key as keyof CountdownStats] >= 10
            ? countdownStats[key as keyof CountdownStats]
            : `0${countdownStats[key as keyof CountdownStats]}`
        return (
          <React.Fragment key={key}>
            <div className="okp4-nemeton-web-countdown-stats-container">
              <p className="okp4-nemeton-web-stat-value">{value}</p>
              <p className="okp4-nemeton-web-stat-key">{key}</p>
            </div>
            {index < Object.keys(countdownStats).length - 1 && <span>:</span>}
          </React.Fragment>
        )
      })}
    </div>
  )
}
