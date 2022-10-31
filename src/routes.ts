export type Route = {
  name: string
  path: string
}

export const headerRoutes: Route[] = [
  {
    name: 'Home',
    path: '/#home'
  },
  {
    name: 'Rewards',
    path: '/rewards#rewards'
  },
  {
    name: 'F.A.Q',
    path: '/faq#faq'
  },
  {
    name: 'Terms',
    path: '/terms#terms-conditions'
  }
]

export const footerRoutes: Route[] = [
  {
    name: 'Support',
    path: '/support#support-page'
  },
  {
    name: 'Privacy Policy',
    path: '/privacy#privacy-cookie-policy'
  }
]

export const supportRoutes: Route[] = [
  {
    name: 'F.A.Q',
    path: '/faq#faq'
  }
]
export const termsRoutes: Route[] = [
  {
    name: 'Privacy Policy',
    path: '/privacy#privacy-cookie-policy'
  }
]
