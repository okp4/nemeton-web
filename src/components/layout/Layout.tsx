import React from 'react'
import { Header } from '@/components/layout/header/Header'
import { Head } from '@/components/head/Head'
import { Footer } from './footer/Footer'
import type { Config } from '@/types/config.type'

type LayoutProps = {
  children: React.ReactNode
  title: string
  description: string
  keywords: string
  urls: Config['urls']
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  keywords,
  urls
}: LayoutProps) => (
  <div>
    <Head description={description} keywords={keywords} title={title} />
    <main>
      <Header />
      {children}
      <Footer urls={urls} />
    </main>
  </div>
)

export default Layout