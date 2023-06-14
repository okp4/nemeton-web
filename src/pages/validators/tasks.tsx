import { useRouter } from 'next/router'
import moment from 'moment'
import type { GetServerSideProps, NextPage } from 'next'
import { config } from '@/lib/config'
import type { Config } from '@/types/config.type'
import React, { useCallback, useEffect } from 'react'
import { useAccordion } from '@/hook/useAccordion'
import type { AccordionState } from '@/hook/useAccordion'
import { Accordion, ContentBlock, TaskContentIcon } from '@/components/index'
import Phases from '@/data/phase/index'
import type { PhaseDTO, Status, TaskDTO, TaskContent } from '@/data/phase/dto.type'

export type TasksProps = Pick<Config, 'phases'>

type PhaseAccordionProps = Readonly<{
  activeAccordion: AccordionState
  onClick: (taskName: string) => () => void
  number: number
  phaseName: string
  status: Status
  tasks: TaskDTO[]
}>

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
                        icon={<TaskContentIcon id={id} />}
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
  const { phases } = props
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
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<TasksProps> = async () => ({
  props: {
    ...config
  }
})

export default Tasks
