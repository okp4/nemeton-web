import { useState } from 'react'

export type UseAccordionTuple = [number | null, (value: number | null) => void]

export const useAccordion = (): UseAccordionTuple => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  return [activeIndex, setActiveIndex]
}
