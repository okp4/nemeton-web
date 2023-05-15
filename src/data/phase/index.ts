import type { PhasesConfig } from '@/types/config.type'
import type { PhaseDTO } from './dto.type'
import { beltaine } from './beltaine'
import { imbolc } from './imbolc'
import { sidh } from './sidh'
import { lughnasad } from './lughnasad'
import { samhain } from './samhain'

const Phases = (phases: PhasesConfig): PhaseDTO[] => [
  sidh(phases),
  imbolc(phases),
  beltaine(phases),
  lughnasad(phases),
  samhain(phases)
]
export default Phases
