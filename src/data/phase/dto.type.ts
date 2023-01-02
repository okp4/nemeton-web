export type Duration = Readonly<{
  from: string
  to: string
}>

export type TaskContentId = 'rewards' | 'criteria' | 'submit' | 'description'

export type TaskContent = Readonly<{
  id: TaskContentId
  name: string
  content: JSX.Element
}>

export type Task = Readonly<{
  group: string
  taskName: string
  taskContent: TaskContent[]
  taskDuration: Duration
  points: number
}>

export type PhaseDTO = Readonly<{
  number: number
  phaseName: string
  phaseDescription: string
  status: 'coming' | 'active' | 'closed'
  phaseDuration?: Duration
  tasks: Task[]
}>
