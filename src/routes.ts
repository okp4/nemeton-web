export type Route = {
  name: string
  path: string
  hash?: string
  subMenu?: SubRoute[]
}

export type SubRoute = Omit<Route, 'subMenu'>

const subMenuLinks = (path: string): SubRoute[] => [
  {
    name: 'Rewards',
    path: `/${path}/rewards`,
    hash: '#rewards'
  },
  {
    name: 'F.A.Q.',
    path: `/${path}/faq`,
    hash: '#faq'
  },
  {
    name: 'Terms',
    path: `/${path}/terms`,
    hash: '#terms-conditions'
  }
]

const validatorsProgramMenu: SubRoute[] = [
  {
    name: 'Leaderboard',
    path: '/validators/leaderboard',
    hash: '#leaderboard'
  },
  {
    name: 'Tasks',
    path: '/validators/tasks',
    hash: '#tasks'
  },
  ...subMenuLinks('validators')
]

export const menu: Route[] = [
  {
    name: 'Home',
    path: '/',
    hash: '#home'
  },
  {
    name: 'Validators program',
    path: '/validators',
    subMenu: validatorsProgramMenu
  },
  {
    name: 'Builders program',
    path: '/builders',
    hash: '#builders'
  }
]

export const footerRoutes: Route[] = [
  {
    name: 'Support',
    path: '/support',
    hash: '#support-page'
  },
  {
    name: 'Privacy Policy',
    path: '/privacy',
    hash: '#privacy-cookie-policy'
  }
]
