import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { useMediaType } from '../../../hook/useMediaType'
import type { Config } from '../../../types/config.type'
import Link from 'next/link'
import type { Route } from '../../../routes'
import { footerRoutes } from '../../../routes'
import classNames from 'classnames'

type SocialMedia = {
  label: string
  url: string
}

type FooterProps = {
  urls: Config['urls']
}

export const Footer: React.FC<FooterProps> = ({ urls }): JSX.Element => {
  const { socialMediaUrls, websiteUrl, docsUrls } = urls
  const router = useRouter()
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
  const isMobileScreen = useMediaType('(max-width: 900px)')
  const iconSize = isLargeScreen ? 50 : 28

  return (
    <div className="okp4-nemeton-web-footer-container">
      <div className="okp4-nemeton-web-footer-content">
        <a href={websiteUrl} rel="noreferrer" target="_blank">
          <Image
            alt="okp4-mobile-logo"
            height={isMobileScreen ? 42 : 85}
            src="/image/okp4-logo-mobile.svg"
            width={isMobileScreen ? 150 : 305}
          />
        </a>
        <div className="okp4-nemeton-web-footer-links-container">
          {footerRoutes.map(({ name, path, hash }: Route) => (
            <React.Fragment key={path}>
              <Link href={hash ? `${path}${hash}` : path}>
                <h2 className={classNames('link-label', { active: router.pathname === path })}>
                  {name}
                </h2>
              </Link>
              <div className="okp4-nemeton-web-footer-links-divider" />
            </React.Fragment>
          ))}
          <a className="link-label" href={docsUrls.whitepaperUrl} rel="noreferrer" target="_blank">
            Whitepaper
          </a>
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
