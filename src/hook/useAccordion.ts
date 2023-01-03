import { useState } from 'react'

export type AccordionState = string | number | null
export type UseAccordionTuple = [AccordionState, (value: AccordionState) => void]

export const useAccordion = (): UseAccordionTuple => {
  const [accordionState, setAccordionState] = useState<AccordionState>(null)
  return [accordionState, setAccordionState]
}
