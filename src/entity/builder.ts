type Valoper = string

export type BuilderDescriptor = Readonly<{
  rank: number
  valoper: Valoper
  earnings: {
    poap: string[]
    know: number
  }
}>

export type BuildersDescriptor = BuilderDescriptor[]
