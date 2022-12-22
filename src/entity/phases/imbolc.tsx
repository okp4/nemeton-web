import type { Phase } from './types'

export const imbolc: Phase = {
  number: 2,
  name: 'imbolc',
  description:
    "The second phase is focused on testing Druids' performance and uptime. Maintenance tasks and upgrades will be performed to test different kinds of state migrations.",
  challenges: {
    duration: {
      from: '2023-01-02T00:00:00Z',
      to: '2023-01-31T23:59:59Z'
    },
    taskCategories: [
      {
        subject: 'Nodes',
        tasks: [
          {
            summary: 'Expose RPC node',
            description: <p>Provide a public RPC endpoint.</p>,
            rewards: points => <p>{points.toLocaleString()} points.</p>,
            judgingCriteria: (
              <p>
                You will receive the points once the OKP4 team has checked your RPC endpoint
                availability.
              </p>
            ),
            submit: ({ imbolc: { exposeRPCUrl } }) => (
              <p>
                Share the RPC endpoint on{' '}
                <a href={exposeRPCUrl} rel="noreferrer" target="_blank">
                  this form
                </a>
                . Only one submission per druid will be studied.
              </p>
            ),
            duration: {
              from: '2023-01-02T00:00:00Z',
              to: '2023-01-31T23:59:59Z'
            },
            points: 1500
          },
          {
            summary: 'Provide snapshots',
            description: <p>Provide network snapshots.</p>,
            rewards: points => <p>{points.toLocaleString()} points.</p>,
            judgingCriteria: (
              <p>
                You will receive the points once the OKP4 team has checked your snapshots
                availability.
              </p>
            ),
            submit: ({ imbolc: { provideSnapshotUrl } }) => (
              <p>
                Share the link to your snapshots on{' '}
                <a href={provideSnapshotUrl} rel="noreferrer" target="_blank">
                  this form
                </a>
                . Only one submission per druid will be studied.
              </p>
            ),
            duration: {
              from: '2023-01-02T00:00:00Z',
              to: '2023-01-31T23:59:59Z'
            },
            points: 2000
          },
          {
            summary: 'Provide dashboard for the OKP4 network',
            description: (
              <p>
                Observability is a key element for monitoring network behavior and usage and detect
                possible anomalies, and as a validator you have access to a lot of information and
                metrics. Create and expose a Dashboards with useful KPI and metrics about the
                Network.
              </p>
            ),
            rewards: points => <p>Up to {points.toLocaleString()} points.</p>,
            judgingCriteria: (
              <>
                <p>
                  OKP4 team will judge if any submission deserves points or not based on the
                  following:{' '}
                </p>
                <ul>
                  <li>Overall relevance</li>
                  <li>Readability</li>
                  <li>Usefulness</li>
                </ul>
                <p>Non-relevant submissions or low-value ones will earn 0 points.</p>
              </>
            ),
            submit: ({ imbolc: { provideDashboardUrl } }) => (
              <p>
                Share the link to your dashboard on{' '}
                <a href={provideDashboardUrl} rel="noreferrer" target="_blank">
                  this form
                </a>
                . Only one submission per druid will be studied.
              </p>
            ),
            duration: {
              from: '2023-01-02T00:00:00Z',
              to: '2023-01-31T23:59:59Z'
            },
            points: 2000
          }
        ]
      },
      {
        subject: 'Community',
        tasks: [
          {
            summary: 'Tweet about the uptime war',
            description: (
              <p>
                Publish a tweet about the Uptime challenge while including the @OKP4_PROTOCOL tag
                using your validator Twitter account. Feel free to share your excitement!
              </p>
            ),
            rewards: points => <p>{points.toLocaleString()} points.</p>,
            judgingCriteria: (
              <p>You will receive the points once the OKP4 team has reviewed your tweet.</p>
            ),
            submit: () => <p>Tweets are automatically tracked.</p>,
            duration: {
              from: '2023-01-02T00:00:00Z',
              to: '2023-01-31T23:59:59Z'
            },
            points: 500
          }
        ]
      },
      {
        subject: 'Challenge',
        tasks: [
          {
            summary: 'Uptime war: prevent getting jailed!',
            description: (
              <>
                <p>
                  Maintain the best uptime with your validator. This is war, we may intentionally
                  produce some attacks so be ready!
                </p>
                <p>May the consensus be with you!</p>
              </>
            ),
            rewards: points => (
              <>
                <p>
                  Up to {points.toLocaleString()} points with the following formula: {points + 1}
                  ^0,01x - 1 with x = %uptime.
                </p>
                <p>Bonus points for survivors during tx bursts.</p>
              </>
            ),
            judgingCriteria: <p>The less blocks your validator miss, the more points you get.</p>,
            submit: () => <p>Missed blocks are automatically tracked.</p>,
            duration: {
              from: '2023-01-02T00:00:00Z',
              to: '2023-01-31T23:59:59Z'
            },
            points: 15000
          }
        ]
      }
    ]
  },
  status: 'active'
}
