import type { BuilderDescriptor } from '@/entity/builder'
import type { BuilderDTO } from './dto.type'

export const mapBuilderDTOtoBuilderDescriptor = (builder: BuilderDTO): BuilderDescriptor => ({
  rank: builder.rank,
  valoper: builder.valoper,
  earnings: {
    poap: builder.poap,
    know: builder.know
  }
})
