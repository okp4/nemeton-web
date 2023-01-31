import moment from 'moment'
import type { PhaseStatus } from './data/phase/dto.type'

export const getPhaseStatus = (startDate: string, endDate: string): PhaseStatus => {
  if (moment().isBefore(startDate)) return 'coming'
  if (moment().isAfter(endDate)) return 'closed'
  return 'active'
}
