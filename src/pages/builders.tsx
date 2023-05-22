import type { GetServerSideProps, NextPage } from 'next'
import { Head } from '@/components/head/Head'
import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import type { Config } from '@/types/config.type'
import { config } from '@/lib/config'

export type BuildersProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Builders: NextPage<BuildersProps> = props => {
  const { urls } = props

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-page-content-container" id="builders">
          <div className="okp4-nemeton-web-page-builders-container">
            <h1>Coming soon</h1>
          </div>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<BuildersProps> = async () => ({
  props: {
    ...config
  }
})

export default Builders
