import './beltaine.scss'

export const Beltaine = (): JSX.Element => {
  const description =
    'The third phase is all about token dynamics! Druids will engage in various node and community tasks with their precious tokens. Challenges will include some IBC-related tasks to open Nemeton to the interchain world...ime. Maintenance tasks and upgrades will be performed to test different kinds of state migrations.'
  return (
    <div className="okp4-nemeton-web-beltaine-container">
      <div className="okp4-nemeton-web-beltaine-phase">
        <div className="okp4-nemeton-web-beltaine-announcement">
          <div className="okp4-nemeton-web-beltaine-divider" />
          <h2>Coming Soon</h2>
          <div className="okp4-nemeton-web-beltaine-divider" />
        </div>
        <div className="okp4-nemeton-web-beltaine-phase-details">
          <div className="okp4-nemeton-web-beltaine-phase-title">
            <h2>Phase 3</h2>
            <h1>Beltaine</h1>
          </div>
          <p>{description}</p>
          <button>Challenges & Rewards</button>
        </div>
      </div>
    </div>
  )
}
