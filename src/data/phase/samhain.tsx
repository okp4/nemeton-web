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
      challengePart: 'part 1: Invoke the power of Dagda - From May, 24th',
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
          challengeId: 0,
          challengeCategory: 'Connectors',
          challenges: [
            {
              description: <p>Connect a storage service like S3</p>
            },
            {
              description: <p>Connect an IDSA Connector</p>
            },
            {
              description: <p>Connect an infrastructure service</p>
            },
            {
              description: <p>Connect a business intelligence service</p>
            }
          ]
        },
        {
          challengeId: 1,
          challengeCategory: 'Governance',
          challenges: [
            {
              description: <p>Propose a governance template</p>
            },
            {
              description: <p>Implement decentralised governance (multsigs, IBC-imported tokens)</p>
            },
            {
              description: <p>Tests some rules in Prolog about access rights and business models</p>
            }
          ]
        },
        {
          challengeId: 2,
          challengeCategory: 'Tools',
          challenges: [
            {
              description: <p>OKP4 protocol explorer (e.g object storage tool</p>
            }
          ]
        },
        {
          challengeId: 3,
          challengeCategory: 'Security & Privacy',
          challenges: [
            {
              description: <p>Connect a privacy preserving service</p>
            },
            {
              description: <p>ZKP service execution</p>
            },
            {
              description: <p>Homomorphic data processing</p>
            }
          ]
        },
        {
          challengeId: 4,
          challengeCategory: 'Identity',
          challenges: [
            {
              description: <p>Connect an identity provider like Keycloack</p>
            }
          ]
        }
      ]
    }
  ]
})
