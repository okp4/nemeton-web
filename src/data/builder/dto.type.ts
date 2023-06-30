type Valoper = string

type BuilderIdentity = Readonly<{
  valoper: Valoper
}>

type Builder = Readonly<{
  rank: number
  poap: string[]
  know: number
}>

export type BuilderDTO = BuilderIdentity & Builder
export type BuildersDTO = BuilderDTO[]
