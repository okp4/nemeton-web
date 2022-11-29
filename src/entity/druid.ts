export type Druid = Readonly<{
  rank: number
  identity: {
    avatar: string
    name: string
  }
  valoper: string
  tasks: {
    completed: number
    finished: number
  }
  points: number
}>

export type PodiumDruid = Pick<Druid, 'rank' | 'identity'>
