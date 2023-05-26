import type { GetServerSideProps, NextPage } from 'next'
import type { Config } from '@/types/config.type'
import { config } from '@/lib/config'

export type BuildersProps = Pick<Config, 'urls'>

const Builders: NextPage<BuildersProps> = () => (
  <div className="okp4-nemeton-web-page-main">
    <div className="okp4-nemeton-web-page-content-container" id="builders">
      <div className="okp4-nemeton-web-page-builders-container">
        <h1>Coming soon</h1>
      </div>
    </div>
  </div>
)

export const getServerSideProps: GetServerSideProps<BuildersProps> = async () => ({
  props: {
    ...config
  }
})

export default Builders
