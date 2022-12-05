import type { Druid, PodiumDruid } from '../../entity/druid'
import type { PodiumValidatorEdgeDTO, ValidatorEdgeDTO } from './dto.types'

export const mapValidatorEdgeDTOToDruid = (dto: ValidatorEdgeDTO): Druid => ({
  rank: dto.node.rank,
  identity: {
    name: dto.node.moniker,
    avatar: dto.node.identity?.picture?.href ?? '/image/avatar-fallback.webp'
  },
  valoper: dto.node.valoper,
  points: dto.node.points,
  tasks: {
    completed: dto.node.tasks.completedCount,
    started: dto.node.tasks.startedCount
  }
})

export const mapPodiumValidatorEdgeDTOToPodiumDruid = (
  dto: PodiumValidatorEdgeDTO
): PodiumDruid => ({
  rank: dto.node.rank,
  identity: {
    name: dto.node.moniker,
    avatar: dto.node.identity?.picture?.href ?? '/image/avatar-fallback.webp'
  }
})
