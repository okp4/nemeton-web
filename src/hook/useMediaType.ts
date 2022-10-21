import { useCallback, useEffect, useState } from 'react'

export const useMediaType = (query: string): boolean => {
  const [matches, setMatches]: [boolean, (value: boolean) => void] = useState<boolean>(false)

  const handleChange = useCallback((event: MediaQueryListEvent) => {
    setMatches(event.matches)
  }, [])

  useEffect(() => {
    const matchQueryList = window.matchMedia(query)
    setMatches(matchQueryList.matches)

    matchQueryList.addEventListener('change', handleChange)

    return () => {
      matchQueryList.removeEventListener('change', handleChange)
    }
  }, [handleChange, query, setMatches])

  return matches
}
