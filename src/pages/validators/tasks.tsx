import { useRouter } from 'next/router'
import type { GetServerSideProps, NextPage } from 'next'
import { config } from '@/lib/config'
import type { Config } from '@/types/config.type'
import React, { useCallback, useEffect } from 'react'
import { useAccordion } from '@/hook/useAccordion'
import Phases from '@/data/phase/index'
import type { PhaseDTO } from '@/data/phase/dto.type'
import { PhaseAccordions } from '@/components/index'
import { normalizeString } from '@/utils'

export type TasksProps = Pick<Config, 'phases'>

const Tasks: NextPage<TasksProps> = props => {
  const { phases } = props
  const { query } = useRouter()
  const [activeTask, setActiveTask] = useAccordion()

  const handleClick = useCallback(
    (accordionId: string) => () => setActiveTask(activeTask === accordionId ? null : accordionId),
    [activeTask, setActiveTask]
  )

  useEffect(() => {
    const { phase, task } = query
    if (typeof task === 'string' && typeof phase === 'string')
      setActiveTask(normalizeString(decodeURI(`${phase}-${task}`)))
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
