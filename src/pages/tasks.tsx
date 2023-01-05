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
import React, { useCallback, useEffect } from 'react'
import { useAccordion } from '../hook/useAccordion'
import type { AccordionState } from '../hook/useAccordion'
import { Accordion } from '../components/accordion/Accordion'
import Phases from '../data/phase/index'
import type { PhaseDTO, Task, TaskContent, TaskContentId } from '../data/phase/dto.type'
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
  tasks: Task[]
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

const taskContentIcon = (id: TaskContentId): JSX.Element => {
  switch (id) {
    case 'description':
      return <ArticleIcon />
    case 'rewards':
      return <MoneyIcon />
    case 'criteria':
      return <GavelIcon />
    case 'submit':
      return <HelpIcon />
  }
}

const formatString = (text: string): string => text.trim().toLowerCase()

const PhaseAccordions: React.FC<PhaseAccordionProps> = ({
  activeAccordion,
  name,
  status,
  tasks,
  onClick
}): JSX.Element => {
  return (
    <div className="okp4-nemeton-web-page-content-wrapper">
      <h2 id={name.toLowerCase()}>
        {name}
        {status === 'closed' && <span> (closed)</span>}
      </h2>
      {tasks.map(({ taskName, taskContent, taskDuration }, index) => {
        const { from, to } = taskDuration
        const title = (
          <div className="okp4-nemeton-web-tasks-accordion-title">
            <h3>{taskName}</h3>
            <p>{`${moment(from).utc().format('MMM. Do, H:mm ')} UTC - ${moment(to)
              .utc()
              .format('MMM. Do, H:mm ')} UTC`}</p>
          </div>
        )
        const accordionId = formatString(`${name}-${taskName}`)
        const active = activeAccordion === accordionId
        return (
          <div key={index}>
            <Accordion
              content={
                <>
                  {taskContent.map(
                    ({ id, name, content }: TaskContent): JSX.Element => (
                      <div key={id}>
                        <ContentBlock
                          description={content}
                          icon={taskContentIcon(id)}
                          title={name}
                        />
                      </div>
                    )
                  )}
                </>
              }
              isExpanded={active}
              onToggle={onClick(accordionId)}
              title={title}
            />
          </div>
        )
      })}
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
    const { phase, task } = query
    if (typeof task === 'string' && typeof phase === 'string') {
      setActiveChallenge(formatString(decodeURI(`${phase}-${task}`)))
    }
  }, [query, setActiveChallenge])

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-page-content-container" id="tasks">
          <h1>Tasks</h1>
          {Object.values(Phases(tasksUrls)).map(
            ({ phaseName, tasks, status }: PhaseDTO, index) =>
              status !== 'coming' && (
                <div key={index}>
                  <PhaseAccordions
                    activeAccordion={activeChallenge}
                    name={phaseName}
                    onClick={handleClick}
                    status={status}
                    tasks={tasks}
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
