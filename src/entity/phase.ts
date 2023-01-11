export type PhaseDescriptor = Readonly<{
  number: number
  name: string
  startDate: string
  endDate: string
}>

export type Phase = Readonly<{
  number: number
  started: boolean
  points: number
  name: string
  tasks: Task[]
}>

export type Task = Readonly<{
  name: string
  completed: boolean
  started: boolean
  finished: boolean
  points: number
  submitted?: boolean
}>

export type TasksPerPhase = Readonly<{
  phase: Phase
}>
