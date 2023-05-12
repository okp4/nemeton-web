import type { Tasks, Validator, ValidatorEdge } from '@/graphql/generated/query/types'

export type ValidatorDTO = Pick<
  Validator,
  'rank' | 'valoper' | 'points' | 'moniker' | 'identity'
> & { tasks: DTOTasks }

export type DTOTasks = Omit<Tasks, 'perPhase' | 'finishedCount'>

export type ValidatorEdgeDTO = Pick<ValidatorEdge, 'cursor'> & { node: ValidatorDTO }

export type PodiumValidatorEdgeDTO = { node: Pick<ValidatorDTO, 'identity' | 'moniker' | 'rank'> }
