export type Route = {
  name: string
  path: string
}

export const headerRoutes: Route[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Rewards',
    path: '/rewards'
  },
  {
    name: 'F.A.Q',
    path: '/faq'
  },
  {
    name: 'Terms',
    path: '/terms'
  }
]

export const footerRoutes: Route[] = [
  {
    name: 'Support',
    path: '/support'
  },
  {
    name: 'Privacy Policy',
    path: '/privacy'
  }
]
