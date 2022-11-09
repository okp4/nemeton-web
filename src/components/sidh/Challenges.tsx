import ClearIcon from '@mui/icons-material/Clear'
import React from 'react'

type ChallengesProps = {
  refObj: React.RefObject<HTMLDivElement> | null
  onClose: () => void
}

export const SidhChallenges: React.FC<ChallengesProps> = ({ onClose, refObj }): JSX.Element => (
  <div className="okp4-nemeton-web-sidh-challenges-container" onClick={onClose} ref={refObj}>
    <div className="okp4-nemeton-web-sidh-challenges">
      <ClearIcon className="okp4-nemeton-web-challenge-clear-icon" />
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
              <p>100</p>
            </div>
            <div className="okp4-nemeton-web-sidh-challenge-divider" />
            <div className="okp4-nemeton-web-sidh-challenge-reward">
              <p>Set up a validator node </p>
              <p>100</p>
            </div>
            <div className="okp4-nemeton-web-sidh-challenge-divider" />
            <div className="okp4-nemeton-web-sidh-challenge-reward">
              <p>Expose public API (RPC, gRPC)</p>
              <p>75</p>
            </div>
          </div>
        </div>
        <div className="okp4-nemeton-web-sidh-challenge-subject">
          <h3>Community</h3>
          <div className="okp4-nemeton-web-sidh-challenges-rewards">
            <div className="okp4-nemeton-web-sidh-challenge-reward">
              <p>
                Tweet about the OKP4 testnet (basis points, +100% if creativity, +100% if
                engagement)
              </p>
              <p>100</p>
            </div>
          </div>
        </div>
        <div className="okp4-nemeton-web-sidh-challenge-subject">
          <h3>Challenges</h3>
          <div className="okp4-nemeton-web-sidh-challenges-rewards">
            <div className="okp4-nemeton-web-sidh-challenge-reward">
              <p>Propose some improvements about the node operators docs</p>
              <p>100</p>
            </div>
            <div className="okp4-nemeton-web-sidh-challenge-divider" />
            <div className="okp4-nemeton-web-sidh-challenge-reward">
              <p>Free initiatives: help us get referenced in explorers, data aggregators… + PRs…</p>
              <p>75</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
