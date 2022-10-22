import Image from 'next/image'
import { useMediaType } from '../../../hook/useMediaType'
import './footer.scss'

export const Footer = (): JSX.Element => {
  const isLargeScreen = useMediaType('(min-width: 1441px)')
  const isMobileScreen = useMediaType('(max-width: 390px)')

  return (
    <div className="okp4-nemeton-web-footer-container">
      <div className="okp4-nemeton-web-footer-content">
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
            height={isMobileScreen ? 62 : 85}
            src="/image/okp4-inline-logo.png"
            width={isMobileScreen ? 225 : 305}
          />
        )}
        <div className="okp4-nemeton-web-footer-links-container">
          <p>Support</p>
          <div className="okp4-nemeton-web-footer-links-divider" />
          <p>Privacy Policy</p>
          <div className="okp4-nemeton-web-footer-links-divider" />
          <p>Whitepaper</p>
        </div>
        <div className="okp4-nemeton-web-footer-socials-media-container">
          <p>Icon</p>
          <p>Icon</p>
          <p>Icon</p>
          <p>Icon</p>
          <p>Icon</p>
        </div>
      </div>
    </div>
  )
}
