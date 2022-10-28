import { useMediaType } from '../../hook/useMediaType'

const description =
  "The second phase is focused on testing Druids' performance and uptime. Maintenance tasks and upgrades will be performed to test different kinds of state migrations."

export const Imbolc = (): JSX.Element => {
  const isMobileScreen = useMediaType('(max-width: 580px)')

  return (
    <div className="okp4-nemeton-web-phase-main ">
      <div className="okp4-nemeton-web-phase-container imbolc">
        <div className="okp4-nemeton-web-phase-content-container no-border imbolc">
          <div className="okp4-nemeton-web-phase-mask-container">
            <div className="okp4-nemeton-web-phase-mask-divider" />
            <h2>Coming Soon</h2>
            <div className="okp4-nemeton-web-phase-mask-divider" />
          </div>
          <div className="okp4-nemeton-web-phase-content-details imbolc">
            <div className="okp4-nemeton-web-phase-content-title">
              <h2>Phase 2</h2>
              <h1>Imbolc</h1>
            </div>
            <p>{description}</p>
            {!isMobileScreen && (
              <span className="okp4-nemeton-web-challenge-button right">Challenges & Rewards</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
