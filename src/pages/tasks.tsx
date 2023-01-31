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
import type {
  PhaseDTO,
  PhaseStatus,
  TaskDTO,
  TaskContent,
  TaskContentId
} from '../data/phase/dto.type'
import { useRouter } from 'next/router'
import moment from 'moment'

export type TasksProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls' | 'phases'>

type ContentBlockProps = Readonly<{
  title: string
  description: JSX.Element
  icon: JSX.Element
}>

type PhaseAccordionProps = Readonly<{
  activeAccordion: AccordionState
  onClick: (taskName: string) => () => void
  number: number
  phaseName: string
  status: PhaseStatus
  tasks: TaskDTO[]
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
  phaseName,
  status,
  tasks,
  onClick,
  number
}): JSX.Element => (
  <div className="okp4-nemeton-web-page-accordions-wrapper">
    <div className="okp4-nemeton-web-page-accordions-title-container">
      <h3>Phase {number}</h3>
      <h2 id={phaseName.toLowerCase()}>
        {phaseName}
        {status === 'closed' && <span> (closed)</span>}
      </h2>
    </div>
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
      const accordionId = formatString(`${phaseName}-${taskName}`)
      const active = activeAccordion === accordionId

      return (
        <div key={index}>
          <Accordion
            content={
              <>
                {taskContent.map(
                  ({ id, title, contentDescription }: TaskContent): JSX.Element => (
                    <div key={id}>
                      <ContentBlock
                        description={contentDescription}
                        icon={taskContentIcon(id)}
                        title={title}
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

const Tasks: NextPage<TasksProps> = props => {
  const { urls, phases } = props
  const { query } = useRouter()
  const [activeTask, setActiveTask] = useAccordion()

  const handleClick = useCallback(
    (taskName: string) => () => {
      activeTask === taskName ? setActiveTask(null) : setActiveTask(taskName)
    },
    [activeTask, setActiveTask]
  )

  useEffect(() => {
    const { phase, task } = query
    if (typeof task === 'string' && typeof phase === 'string') {
      setActiveTask(formatString(decodeURI(`${phase}-${task}`)))
    }
  }, [query, setActiveTask])

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-page-content-container" id="tasks">
          <h1>Tasks</h1>
          {[...Phases(phases)].reverse().map(
            ({ number, phaseName, tasks, status }: PhaseDTO, index) =>
              status !== 'coming' && (
                <div key={index}>
                  <PhaseAccordions
                    activeAccordion={activeTask}
                    number={number}
                    onClick={handleClick}
                    phaseName={phaseName}
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
