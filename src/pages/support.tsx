import type { NextPage } from 'next'
import Link from 'next/link'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import type { Config } from '../types/config.type'

export type SupportProps = {
  staticUrls: Config['app']
}

const Support: NextPage<SupportProps> = ({ staticUrls }) => {
  const {
    typeformUrl,
    supportUrls: { discordNemetonUrl, discordTicketUrl },
    docsUrls: { nodesUrl }
  } = staticUrls

  return (
    <div className="okp4-nemeton-web-page-main">
      <main>
        <Header typeformUrl={typeformUrl} />
        <div className="okp4-nemeton-web-page-content-container">
          <h1>Support page</h1>
          <p>
            For any help please consult these links for answers:
            <br />
            <ul>
              <li>
                <a href={nodesUrl} rel="noreferrer" target="_blank">
                  Nodes & Validator Guide
                </a>
              </li>
              <br />
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <br />
              <li>
                OKP4 Discord server:
                <ul>
                  <li>
                    <a href={discordNemetonUrl} rel="noreferrer" target="_blank">
                      Nemeton program
                    </a>
                  </li>
                  <li>
                    <a href={discordTicketUrl} rel="noreferrer" target="_blank">
                      Request ticket
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </p>
        </div>
        <Footer staticUrls={staticUrls} />
      </main>
    </div>
  )
}

export default Support
