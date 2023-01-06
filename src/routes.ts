export type Route = {
  name: string
  path: string
  hash?: string
}

export const headerRoutes: Route[] = [
  {
    name: 'Home',
    path: '/',
    hash: '#home'
  },
  {
    name: 'Leaderboard',
    path: '/leaderboard',
    hash: '#leaderboard'
  },
  {
    name: 'Tasks',
    path: '/tasks',
    hash: '#tasks'
  },
  {
    name: 'Rewards',
    path: '/rewards',
    hash: '#rewards'
  },
  {
    name: 'F.A.Q.',
    path: '/faq',
    hash: '#faq'
  },
  {
    name: 'Terms',
    path: '/terms',
    hash: '#terms-conditions'
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
