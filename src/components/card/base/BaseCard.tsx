import classNames from 'classnames'
import Skeleton from '@mui/material/Skeleton'
import Image from 'next/image'
import React from 'react'

export type BaseCardProps = {
  title?: JSX.Element
  description?: JSX.Element
  backgroundImageUrl?: string
  loading?: boolean
  disabled?: boolean
  disabledBackgroundImageUrl?: string
}

const BaseCard: React.FC<BaseCardProps> = ({
  title,
  description,
  loading,
  disabled,
  disabledBackgroundImageUrl,
  backgroundImageUrl
}) =>
  loading ? (
    <div className="okp4-nemeton-web-base-card-main">
      <Skeleton
        height={45}
        sx={{ bgcolor: 'rgba(255, 255, 255, 0.13)', borderRadius: '10px' }}
        variant="rectangular"
        width={80}
      />
      <div>
        <Skeleton
          height={30}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.13)', borderRadius: '10px' }}
          variant="text"
          width={160}
        />
        <Skeleton
          height={30}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.13)', borderRadius: '10px' }}
          variant="text"
          width={160}
        />
      </div>
    </div>
  ) : (
    <div style={{ position: 'relative' }}>
      {backgroundImageUrl && (
        <Image
          alt="background-image"
          className="okp4-nemeton-web-base-card-bg-image"
          fill
          sizes="100%"
          src={backgroundImageUrl}
        />
      )}
      <div
        className={classNames('okp4-nemeton-web-base-card-main', { disabled })}
        style={{
          backgroundImage:
            disabled && disabledBackgroundImageUrl ? `url(${disabledBackgroundImageUrl})` : 'none'
        }}
      >
        {title && <div className="okp4-nemeton-web-base-card-title-container">{title}</div>}
        {description && (
          <div className="okp4-nemeton-web-base-card-description-container">{description}</div>
        )}
      </div>
    </div>
  )

  export default BaseCard
