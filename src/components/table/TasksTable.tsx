import React, { useCallback, useMemo } from 'react'
import type { Task } from '../../entity/phase'
import { Tag } from '../tag/Tag'
import type { Column } from './table.type'

export type TasksTableProps = Readonly<{
  data: Task[]
}>

type TagElementProps = Readonly<{
  task: Task
}>

const TagElement: React.FC<TagElementProps> = ({ task }) => {
  const props = useCallback((): {
    status: 'done' | 'idle' | 'progress' | 'error'
    content: string
  } => {
    if (task.completed) return { status: 'done', content: 'Done' }
    if (!task.started) return { status: 'idle', content: 'Not started' }
    if (task.finished) return { status: 'error', content: 'Not completed' }
    return { status: 'progress', content: 'In progress' }
  }, [task.completed, task.finished, task.started])

  return <Tag {...props()} />
}

export const TasksTable: React.FC<TasksTableProps> = ({ data }) => {
  const columns: Column<Task>[] = useMemo(
    () => [
      {
        label: 'Name',
        renderCell: (task: Task) => <span>{task.name}</span>
      },
      {
        label: 'Status',
        renderCell: (task: Task) => <TagElement task={task} />
      },
      {
        label: 'Points',
        renderCell: (task: Task) => (
          <span style={{ opacity: !task.points ? 0.2 : 1 }}>{task.points.toLocaleString()}</span>
        )
      }
    ],
    []
  )

  return (
    <div className="okp4-nemeton-web-tasks-table-main">
      <table>
        <thead>
          <tr>
            {columns.map(({ label, width }, index) => (
              <th key={index} {...(width && { style: { width } })}>
                <span>{label}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 && (
            <React.Fragment>
              {data.map((row, index) => (
                <tr key={index}>
                  {columns.map((column, index) => {
                    const { renderCell } = column
                    return <td key={index}>{renderCell(row)}</td>
                  })}
                </tr>
              ))}
            </React.Fragment>
          )}
        </tbody>
      </table>
    </div>
  )
}
