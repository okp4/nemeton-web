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
  tasks: [
    {
      group: 'Nodes',
      taskName: 'Vote for the governance proposals',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              During the Phase 5, we&apos;ll submit governance proposals to make evolve the chain.
              To achieve this task you need to submit your vote on these proposals.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>500 points per vote.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>You will receive the points once OKP4 team has checked your governance votes.</p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              You just have to vote on the proposal with your delegator address - you don&apos;t
              need to do anything else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-05-24T12:00:00Z',
        to: '2023-10-31T23:59:59Z'
      },
      points: 500
    },
    {
      group: 'Nodes',
      taskName: 'Perform upgrades on time',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Once the software upgrade governance proposals are accepted, Druids need to perform
              the update. To achieve this task you need to make sure your node is updated on time
              and doesn&apos;t miss blocks. The upgrade plan will be detailed in the governance
              proposals.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>1 000 per upgrade.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              Points will be awarded according to your uptime within the hour following the targeted
              upgrade heights.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              Perform the best uptime within the hour following the targeted upgrade heights - you
              don&apos;t need to do anything else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-05-24T12:00:00Z',
        to: '2023-10-31T23:59:59Z'
      },
      points: 1000
    },
    {
      group: 'Nodes',
      taskName: 'Make an original/ creative tweet',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Publish a tweet including the{' '}
              <span className="okp4-nemeton-web-bold-text">@OKP4_Protocol</span> tag using your
              validator Twitter account. Feel free to share an original content! Be creative to
              reach out to the OKP4 community.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>3 000 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <>
              <p>Results depend on :</p>
              <ul>
                <li>Creativity</li>
                <li>Relevance</li>
                <li>Editorial Aspect</li>
                <li>Reference & Reflexion</li>
              </ul>
            </>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              Publish a tweet with the right tag and account - You don&apos;t need to do anything
              else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-05-24T12:00:00Z',
        to: '2023-10-31T23:59:59Z'
      },
      points: 3000
    },
    {
      group: 'Nodes',
      taskName: 'Uptime',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: <p>Maintain the best uptime with your validator.</p>
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>8 000 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              Points are attributed according to the following formula: 8 001 ^0,01x - 1 with x =
              %uptime.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: <p>Missed blocks are automatically tracked.</p>
        }
      ],
      taskDuration: {
        from: '2023-05-24T12:00:00Z',
        to: '2023-10-31T23:59:59Z'
      },
      points: 8000
    },
    {
      group: 'Nodes',
      taskName: `You're welcome to the Builders program to earn many more rewards!`,
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Have a look on the{' '}
              <a
                href="https://nemeton.staging.okp4.network/builders/challenges#challenges"
                rel="noreferrer"
                target="_blank"
              >
                Builders Program challenges
              </a>{' '}
              to get a chance to earn more rewards.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-06-14T12:00:00Z',
        to: '2023-10-31T23:59:59Z'
      },
      points: 8000
    }
  ]
})
