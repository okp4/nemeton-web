import dynamic from 'next/dynamic'

const Layout = dynamic(async () => await import('@/components/layout/Layout'))

const PhaseCard = dynamic(async () => await import('@/components/card/phase/PhaseCard'))

const BaseCard = dynamic(async () => await import('@/components/card/base/BaseCard'))

const Accordion = dynamic(async () => await import('@/components/accordion/Accordion'))

const Podium = dynamic(async () => await import('@/components/podium/Podium'))

const LeaderboardTable = dynamic(async () => await import('@/components/table/LeaderboardTable'))

const Countdown = dynamic(async () => await import('@/components/countdown/Countdown'))

const Snackbar = dynamic(async () => await import('@/components/snackbar/Snackbar'))

const GoBackButton = dynamic(async () => await import('@/components/button/goBackButton'))

const Profile = dynamic(async () => await import('@/components/profile/profile'))

const TasksSummary = dynamic(async () => await import('@/components/tasks/TasksSummary'))

const LottieLoader = dynamic(async () => await import('@/components/loader/LottieLoader'))

export {
  PhaseCard,
  Layout,
  Accordion,
  BaseCard,
  Podium,
  LeaderboardTable,
  Countdown,
  Snackbar,
  GoBackButton,
  Profile,
  TasksSummary,
  LottieLoader
}
