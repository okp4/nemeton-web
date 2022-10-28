import Image from 'next/image'
import getConfig from 'next/config'
import React, { useMemo } from 'react'
import { useMediaType } from '../../../hook/useMediaType'
import type { Config } from '../../../types/config.type'
import './footer.scss'
import Link from 'next/link'

type SocialMedia = {
  label: string
  url: string
}

type FooterProps = {
  staticUrls: Config['app']
}

export const Footer: React.FC<FooterProps> = ({ staticUrls }): JSX.Element => {
  const { socialMediaUrls, websiteUrl } = staticUrls
  const socialMedias: SocialMedia[] = useMemo(
    () => [
      {
        label: 'discord',
        url: socialMediaUrls.discordUrl
      },
      {
        label: 'github',
        url: socialMediaUrls.githubUrl
      },
      {
        label: 'linkedin',
        url: socialMediaUrls.linkedinUrl
      },
      {
        label: 'medium',
        url: socialMediaUrls.mediumUrl
      },
      {
        label: 'telegram',
        url: socialMediaUrls.telegramUrl
      },
      {
        label: 'twitter',
        url: socialMediaUrls.twitterUrl
      }
    ],
    [socialMediaUrls]
  )
  const isLargeScreen = useMediaType('(min-width: 1540px)')
  const isMobileScreen = useMediaType('(max-width: 580px)')
  const iconSize = isLargeScreen ? 50 : 28
  const { publicRuntimeConfig } = getConfig()
  return (
    <div className="okp4-nemeton-web-footer-container">
      <div className="okp4-nemeton-web-footer-content">
        <a
          href={websiteUrl}
          rel="noreferrer"
          target="_blank"
          title={`v${publicRuntimeConfig.version}`}
        >
          {isLargeScreen ? (
            <Image
              alt="okp4-inline-logo"
              height={110}
              src="/image/okp4-inline-logo.png"
              width={396}
            />
          ) : (
            <Image
              alt="okp4-inline-logo"
              height={isMobileScreen ? 39 : 85}
              src="/image/okp4-inline-logo.png"
              width={isMobileScreen ? 145 : 305}
            />
          )}
        </a>
        <div className="okp4-nemeton-web-footer-links-container">
          <Link href="/support">
            <p>Support</p>
          </Link>
          <div className="okp4-nemeton-web-footer-links-divider" />
          <p>Privacy Policy</p>
          <div className="okp4-nemeton-web-footer-links-divider" />
          <p>Whitepaper</p>
        </div>
        <div className="okp4-nemeton-web-footer-socials-media-container">
          {socialMedias.map((socialMedia: SocialMedia) => (
            <a href={socialMedia.url} key={socialMedia.url} rel="noreferrer" target="_blank">
              <Image
                alt={`${socialMedia.label}-link`}
                className="okp4-nemeton-web-footer-socials-media-icon"
                height={iconSize}
                src={`/icons/${socialMedia.label}-round-dark.svg`}
                width={iconSize}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
