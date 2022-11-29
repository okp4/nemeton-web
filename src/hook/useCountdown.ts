import { useEffect, useState } from 'react'
import moment from 'moment'

export type CountdownStats = {
  days: number
  hours: number
  minutes: number
}

export const useCountdown = (end: moment.Moment): CountdownStats => {
  const duration = moment.duration(end.diff(moment()))
  const [countdown, setCountDown] = useState<moment.Duration>(duration)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(duration)
    }, 1000)

    return () => clearInterval(interval)
  }, [duration, end])
  return { days: countdown.days(), hours: countdown.hours(), minutes: countdown.minutes() }
}
