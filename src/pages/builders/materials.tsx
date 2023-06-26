import { useMemo } from 'react'
import Image from 'next/image'
import { config } from '@/lib/config'
import type { GetServerSideProps, NextPage } from 'next'
import type { Config } from '@/types/config.type'

export type MaterialsProps = Pick<Config, 'urls'>

type MaterialAnchor = {
  name: string
  icon: string
  url: string
}

const Materials: NextPage<MaterialsProps> = props => {
  const { urls } = props
  const {
    githubUrls: { githubOkp4dUrl, githubContractsUrl, githubAwesomeUrl },
    docsUrls: { whitepaperUrl, tutorialsUrl },
    socialMediaUrls: { mediumUrl },
    supportUrls: { discordChannelUrl, discordTicketChannelUrl }
  } = urls

  const materialsAnchors: MaterialAnchor[] = useMemo(
    () => [
      {
        name: 'Whitepaper',
        icon: 'whitepaper',
        url: whitepaperUrl
      },
      {
        name: 'Tutorials',
        icon: 'tutorials',
        url: tutorialsUrl
      },
      {
        name: 'Github okp4d',
        icon: 'github-round-dark',
        url: githubOkp4dUrl
      },
      {
        name: 'Github awesome',
        icon: 'github-round-dark',
        url: githubAwesomeUrl
      },
      {
        name: 'Medium',
        icon: 'medium',
        url: mediumUrl
      },
      {
        name: 'Github contracts',
        icon: 'github-round-dark',
        url: githubContractsUrl
      }
    ],
    [githubAwesomeUrl, githubContractsUrl, githubOkp4dUrl, mediumUrl, tutorialsUrl, whitepaperUrl]
  )

  return (
    <div className="okp4-nemeton-web-page-main">
      <div className="okp4-nemeton-web-page-content-container" id="materials">
        <div className="okp4-nemeton-web-page-materials-container">
          <h1>Materials</h1>
          <div className="okp4-nemeton-web-page-divider" />
          <p>Here are all the links you could need to realize the challenges.</p>
          <div className="okp4-nemeton-web-page-materials-anchors-container">
            {materialsAnchors.map(({ name, icon, url }, index) => (
              <a
                className="okp4-nemeton-web-page-materials-anchor"
                href={url}
                key={`${name}-${index}`}
                rel="noreferrer"
                target="_blank"
              >
                <div className="okp4-nemeton-web-page-materials-anchor-content">
                  <div className="okp4-nemeton-web-page-materials-anchor-content-icon">
                    <Image alt={`${icon}-link`} height={19} src={`/icons/${icon}.svg`} width={20} />
                    <span>{name}</span>
                  </div>
                  <Image
                    alt="okp4-arrow-right"
                    height={24}
                    src={`/icons/arrow_right.svg`}
                    width={24}
                  />
                </div>
              </a>
            ))}
          </div>
          <p>
            You can ask help to your fellow builders on{' '}
            <a href={discordChannelUrl} rel="noreferrer" target="_blank">
              the Discord dedicated channel
            </a>{' '}
            or{' '}
            <a href={discordTicketChannelUrl} rel="noreferrer" target="_blank">
              Open a ticket
            </a>{' '}
            to specify your need to the team.
          </p>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<MaterialsProps> = async () => ({
  props: {
    ...config
  }
})

export default Materials
