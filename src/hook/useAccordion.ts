import { useState } from 'react'

export const useAccordion = (): [number | null, (value: number | null) => void] => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  return [activeIndex, setActiveIndex]
}
