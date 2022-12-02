import type { GetServerSideProps, NextPage } from 'next'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import { config } from '../lib/config'
import type { Config } from '../types/config.type'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ArticleIcon from '@mui/icons-material/Article'
import GavelIcon from '@mui/icons-material/Gavel'
import HelpIcon from '@mui/icons-material/Help'
import MoneyIcon from '@mui/icons-material/Money'
import React from 'react'

export type TasksProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

type ContentBlockProps = Readonly<{
  title: string
  description: JSX.Element
  icon?: JSX.Element
}>

type SidhTaskContent = ContentBlockProps

type SidhTask = {
  name: string
  content: SidhTaskContent[]
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description, icon }): JSX.Element => (
  <div className="content-block-main">
    <div className="content-block-title-container">
      {icon}
      <h3>{title}</h3>
    </div>
    {description}
  </div>
)

const sidhTasks: SidhTask[] = [
  {
    name: 'Submit your gentx',
    content: [
      {
        title: 'When',
        description: <p>From Dec 1st to Dec 12th.</p>,
        icon: <AccessTimeIcon />
      },
      {
        title: 'Description',
        description: (
          <p>
            Before starting the network we need to register your validator in the genesis.json.{' '}
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
            github repository. <br />
            This task is required to make you visible on the Leaderboard.
          </p>
        ),
        icon: <ArticleIcon />
      },
      {
        title: 'Rewards',
        description: <p style={{ fontFamily: 'Gotham bold, sans-serif' }}>1000 points.</p>,
        icon: <MoneyIcon />
      },
      {
        title: 'Judging Criteria',
        description: (
          <p>
            You will receive the points once the OKP4 team has integrated your gentx in the genesis.
          </p>
        ),
        icon: <GavelIcon />
      },

      {
        title: 'How to submit',
        description: <p>Send the issue number in a private message to Anik#9282 on Discord.</p>,
        icon: <HelpIcon />
      }
    ]
  },
  {
    name: 'Setup your node',
    content: [
      {
        title: 'When',
        description: <p>From Dec 14th at 15pm UTC to Jan 1st.</p>,
        icon: <AccessTimeIcon />
      },
      {
        title: 'Description',
        description: (
          <p>
            It is time to make the okp4-nemeton-1 network alive, you have to setup your node and
            join the network. The technical documentation regarding node setup and network join
            information is here:{' '}
            <a
              href=" https://docs.okp4.network/nodes/introduction"
              rel="noreferrer"
              target="_blank"
            >
              https://docs.okp4.network/nodes/introduction.
            </a>
          </p>
        ),
        icon: <ArticleIcon />
      },
      {
        title: 'Rewards',
        description: <p style={{ fontFamily: 'Gotham bold, sans-serif' }}>2000 points.</p>,
        icon: <MoneyIcon />
      },
      {
        title: 'Judging Criteria',
        description: <p>Your validator is up and running.</p>,
        icon: <GavelIcon />
      },

      {
        title: 'How to submit',
        description: <p>The validator presence in the consensus will be automatically checked.</p>,
        icon: <HelpIcon />
      }
    ]
  },
  {
    name: 'Uptime challenge',
    content: [
      {
        title: 'When',
        description: <p>From Dec 14th at 15pm UTC to Jan 1st.</p>,
        icon: <AccessTimeIcon />
      },
      {
        title: 'Description',
        description: <p>Maintain the best uptime with your validator.</p>,
        icon: <ArticleIcon />
      },
      {
        title: 'Rewards',
        description: (
          <p style={{ fontFamily: 'Gotham bold, sans-serif' }}>
            Up to 2500 points with the following formula: 2501^0,01x - 1 with x = %uptime.
          </p>
        ),
        icon: <MoneyIcon />
      },
      {
        title: 'Judging Criteria',
        description: <p>The less blocks your validator miss, the more points you get.</p>,
        icon: <GavelIcon />
      },

      {
        title: 'How to submit',
        description: <p>Missed blocks are automatically tracked.</p>,
        icon: <HelpIcon />
      }
    ]
  },
  {
    name: 'Tweet about the OKP4 testnet',
    content: [
      {
        title: 'When',
        description: (
          <p>
            From Dec 12th to Jan 1st. <br />
            No rush to tweet about it when the task opens – it is better to spread them across that
            period..
          </p>
        ),
        icon: <AccessTimeIcon />
      },
      {
        title: 'Description',
        description: (
          <p>
            Publish a tweet about the Nemeton testnet while including the @okp4_protocol tag using
            your validator twitter account. Feel free to share your excitement!
          </p>
        ),
        icon: <ArticleIcon />
      },
      {
        title: 'Rewards',
        description: <p style={{ fontFamily: 'Gotham bold, sans-serif' }}>500 points.</p>,
        icon: <MoneyIcon />
      },
      {
        title: 'Judging Criteria',
        description: <p>You will receive the points once the OKP4 team has reviewed your tweet.</p>,
        icon: <GavelIcon />
      },

      {
        title: 'How to submit',
        description: <p>Tweets are automatically tracked.</p>,
        icon: <HelpIcon />
      }
    ]
  },
  {
    name: 'Submit an original content related to validation',
    content: [
      {
        title: 'When',
        description: <p>From Dec 12th to Jan 1st</p>,
        icon: <AccessTimeIcon />
      },
      {
        title: 'Description',
        description: (
          <p>
            Based on your experience as a validator, write an original article, twitter thread or
            video content providing value to other validators and the community in general. Content
            must be in English. <br />
            The content may be used later to bring improvements on the node operator’s docs (
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
            If you’ve seen great documentation, articles or content ideas elsewhere, help us bring
            something similar to OKP4. Feel free to be creative if you’re in the right mood!
          </p>
        ),
        icon: <ArticleIcon />
      },
      {
        title: 'Rewards',
        description: (
          <p style={{ fontFamily: 'Gotham bold, sans-serif' }}>
            Up to 10 000 points per druid will be attributed, capped at 150 000 points in total.
          </p>
        ),
        icon: <MoneyIcon />
      },
      {
        title: 'Judging Criteria',
        description: (
          <>
            <p>OKP4 team will judge if any submission deserves points or not, based on:</p>
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
        icon: <GavelIcon />
      },

      {
        title: 'How to submit',
        description: (
          <p>
            Share the content links to Anik#9282 on Discord. Only one submission per druid will be
            studied.
          </p>
        ),
        icon: <HelpIcon />
      }
    ]
  }
]

const Tasks: NextPage<TasksProps> = props => {
  const { urls } = props
  const { typeformUrl } = urls

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header typeformUrl={typeformUrl} />
        <div className="okp4-nemeton-web-page-content-container" id="tasks">
          <h1>Sidh - Tasks</h1>
          <ol style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {sidhTasks.map((sidhTask: SidhTask, index: number) => (
              <div className="okp4-nemeton-web-page-content-card-container" key={index}>
                <li>
                  <h2>{sidhTask.name}</h2>
                </li>
                {sidhTask.content.map(
                  ({ title, description, icon }: SidhTaskContent, index: number) => (
                    <ContentBlock description={description} icon={icon} key={index} title={title} />
                  )
                )}
              </div>
            ))}
          </ol>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<TasksProps> = async () => ({
  props: {
    ...config
  }
})

export default Tasks
