import { getPhaseStatus } from '@/utils'
import type { PhasesConfig } from '@/types/config.type'
import type { PhaseDTO } from './dto.type'

export const samhain = ({ samhain: { startDate, endDate } }: PhasesConfig): PhaseDTO => ({
  number: 5,
  phaseName: 'samhain',
  phaseDescription:
    'Samhain is no longer only for validators but for builders too and its main objective is the emergence of uses and applications of the OKP4 protocol.',
  status: getPhaseStatus(startDate, endDate),
  phaseDuration: {
    from: startDate,
    to: endDate
  },
  tasks: [],
  challenges: [
    {
      group: 'part 1: Invoke the power of Dagda - From May, 24th',
      challengeDescription: (
        <p>
          In the Micro challenges phase, we&apos;ll be invoking the power of Dagda, one of the main
          gods of Celtic mythology, to develop specific bricks to interact with the protocol.
          Indeed, before having complete and complex applications, it is essential to have a panel
          of services available, almost elementary bricks, which will stimulate the creativity of
          developers.
        </p>
      ),
      challengeContent: [
        {
          title: 'Connectors',
          contentDescription: (
            <>
              <p>Connect a storage service like S3</p>
              <p>Connect an IDSA Connector</p>
              <p>Connect an infrastructure service</p>
              <p>Connect a business intelligence service</p>
            </>
          )
        },
        {
          title: 'Governance',
          contentDescription: (
            <>
              <p>Propose a governance template</p>
              <p>Implement decentralised governance (multsigs, IBC-imported tokens)</p>
              <p>Tests some rules in Prolog about access rights and business models</p>
            </>
          )
        },
        {
          title: 'Tools',
          contentDescription: <p>OKP4 protocol explorer (e.g object storage tool)</p>
        },
        {
          title: 'Security & Privacy',
          contentDescription: (
            <>
              <p>Connect a privacy preserving service</p>
              <p>ZKP service execution</p>
              <p>Homomorphic data processing</p>
            </>
          )
        },
        {
          title: 'Identity',
          contentDescription: <p>Connect an identity provider like Keycloack</p>
        }
      ]
    }
  ]
})
