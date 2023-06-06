import classNames from 'classnames'
import React, { useCallback, useMemo } from 'react'
import type { DruidProfile } from '@/entity/druid'
import { Copy } from '@/components/copy/Copy'

export type ProfileProps = Readonly<{
  druidProfile: DruidProfile
  explorerUrl: string
  onValoperCopied: (valoper: string) => void
}>

type ActionButton = Readonly<{
  label: string
  href: string | null
  disabled?: boolean
}>

const Profile: React.FC<ProfileProps> = ({ druidProfile, explorerUrl, onValoperCopied }) => {
  const actionButtons: ActionButton[] = useMemo(
    () => [
      {
        label: 'website',
        href: druidProfile.website,
        disabled: !druidProfile.website
      },
      {
        label: 'explorer',
        href: `${explorerUrl}${druidProfile.valoper}`,
        disabled: false
      },
      {
        label: 'twitter',
        href: `https://twitter.com/${druidProfile.twitter}`,
        disabled: !druidProfile.twitter
      }
    ],
    [druidProfile.twitter, druidProfile.valoper, druidProfile.website, explorerUrl]
  )

  const openInNewTab = useCallback(
    (url: string | null) => () => {
      if (url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    },
    []
  )

  return (
    <div className="okp4-nemeton-web-profile-main">
      <div
        className="okp4-nemeton-web-profile-avatar"
        style={{ backgroundImage: `url(${druidProfile.identity.avatar})` }}
      />
      <div className="okp4-nemeton-web-profile-identity-container">
        <h2>{druidProfile.identity.name}</h2>
        <div className="okp4-nemeton-web-profile-identity-address-wrapper">
          <p>Address:</p>
          <p>{druidProfile.valoper}</p>
          <Copy item={druidProfile.valoper} onCopied={onValoperCopied} />
        </div>
      </div>
      <div className="okp4-nemeton-web-profile-actions-container">
        {actionButtons.map(({ disabled, label, href }, index) => (
          <div
            className={classNames(`okp4-nemeton-web-profile-action-button ${label}`, {
              disabled
            })}
            key={index}
            onClick={openInNewTab(href)}
            title={href ?? undefined}
          />
        ))}
      </div>
    </div>
  )
}

export default Profile
