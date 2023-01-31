import type { PhasesConfig } from '../../types/config.type'
import { getPhaseStatus } from '../../utils'
import type { PhaseDTO } from './dto.type'

export const beltaine = ({ beltaine: { startDate, endDate } }: PhasesConfig): PhaseDTO => ({
  number: 3,
  phaseName: 'beltaine',
  phaseDescription:
    'The third phase is all about token dynamics! Druids will engage in various node and community tasks with their precious tokens. Challenges will include some IBC-related tasks to open Nemeton to the interchain world...ime. Maintenance tasks and upgrades will be performed to test different kinds of state migrations.',
  status: getPhaseStatus(startDate, endDate),
  phaseDuration: {
    from: startDate,
    to: endDate
  },
  tasks: [
    {
      group: 'Nodes',
      taskName:
        'Vote for the governance proposal to whitelist addresses for smart contract deployment',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              We&apos;ll submit a governance proposal concerning the{' '}
              <span className="okp4-nemeton-web-bold-text">wasm</span> module configuration to
              introduce some whitelist adresses allowed to deploy smart contracts. To achieve this
              task you need to submit your vote in this proposal.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>1 500 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              You will receive the points once OKP4 team has checked your governance vote for
              whitelist addresses.
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
        from: '2023-02-01T12:00:00Z',
        to: '2023-02-15T12:00:00Z'
      },
      points: 1500
    },
    {
      group: 'Nodes',
      taskName:
        'Vote for the governance proposal to implement the logic module to the Nemeton testnet',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              We&apos;ll submit a governance proposal to upgrade the chain software version which
              will introduce our new <span className="okp4-nemeton-web-bold-text">logic</span>{' '}
              module. The purpose of this module is to interpret the Data Space rules. To achieve
              this task you need to submit your vote in this proposal.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>1 500 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              You will receive the points once OKP4 team has checked your governance vote for
              implementing the logic module.
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
        from: '2023-02-06T12:00:00Z',
        to: '2023-02-20T12:00:00Z'
      },
      points: 1500
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
              Once the <span className="okp4-nemeton-web-bold-text">logic</span> module governance
              proposal is accepted, Druids need to perform the update. To achieve this task you need
              to make sure your node is updated on time and doesn&apos;t miss blocks.
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
              Perform the best uptime within the hour following the targeted upgrade height - you
              don&apos;t need to do anything else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-02-20T12:00:00Z',
        to: '2023-02-28T23:59:00Z'
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
              validator Twitter account. Feel free to share your excitement about the governance
              proposals or the coming upgrade!
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
              Send the tweet with the right tag and account - You don&apos;t need to do anything
              else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-02-01T12:00:00Z',
        to: '2023-02-28T23:59:00Z'
      },
      points: 500
    },
    {
      group: 'Challenges',
      taskName: 'Uptime',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Maintain the best uptime during the phase. Besides, make sure to update your node!
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
              Points are attributed according to the following formula: 2501^0,01x - 1 with x =
              %uptime.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>Perform the best uptime - you don&apos;t need to do anything else.</p>
          )
        }
      ],
      taskDuration: {
        from: '2023-02-01T12:00:00Z',
        to: '2023-02-28T23:59:00Z'
      },
      points: 2500
    }
  ]
})
