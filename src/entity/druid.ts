export type Druid = Readonly<{
  rank: number
  identity: {
    avatar: string
    name: string
  }
  valoper: string
  tasks: {
    completed: number
    started: number
  }
  points: number
}>

export type PodiumDruid = Pick<Druid, 'rank' | 'identity'>
