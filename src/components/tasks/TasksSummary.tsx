import classNames from 'classnames'
import React, { useCallback } from 'react'
import type { TasksPerPhase } from '../../entity/phase'
import { useAccordion } from '../../hook/useAccordion'
import { Accordion } from '../accordion/Accordion'
import { TasksTable } from '../table/TasksTable'

type TasksSummaryProps = Readonly<{
  tasksPerPhase: TasksPerPhase[]
  points: number
}>

export const TasksSummary: React.FC<TasksSummaryProps> = ({ tasksPerPhase, points }) => {
  const [activeIndex, setActiveIndex] = useAccordion()

  const handleClick = useCallback(
    (index: number) => () => {
      activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)
    },
    [activeIndex, setActiveIndex]
  )

  return (
    <div className="okp4-nemeton-web-tasks-summary-main">
      <div className="okp4-nemeton-web-tasks-summary-header-container">
        <h2>tasks and challenges</h2>
        <div className="okp4-nemeton-web-tasks-summary-header-points-wrapper">
          <p>{points > 0 ? points.toLocaleString() : 0}</p>
          <p>points earned</p>
        </div>
      </div>
      <div className="okp4-nemeton-web-tasks-summary-content-container">
        {tasksPerPhase.map(({ phase }, index) => (
          <Accordion
            content={<TasksTable data={phase.tasks} phaseName={phase.name} />}
            disabled={!phase.started}
            iconProps={{ width: 30, height: 30 }}
            isExpanded={activeIndex === index}
            key={index}
            onToggle={handleClick(index)}
            title={
              <div
                className={classNames('okp4-nemeton-web-tasks-summary-accordion-title-wrapper', {
                  disabled: !phase.started
                })}
              >
                <h2>{`phase ${phase.number}`}</h2>
                {phase.started && (
                  <p style={{ opacity: !phase.points ? 0.2 : 1 }}>
                    {phase.points > 0 ? phase.points.toLocaleString() : '0'}
                  </p>
                )}
              </div>
            }
            variant="secondary"
          />
        ))}
      </div>
    </div>
  )
}
