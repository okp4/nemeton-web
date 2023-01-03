import ClearIcon from '@mui/icons-material/Clear'
import LoupeIcon from '@mui/icons-material/Loupe'
import moment from 'moment'
import Link from 'next/link'
import type { Duration, TaskDTO } from '../../../data/phase/dto.type'

type DropDownProps = Readonly<{
  refObj: React.RefObject<HTMLDivElement> | null
  onClose: () => void
  phaseDuration: Duration
  phaseName: string
  tasks: TaskDTO[]
}>

export const PhaseDropDown: React.FC<DropDownProps> = ({
  tasks,
  phaseName,
  onClose,
  refObj,
  phaseDuration
}): JSX.Element => {
  const from = moment(phaseDuration.from).utc().format('MMM. Do')
  const to = moment(phaseDuration.to).utc().format('MMM. Do')

  return (
    <div className="okp4-nemeton-web-phase-dropdown-main" ref={refObj}>
      <div className="okp4-nemeton-web-phase-dropdown-container">
        <ClearIcon className="okp4-nemeton-web-phase-dropdown-clear-icon" onClick={onClose} />
        <div className="okp4-nemeton-web-phase-dropdown-duration">
          <p>
            Duration: {moment(phaseDuration.to).diff(moment(phaseDuration.from), 'weeks')} weeks
          </p>
          <p>{`From ${from} to ${to}`}</p>
        </div>

        <div className="okp4-nemeton-web-phase-dropdown-tasks">
          {tasks.map(({ group, taskName, points }, index: number, array) => {
            const previous: TaskDTO | null = index > 0 ? array[index - 1] : null
            const mustDisplayGroup = !previous || previous.group !== group
            return (
              <div className="okp4-nemeton-web-phase-dropdown-task" key={index}>
                {mustDisplayGroup && <h3>{group}</h3>}
                <div className="okp4-nemeton-web-phase-dropdown-reward">
                  <p>{taskName}</p>
                  <p>{points.toLocaleString()} Pts</p>
                </div>
              </div>
            )
          })}
          <div className="okp4-nemeton-web-phase-dropdown-details-container">
            <LoupeIcon />
            <Link href={`/tasks#${phaseName}`}>See detailled tasks</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
