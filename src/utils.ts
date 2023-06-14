import moment from 'moment'
import type { Status } from './data/phase/dto.type'

export const getStatusByDuration = (startDate: string, endDate: string): Status => {
  if (moment().isBefore(startDate)) return 'coming'
  if (moment().isAfter(endDate)) return 'closed'
  return 'active'
}
