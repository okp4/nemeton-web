import type { PhasesConfig } from '../../types/config.type'
import { beltaine } from './beltaine'
import { imbolc } from './imbolc'
import { sidh } from './sidh'
import type { PhaseDTO } from './dto.type'

const Phases = (phases: PhasesConfig): PhaseDTO[] => [
  sidh(phases),
  imbolc(phases),
  beltaine(phases)
]
export default Phases
