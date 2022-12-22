import type { Phase } from './types'

export const sidh: Phase = {
  number: 1,
  name: 'sidh',
  description:
    " This first phase is pretty basic, it is dedicated to setting up Druids' validator environment, participating in the genesis, and getting familiar with the OKP4 testnet.",
  challenges: {
    duration: {
      from: '2022-12-01T00:00:00Z',
      to: '2023-01-01T23:59:00Z'
    },
    taskCategories: [
      {
        subject: 'Nodes',
        tasks: [
          {
            summary: 'Submit your gentx on time',
            description: (
              <p>
                Before starting the network, we must to register your validator in the genesis.json.{' '}
                <br />
                The gentx creation and registration procedure are detailed here:{' '}
                <a
                  href="https://github.com/okp4/networks/tree/main/chains/nemeton-1"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://github.com/okp4/networks/tree/main/chains/nemeton-1.
                </a>{' '}
                <br />
                Your gentx shall be submitted through an issue on the{' '}
                <a href=" https://github.com/okp4/networks/" rel="noreferrer" target="_blank">
                  https://github.com/okp4/networks/
                </a>{' '}
                GitHub repository. <br />
                This task is required to make you visible on the Leaderboard.
              </p>
            ),
            rewards: (points: number) => <p>{points.toLocaleString()} points.</p>,
            judgingCriteria: (
              <p>
                You will receive the points once the OKP4 team has integrated your gentx in the
                genesis.
              </p>
            ),
            submit: () => (
              <p>Send the issue number in a private message to Anik#9282 on Discord.</p>
            ),
            duration: {
              from: '2022-12-01T00:00:00Z',
              to: '2022-12-12T23:59:00Z'
            },
            points: 1000
          },
          {
            summary: 'Setup your node',
            description: (
              <p>
                It is time to make the okp4-nemeton-1 network alive; you have to set up your node
                and join the network. The technical documentation regarding node setup and network
                join information is here:{' '}
                <a
                  href=" https://docs.okp4.network/nodes/introduction"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://docs.okp4.network/nodes/introduction.
                </a>
              </p>
            ),
            rewards: (points: number) => <p>{points.toLocaleString()} points.</p>,
            judgingCriteria: <p>Your validator is up and running.</p>,
            submit: () => (
              <p>The validator&apos;s presence in the consensus will be automatically checked.</p>
            ),
            duration: {
              from: '2022-12-14T00:00:00Z',
              to: '2023-01-01T15:00:00Z'
            },
            points: 2000
          }
        ]
      },
      {
        subject: 'Community',
        tasks: [
          {
            summary: 'Tweet about the OKP4 testnet',
            description: (
              <p>
                Publish a tweet about the Nemeton testnet while including the @okp4_protocol tag
                using your validator Twitter account. Feel free to share your excitement!
              </p>
            ),
            rewards: (points: number) => <p>{points.toLocaleString()} points.</p>,
            judgingCriteria: (
              <p>You will receive the points once the OKP4 team has reviewed your tweet.</p>
            ),
            submit: () => <p>Tweets are automatically tracked.</p>,
            duration: {
              from: '2022-12-12T00:00:00Z',
              to: '2023-01-01T23:59:00Z'
            },
            points: 500
          }
        ]
      },
      {
        subject: 'Challenges',
        tasks: [
          {
            summary: 'Uptime challenge',
            description: <p>Maintain the best uptime with your validator.</p>,
            rewards: (points: number) => (
              <p>
                Up to {points.toLocaleString()} points with the following formula: {points + 1}
                ^0,01x - 1 with x = %uptime.
              </p>
            ),
            judgingCriteria: <p>The less blocks your validator miss, the more points you get.</p>,
            submit: () => <p>Missed blocks are automatically tracked.</p>,
            duration: {
              from: '2022-12-14T00:00:00Z',
              to: '2023-01-01T15:00:00Z'
            },
            points: 2500
          },
          {
            summary: 'Submit an original content related to validation',
            description: (
              <p>
                Based on your experience as a validator, write an original article, twitter thread
                or video content providing value to other validators and the community in general.
                Content must be in English. <br />
                The content may be used later to bring improvements to the node (
                <a
                  href=" https://docs.okp4.network/nodes/introduction"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://docs.okp4.network/nodes/introduction
                </a>
                ), be referenced in OKP4&#39;s Medium ({' '}
                <a href="  https://blog.okp4.network/" rel="noreferrer" target="_blank">
                  https://blog.okp4.network/
                </a>
                ), or shared in social networks. <br />
                If you’ve seen great documentation, articles or content ideas elsewhere, help us
                bring something similar to OKP4. Feel free to be creative if you’re in the right
                mood!
              </p>
            ),
            rewards: (points: number) => (
              <p>
                Up to {points.toLocaleString()} points per druid will be attributed, capped at 150
                000 points in total.
              </p>
            ),
            judgingCriteria: (
              <>
                <p>
                  OKP4 team will judge if any submission deserves points or not based on the
                  following:
                </p>
                <ul>
                  <li>Overall relevance</li>
                  <li>Originality</li>
                  <li>Completeness</li>
                  <li>Readability</li>
                  <li>Useful tips</li>
                  <li>Good surprises…</li>
                </ul>
                <p>Non-relevant submissions or low-value ones will earn 0 points.</p>
              </>
            ),
            submit: ({ sidh: { originalContentUrl } }) => (
              <p>
                Share the content links on{' '}
                <a href={originalContentUrl} rel="noreferrer" target="_blank">
                  this form
                </a>
                . Only one submission per druid will be studied.
              </p>
            ),
            duration: {
              from: '2022-12-12T00:00:00Z',
              to: '2023-01-01T23:59:00Z'
            },
            points: 10000
          }
        ]
      }
    ]
  },
  status: 'closed'
}
