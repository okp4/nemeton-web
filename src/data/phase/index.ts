import type { PhasesConfig } from '@/types/config.type'
import { beltaine } from './beltaine'
import { imbolc } from './imbolc'
import { sidh } from './sidh'
import type { PhaseDTO } from './dto.type'
import { lughnasad } from './lughnasad'

const Phases = (phases: PhasesConfig): PhaseDTO[] => [
  sidh(phases),
  imbolc(phases),
  beltaine(phases),
  lughnasad(phases)
]
export default Phases
