import { config } from '@/lib/config'
import { Head } from '@/components/head/Head'
import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import type { GetServerSideProps, NextPage } from 'next'
import type { Config } from '@/types/config.type'

export type MaterialsProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Materials: NextPage<MaterialsProps> = props => {
  const { urls } = props

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-page-content-container" id="materials">
          <h1>Materials</h1>
        </div>
        <Footer urls={urls}/>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<MaterialsProps> = async () => ({
  props: {
    ...config
  }
})

export default Materials
