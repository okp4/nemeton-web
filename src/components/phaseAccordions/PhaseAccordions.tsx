import moment from 'moment'
import { Accordion, ContentBlock, TaskContentIcon } from '@/components/index'
import type { AccordionState } from '@/hook/useAccordion'
import type { Status, TaskDTO, TaskContent } from '@/data/phase/dto.type'
import { normalizeString } from '@/utils'

type PhaseAccordionProps = Readonly<{
  activeAccordion: AccordionState
  onClick: (accordionId: string) => () => void
  number: number
  phaseName: string
  status: Status
  tasks: TaskDTO[]
}>


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
      <h2 id={normalizeString(phaseName)}>
        {phaseName}
        {status === 'closed' && <span> (closed)</span>}
      </h2>
    </div>
    {tasks.map(({ taskName, taskContent, taskDuration }) => {
      const { from, to } = taskDuration
      const title = (
        <div className="okp4-nemeton-web-tasks-accordion-title">
          <h3>{taskName}</h3>
          <p>{`${moment(from).utc().format('MMM. Do, H:mm ')} UTC - ${moment(to)
            .utc()
            .format('MMM. Do, H:mm ')} UTC`}</p>
        </div>
      )
      const accordionId = normalizeString(`${phaseName}-${taskName}`)
      const active = activeAccordion === accordionId

      return (
        <div key={accordionId}>
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

export default PhaseAccordions
