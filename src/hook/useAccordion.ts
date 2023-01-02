import { useState } from 'react'

export type AccordionState = string | number | null
export type UseAccordionTuple = [AccordionState, (value: AccordionState) => void]

export const useAccordion = (): UseAccordionTuple => {
  const [activeIndex, setActiveIndex] = useState<AccordionState>(null)
  return [activeIndex, setActiveIndex]
}
