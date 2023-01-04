import type { Druid, DruidDescriptor, PodiumDruid } from '../../entity/druid'
import type { QValidatorQuery } from '../generated/query/types'
import type { PodiumValidatorEdgeDTO, ValidatorEdgeDTO } from './dto.types'

export const mapValidatorEdgeDTOToDruid = (dto: ValidatorEdgeDTO): DruidDescriptor => ({
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

export const mapValidatorDTOToDruid = (dto: QValidatorQuery['validator']): Druid | null =>
  dto
    ? {
        profile: {
          identity: {
            name: dto.moniker,
            avatar: dto.identity?.picture?.href ?? '/image/avatar-fallback.webp'
          },
          valoper: dto.valoper,
          website: dto.website ?? null,
          twitter: dto.twitter ?? null,
          points: dto.points
        },

        tasksPerPhase: dto.tasks.perPhase.map(perPhase => ({
          phase: {
            number: perPhase.phase.number,
            started: perPhase.phase.started,
            tasks: perPhase.tasks.map(t => ({
              name: t.task.name,
              completed: t.completed,
              points: t.earnedPoints,
              finished: t.task.finished,
              started: t.task.started
            })),
            points: perPhase.points
          }
        }))
      }
    : null
