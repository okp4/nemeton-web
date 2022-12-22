import type { GetServerSideProps, NextPage } from 'next'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import { config } from '../lib/config'
import type { Config, TasksUrls } from '../types/config.type'
import ArticleIcon from '@mui/icons-material/Article'
import GavelIcon from '@mui/icons-material/Gavel'
import HelpIcon from '@mui/icons-material/Help'
import MoneyIcon from '@mui/icons-material/Money'
import React, { useCallback, useEffect } from 'react'
import { useAccordion } from '../hook/useAccordion'
import type { AccordionState } from '../hook/useAccordion'
import { Accordion } from '../components/accordion/Accordion'
import Phases from '../entity/phases/index'
import type { Phase, TaskCategory } from '../entity/phases/types'
import { useRouter } from 'next/router'
import moment from 'moment'

export type TasksProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

type ContentBlockProps = Readonly<{
  title: string
  description: JSX.Element
  icon?: JSX.Element
}>

type PhaseAccordionProps = Readonly<{
  activeAccordion: AccordionState
  name: string
  onClick: (challenge: string) => () => void
  status: 'coming' | 'active' | 'closed'
  taskCategories: TaskCategory[]
  urls: TasksUrls
}>

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description, icon }): JSX.Element => (
  <div className="content-block-main">
    <div className="content-block-title-container">
      {icon}
      <h3>{title}</h3>
    </div>
    {description}
  </div>
)

const PhaseAccordions: React.FC<PhaseAccordionProps> = ({
  activeAccordion,
  name,
  status,
  taskCategories,
  urls,
  onClick
}): JSX.Element => {
  const tasks = taskCategories.map(({ tasks }) => tasks).flat()
  return (
    <div className="okp4-nemeton-web-page-content-wrapper">
      <h2 id={name.toLowerCase()}>
        {name}
        {status === 'closed' && <span> (closed)</span>}
      </h2>
      {tasks.map(
        ({ summary, description, rewards, judgingCriteria, submit, duration, points }, index) => {
          if (duration && description && judgingCriteria && rewards && submit) {
            const { from, to } = duration
            const title = (
              <div className="okp4-nemeton-web-tasks-accordion-title">
                <h3>{summary}</h3>
                <p>{`${moment(from).utc().format('MMM. Do, H:mm ')} UTC - ${moment(to)
                  .utc()
                  .format('MMM. Do, H:mm ')} UTC`}</p>
              </div>
            )
            const active = activeAccordion === summary

            return (
              <div id={`${name}-${index + 1}`} key={index}>
                <Accordion
                  content={
                    <>
                      <ContentBlock
                        description={description}
                        icon={<ArticleIcon />}
                        title={'Description'}
                      />
                      <ContentBlock
                        description={rewards(points)}
                        icon={<MoneyIcon />}
                        title={'Rewards'}
                      />
                      <ContentBlock
                        description={judgingCriteria}
                        icon={<GavelIcon />}
                        title={'Judging Criteria'}
                      />
                      <ContentBlock
                        description={submit(urls)}
                        icon={<HelpIcon />}
                        title={'How to submit'}
                      />
                    </>
                  }
                  isExpanded={active}
                  onToggle={onClick(summary)}
                  title={title}
                />
              </div>
            )
          }
        }
      )}
    </div>
  )
}

const Tasks: NextPage<TasksProps> = props => {
  const {
    urls,
    urls: { tasksUrls }
  } = props
  const { query } = useRouter()
  const [activeChallenge, setActiveChallenge] = useAccordion()

  const handleClick = useCallback(
    (challenge: string) => () => {
      activeChallenge === challenge ? setActiveChallenge(null) : setActiveChallenge(challenge)
    },
    [activeChallenge, setActiveChallenge]
  )

  useEffect(() => {
    const { task } = query
    if (typeof task === 'string') {
      setActiveChallenge(task)
    }
  }, [query, setActiveChallenge])

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-page-content-container" id="tasks">
          <h1>Tasks</h1>
          {Object.values(Phases).map(
            ({ name, challenges, status }: Phase, index) =>
              status !== 'coming' &&
              challenges &&
              name &&
              status && (
                <div key={index}>
                  <PhaseAccordions
                    activeAccordion={activeChallenge}
                    name={name}
                    onClick={handleClick}
                    status={status}
                    taskCategories={challenges.taskCategories}
                    urls={tasksUrls}
                  />
                </div>
              )
          )}
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
