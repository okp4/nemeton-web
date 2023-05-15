export type Duration = Readonly<{
  from: string
  to: string
}>

export type TaskContentId = 'rewards' | 'criteria' | 'submit' | 'description'
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

export type Challenges = Readonly<{
  description: JSX.Element
}>

export type ChallengeContent = Readonly<{
  challengeId: number
  challengeCategory: string
  challenges: Challenges[]
}>

export type ChallengeDTO = Readonly<{
  challengePart: string
  challengeDescription: JSX.Element
  challengeContent: ChallengeContent[]
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
