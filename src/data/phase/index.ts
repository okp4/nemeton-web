import type { TasksUrls } from '../../types/config.type'
import { beltaine } from './beltaine'
import { imbolc } from './imbolc'
import { sidh } from './sidh'
import type { PhaseDTO } from './dto.type'

const Phases = (taskUrls: TasksUrls): PhaseDTO[] => [sidh(taskUrls), imbolc(taskUrls), beltaine]
export default Phases
