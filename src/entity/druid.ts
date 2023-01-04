import type { TasksPerPhase } from './phase'

type Valoper = string

export type DruidDescriptor = Readonly<{
  rank: number
  identity: {
    avatar: string
    name: string
  }
  valoper: Valoper
  tasks: {
    completed: number
    started: number
  }
  points: number
}>

export type PodiumDruid = Pick<DruidDescriptor, 'rank' | 'identity'>

export type DruidProfile = Readonly<
  Pick<DruidDescriptor, 'identity' | 'valoper' | 'points'> & {
    website: string | null
    twitter: string | null
  }
>

export type Druid = Readonly<{
  profile: DruidProfile
  tasksPerPhase: TasksPerPhase[]
}>
