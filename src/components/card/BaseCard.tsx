import React from 'react'

type BaseCardProps = {
  title?: JSX.Element
  description?: JSX.Element
  backgroundImageUrl?: string
}

export const BaseCard: React.FC<BaseCardProps> = ({ title, description }) => (
  <div className="okp4-nemeton-web-base-card-main">
    {title && <div className="okp4-nemeton-web-base-card-title-container">{title}</div>}
    {description && (
      <div className="okp4-nemeton-web-base-card-description-container">{description}</div>
    )}
  </div>
)
