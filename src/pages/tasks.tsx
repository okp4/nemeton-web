import type { GetServerSideProps, NextPage } from 'next'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import { config } from '../lib/config'
import type { Config } from '../types/config.type'
import ArticleIcon from '@mui/icons-material/Article'
import GavelIcon from '@mui/icons-material/Gavel'
import HelpIcon from '@mui/icons-material/Help'
import MoneyIcon from '@mui/icons-material/Money'
import React from 'react'
import { useAccordion } from '../hook/useAccordion'
import { Accordion } from '../components/accordion/Accordion'

export type TasksProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

type ContentBlockProps = Readonly<{
  title: string
  description: JSX.Element
  icon?: JSX.Element
}>

type PhaseTask = {
  phase: string
  title: JSX.Element
  content: ContentBlockProps[]
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

const phaseTasks: PhaseTask[] = [
  {
    phase: 'Sidh',
    title: (
      <div className="okp4-nemeton-web-tasks-accordion-title">
        <h3>Submit your gentx</h3>
        <p>1/12 - 12/12</p>
      </div>
    ),
    content: [
      {
        title: 'Description',
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
        icon: <ArticleIcon />
      },
      {
        title: 'Rewards',
        description: <p>1000 points.</p>,
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
    phase: 'Sidh',
    title: (
      <div className="okp4-nemeton-web-tasks-accordion-title">
        <h3>Setup your node</h3>
        <p>14/12 - 1/01, 3pm UTC</p>
      </div>
    ),
    content: [
      {
        title: 'Description',
        description: (
          <p>
            It is time to make the okp4-nemeton-1 network alive; you have to set up your node and
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
        description: <p>2000 points.</p>,
        icon: <MoneyIcon />
      },
      {
        title: 'Judging Criteria',
        description: <p>Your validator is up and running.</p>,
        icon: <GavelIcon />
      },

      {
        title: 'How to submit',
        description: (
          <p>The validator&apos;s presence in the consensus will be automatically checked.</p>
        ),
        icon: <HelpIcon />
      }
    ]
  },
  {
    phase: 'Sidh',
    title: (
      <div className="okp4-nemeton-web-tasks-accordion-title">
        <h3>Uptime challenge</h3>
        <p>14/12 - 1/01, 3pm UTC</p>
      </div>
    ),
    content: [
      {
        title: 'Description',
        description: <p>Maintain the best uptime with your validator.</p>,
        icon: <ArticleIcon />
      },
      {
        title: 'Rewards',
        description: (
          <p>Up to 2500 points with the following formula: 2501^0,01x - 1 with x = %uptime.</p>
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
    phase: 'Sidh',
    title: (
      <div className="okp4-nemeton-web-tasks-accordion-title">
        <h3>Tweet about the OKP4 testnet</h3>
        <p>12/12 - 1/01</p>
      </div>
    ),
    content: [
      {
        title: 'Description',
        description: (
          <p>
            Publish a tweet about the Nemeton testnet while including the @okp4_protocol tag using
            your validator Twitter account. Feel free to share your excitement!
          </p>
        ),
        icon: <ArticleIcon />
      },
      {
        title: 'Rewards',
        description: <p>500 points.</p>,
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
    phase: 'Sidh',
    title: (
      <div className="okp4-nemeton-web-tasks-accordion-title">
        <h3>Submit original content related to validation</h3>
        <p>12/12 - 1/01</p>
      </div>
    ),
    content: [
      {
        title: 'Description',
        description: (
          <p>
            Based on your experience as a validator, write an original article, twitter thread or
            video content providing value to other validators and the community in general. Content
            must be in English. <br />
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
            If you’ve seen great documentation, articles or content ideas elsewhere, help us bring
            something similar to OKP4. Feel free to be creative if you’re in the right mood!
          </p>
        ),
        icon: <ArticleIcon />
      },
      {
        title: 'Rewards',
        description: (
          <p>
            Up to 10 000 points per druid will be attributed, capped at 150 000 points in total.
          </p>
        ),
        icon: <MoneyIcon />
      },
      {
        title: 'Judging Criteria',
        description: (
          <>
            <p>
              OKP4 team will judge if any submission deserves points or not based on the following:
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
  const [activeIndex, setActiveIndex] = useAccordion()

  const handleClick = (index: number) => () => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)
  }

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header typeformUrl={typeformUrl} />
        <div className="okp4-nemeton-web-page-content-container" id="tasks">
          <h1>Tasks</h1>
          <div className="okp4-nemeton-web-page-content-wrapper">
            {phaseTasks.map(({ phase, title, content }, index, array) => {
              const previous: PhaseTask | null = index > 0 ? array[index - 1] : null
              const active = activeIndex === index
              const mustDisplayPart = !previous || previous.phase !== phase
              const accordionContent = (
                <>
                  {content.map(({ title, description, icon }, index) => (
                    <ContentBlock description={description} icon={icon} key={index} title={title} />
                  ))}
                </>
              )
              return (
                <div key={index}>
                  {mustDisplayPart && <h2>{phase}</h2>}
                  <Accordion
                    content={accordionContent}
                    isExpanded={active}
                    onToggle={handleClick(index)}
                    title={title}
                  />
                </div>
              )
            })}
          </div>
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
