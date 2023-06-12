export type Duration = Readonly<{
  from: string
  to: string
}>

export type TaskContentId = 'rewards' | 'criteria' | 'submit' | 'description'
export type ChallengeTaskContentId = TaskContentId | 'documentation'
export type PhaseStatus = 'coming' | 'active' | 'closed'

export type TaskContent = Readonly<{
  id: TaskContentId
  title: string
  contentDescription: JSX.Element
}>

export type TaskDTO = Readonly<{
  group: string
  taskName: string
  taskContent: TaskContent[]
  taskDuration: Duration
  points: number
}>

export type ChallengeTaskContent = Readonly<{
  id: ChallengeTaskContentId
  title: string
  contentDescription: JSX.Element
}>

export type ChallengeTasks = Readonly<{
  taskName: string
  taskContent: ChallengeTaskContent[]
  taskDuration: Duration
}>

export type ChallengeDTO = Readonly<{
  challengeName: string
  challengeDescription: JSX.Element
  challengeTasks: ChallengeTasks[]
}>

export type PhaseDTO = Readonly<{
  number: number
  phaseName: string
  phaseDescription: string
  status: PhaseStatus
  phaseDuration?: Duration
  tasks: TaskDTO[]
  challenges?: ChallengeDTO[]
}>
