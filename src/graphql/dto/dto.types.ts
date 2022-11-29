import type { Tasks, Validator, ValidatorEdge } from '../generated/query/types'

export type ValidatorDTO = Pick<
  Validator,
  'rank' | 'valoper' | 'points' | 'moniker' | 'identity'
> & { tasks: DTOTasks }

export type DTOTasks = Omit<Tasks, 'perPhase'>

export type ValidatorEdgeDTO = Pick<ValidatorEdge, 'cursor'> & { node: ValidatorDTO }

export type PodiumValidatorEdgeDTO = { node: Pick<ValidatorDTO, 'identity' | 'moniker' | 'rank'> }
