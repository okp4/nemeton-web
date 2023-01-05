import Link from 'next/link'
import React, { useCallback, useMemo } from 'react'
import type { Task } from '../../entity/phase'
import { useMediaType } from '../../hook/useMediaType'
import { Tag } from '../tag/Tag'
import type { Column } from './table.type'

export type TasksTableProps = Readonly<{
  data: Task[]
  phaseName: string
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

export const TasksTable: React.FC<TasksTableProps> = ({ data, phaseName }) => {
  const isMobileScreen = useMediaType('(max-width: 580px)')

  const columns: Column<Task>[] = useMemo(
    () =>
      [
        {
          label: 'Tasks',
          renderCell: (task: Task) => (
            <Link href={`/tasks?phase=${phaseName}&task=${task.name}`}>
              <span>{task.name}</span>
            </Link>
          )
        },
        {
          label: 'Status',
          renderCell: (task: Task) =>
            isMobileScreen && task.points ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <TagElement task={task} />
                <span style={{ opacity: 0.4 }}>{task.points.toLocaleString()} POINTS</span>
              </div>
            ) : (
              <TagElement task={task} />
            )
        },
        {
          label: 'Points',
          renderCell: (task: Task) => (
            <span style={{ opacity: !task.points ? 0.2 : 1 }}>{task.points.toLocaleString()}</span>
          ),
          hidden: isMobileScreen
        }
      ].filter(column => !column.hidden),
    [phaseName, isMobileScreen]
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
