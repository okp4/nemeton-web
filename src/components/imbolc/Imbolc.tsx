import './imbolc.scss'

export const Imbolc = (): JSX.Element => {
  const description =
    "The second phase is focused on testing Druids' performance and uptime. Maintenance tasks and upgrades will be performed to test different kinds of state migrations."
  return (
    <div className="okp4-nemeton-web-imbolc-container">
      <div className="okp4-nemeton-web-imbolc-phase">
        <div className="okp4-nemeton-web-imbolc-announcement">
          <h2>OPEN January 4th @10A.M.</h2>
        </div>
        <div className="okp4-nemeton-web-imbolc-phase-details">
          <div className="okp4-nemeton-web-imbolc-phase-title">
            <h2>Phase 2</h2>
            <h1>Imbolc</h1>
          </div>
          <p>{description}</p>
          <button>Challenges & Rewards</button>
        </div>
      </div>
    </div>
  )
}
