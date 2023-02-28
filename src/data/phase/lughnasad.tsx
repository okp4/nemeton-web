import type { PhasesConfig } from '../../types/config.type'
import { getPhaseStatus } from '../../utils'
import type { PhaseDTO } from './dto.type'

export const lughnasad = ({
  lughnasad: {
    startDate,
    endDate,
    urls: { logicModuleDocsUrl, gasConsumptionTypeformUrl, logicModuleTypeformUrl }
  }
}: PhasesConfig): PhaseDTO => ({
  number: 4,
  phaseName: 'lughnasad',
  phaseDescription:
    'The fourth phase tests modules and smart contract performance. It will enable OKP4 to fine-tune the many custom developments and find inefficiencies and vulnerabilities to improve the code.',
  status: getPhaseStatus(startDate, endDate),
  phaseDuration: {
    from: startDate,
    to: endDate
  },
  tasks: [
    {
      group: 'Nodes',
      taskName: 'Governance vote to reduce governance voting period',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              We&apos;ll submit a governance proposal to introduce a reduction in voting period from
              1209600 s (14 days) to 86400 s (1 day). To achieve this task you need to submit your
              vote on this proposal.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>1 000 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              You will receive the points once OKP4 team has checked your governance proposal vote
              for the voting period.
            </p>
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
        from: '2023-03-01T12:00:00Z',
        to: '2023-03-15T12:00:00Z'
      },
      points: 1000
    },
    {
      group: 'Nodes',
      taskName: 'Governance vote to perform a chain upgrade',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Following the developments during the phase, we&apos;ll submit a governance proposal
              to upgrade the chain with a new version of the logic module. To achieve this task you
              need to submit your vote on this proposal.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>1 000 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              You will receive the points once OKP4 team has checked your governance proposal vote
              for the chain upgrade regarding the logic module upgrade.
            </p>
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
        from: '2023-03-16T12:00:00Z',
        to: '2023-03-17T12:00:00Z'
      },
      points: 1000
    },
    {
      group: 'Nodes',
      taskName: 'Upgrade your node on time',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Once the software upgrade governance proposal is accepted, Druids need to perform the
              update. To achieve this task you need to make sure your node is updated on time and
              doesn&apos;t miss blocks. The upgrade plan will be detailed in the governance
              proposal, the upgrade height will target approximately the Mar. 22th.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>2 500 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              Points will be awarded according to your uptime within the hour following the targeted
              upgrade height.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              You just have to vote on the proposal with your validator address - you don&apos;t
              need to do anything else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-03-20T12:00:00Z',
        to: '2023-04-13T23:59:00Z'
      },
      points: 2500
    },
    {
      group: 'Community',
      taskName: 'Tweet about OKP4',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Publish a tweet including the{' '}
              <span className="okp4-nemeton-web-bold-text">@OKP4_Protocol</span> tag using your
              validator Twitter account. Feel free to share your excitement about the new
              developments!
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>500 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>You will receive the points once OKP4 team has reviewed your tweet.</p>
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
        from: '2023-03-01T00:00:00Z',
        to: '2023-04-13T23:59:00Z'
      },
      points: 500
    },
    {
      group: 'Challenges',
      taskName: 'Give us Feedback on gas consumption',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <>
              <p>
                During this phase we&apos;ll start using the logic module and upload smart contracts
                implementing the protocol, the related transaction messages will have a certain gas
                consumption which may at first be irrelevant in comparison with the actual execution
                cost. Regarding your validation role, you have at your disposal elements allowing
                you to judge this relevance.
              </p>
              <p>
                Send us a study highlighting gas consumption relevancy in relation with elements at
                your disposal (e.g. Memory and CPU usage). Argued with curated data from your
                running Node, provide us feedback and suggestions to help us ensuring a fair cost.
              </p>
              <p>
                We advise you to wait for the second part of the phase before publishing - new smart
                contracts will be tested during this phase, we&apos;ll provide documentation to
                interact with them.
              </p>
            </>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>Up to 10 000 pts</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <>
              <p>
                OKP4 team will judge if any submission deserves points or not based on the
                following:
              </p>
              <ul>
                <li>Relevance</li>
                <li>Arguments backed by data</li>
                <li>Usefulness</li>
              </ul>
              <p>Non-relevant submissions or low-value ones will earn 0 points.</p>
            </>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              Publish a 1 page report / dashboards using{' '}
              <a href={gasConsumptionTypeformUrl} rel="noreferrer" target="_blank">
                this form
              </a>
              .
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-03-01T00:00:00Z',
        to: '2023-04-13T23:59:00Z'
      },
      points: 10000
    },
    {
      group: 'Challenges',
      taskName: 'Identify Failures in the Logic module',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              The newly introduced logic module may bring some possible security vulnerability (e.g.
              determinism issue) and need thus to be well tested. If you find out such failure, send
              us some explanations to reproduce the bug. You&apos;ll find logic module documentation
              here:{' '}
              <a href={logicModuleDocsUrl} rel="noreferrer" target="_blank">
                {logicModuleDocsUrl}
              </a>
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>Up to 10 000 pts</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              Vulnerability that may have the ability to bring some determinism issue or any other
              issue challenging the consensus of the chain.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              Send us the vulnerability explanation with an example to reproduce it using{' '}
              <a href={logicModuleTypeformUrl} rel="noreferrer" target="_blank">
                this form
              </a>
              .
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-03-01T00:00:00Z',
        to: '2023-04-13T23:59:00Z'
      },
      points: 10000
    },
    {
      group: 'Challenges',
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
          contentDescription: <p>3 000 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              Points are attributed according to the following formula: 3001^0,01x - 1 with x =
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
        from: '2023-03-01T00:00:00Z',
        to: '2023-04-13T23:59:00Z'
      },
      points: 3000
    }
  ]
})
