import classNames from 'classnames'
import React from 'react'
import moment from 'moment'

type PodiumProps = {
  steps: PodiumStep[]
}

export type PodiumStep = {
  backgroundImageUrl: string
  legend: string
  rank: number
}

export const Podium: React.FC<PodiumProps> = ({ steps }) => (
  <div className="okp4-nemeton-web-podium-main">
    <h2>Podium</h2>
    <div className="okp4-nemeton-web-podium-steps-container">
      {steps.map(({ rank, backgroundImageUrl, legend }, index) => {
        const rankClassname = classNames({
          first: rank === 1,
          second: rank === 2,
          third: rank === 3
        })
        return (
          <div
            className={`okp4-nemeton-web-podium-step-container ${rankClassname}`}
            key={index}
            style={{ order: rank === 1 ? 2 : rank === 2 ? 1 : 3 }}
          >
            <div
              className={`okp4-nemeton-web-podium-step-wrapper ${rankClassname}`}
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
              <div className={`okp4-nemeton-web-podium-step-rank-container ${rankClassname}`}>
                <span>{moment.localeData().ordinal(rank)}</span>
              </div>
            </div>
            <p>{legend}</p>
          </div>
        )
      })}
    </div>
  </div>
)
