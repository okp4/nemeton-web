import ClearIcon from '@mui/icons-material/Clear'
import LoupeIcon from '@mui/icons-material/Loupe'
import Link from 'next/link'
import React from 'react'

type ChallengesProps = {
  refObj: React.RefObject<HTMLDivElement> | null
  onClose: () => void
}

export const SidhChallenges: React.FC<ChallengesProps> = ({ onClose, refObj }): JSX.Element => (
  <div className="okp4-nemeton-web-sidh-challenges-container" ref={refObj}>
    <div className="okp4-nemeton-web-sidh-challenges">
      <ClearIcon className="okp4-nemeton-web-challenge-clear-icon" onClick={onClose} />
      <div className="okp4-nemeton-web-sidh-challenges-duration">
        <p>Duration: 4 weeks</p>
        <p>From Dec. 1st to Jan. 1st</p>
      </div>
      <div className="okp4-nemeton-web-sidh-challenges-summary">
        <div className="okp4-nemeton-web-sidh-challenge-subject">
          <h3>Nodes</h3>
          <div className="okp4-nemeton-web-sidh-challenges-rewards">
            <div className="okp4-nemeton-web-sidh-challenge-reward">
              <p>Submit your gentx on time</p>
              <p>{Number(1000).toLocaleString()}</p>
            </div>
            <div className="okp4-nemeton-web-sidh-challenge-divider" />
            <div className="okp4-nemeton-web-sidh-challenge-reward">
              <p>Setup your node </p>
              <p>{Number(2000).toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="okp4-nemeton-web-sidh-challenge-subject">
          <h3>Community</h3>
          <div className="okp4-nemeton-web-sidh-challenges-rewards">
            <div className="okp4-nemeton-web-sidh-challenge-reward">
              <p>Tweet about the OKP4 testnet</p>
              <p>500</p>
            </div>
          </div>
        </div>
        <div className="okp4-nemeton-web-sidh-challenge-subject">
          <h3>Challenges</h3>
          <div className="okp4-nemeton-web-sidh-challenges-rewards">
            <div className="okp4-nemeton-web-sidh-challenge-reward">
              <p>Uptime challenge</p>
              <p>{Number(2500).toLocaleString()}</p>
            </div>
            <div className="okp4-nemeton-web-sidh-challenge-divider" />
            <div className="okp4-nemeton-web-sidh-challenge-reward">
              <p>Submit an original content related to validation</p>
              <p>{Number(10000).toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="okp4-nemeton-web-sidh-challenge-details-container">
          <LoupeIcon />
          <Link href={'/tasks#tasks'}>See detailled tasks</Link>
        </div>
      </div>
    </div>
  </div>
)
