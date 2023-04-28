import { getPhaseStatus } from '@/utils'
import type { PhasesConfig } from '@/types/config.type'
import type { PhaseDTO } from './dto.type'

export const samhain = ({ samhain: { startDate, endDate } }: PhasesConfig): PhaseDTO => ({
  number: 5,
  phaseName: 'samhain',
  phaseDescription:
    ' Samhain is no longer only for validators but for builders too and its main objective is the emergence of uses and applications of the OKP4 protocol.',
  status: getPhaseStatus(startDate, endDate),
  phaseDuration: {
    from: startDate,
    to: endDate
  },
  tasks: []
})
