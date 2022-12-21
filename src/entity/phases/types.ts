import type { TasksUrls } from '../../types/config.type'

export type PhaseDescriptor = Readonly<{
  number: number
  name: string
  startDate: string
  endDate: string
}>

export type Duration = Readonly<{
  from: string
  to: string
}>

export type Task = Readonly<{
  summary: string
  description?: JSX.Element
  rewards?: (points: number) => JSX.Element
  judgingCriteria?: JSX.Element
  submit?: (urls: TasksUrls) => JSX.Element
  duration?: Duration
  completed?: boolean
  points: number
}>

export type TaskCategory = Readonly<{
  subject?: string
  tasks: Task[]
}>

export type Challenges = Readonly<{
  duration?: Duration
  taskCategories: TaskCategory[]
}>

export type Phase = Readonly<{
  number: number
  name?: string
  description?: string
  challenges?: Challenges
  status?: 'coming' | 'active' | 'closed'
  started?: boolean
  points?: number
}>

export type TasksPerPhase = Readonly<{
  phase: Phase
}>
