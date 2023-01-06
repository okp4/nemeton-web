import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useMediaType } from '../../../hook/useMediaType'
import type { Route } from '../../../routes'
import { headerRoutes } from '../../../routes'

type MenuProps = Readonly<{
  routerPath: string | null
}>

const MobileMenu: React.FC<MenuProps> = ({ routerPath }): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen)
  }, [menuOpen])

  return (
    <div
      className={classNames('okp4-nemeton-web-header-links-mobile-container', { open: menuOpen })}
    >
      <div
        className={`okp4-nemeton-web-header-links-mobile-burger-menu ${
          menuOpen ? 'rotate-down' : 'rotate-up'
        }`}
      >
        <Image
          alt="mobile-menu"
          height={40}
          onClick={toggleMenu}
          src="/icons/menu-dark.svg"
          width={40}
        />
      </div>
      <div className={classNames('okp4-nemeton-web-header-mobile-menu-links', { open: menuOpen })}>
        {headerRoutes.map(({ name, path }: Route, index: number) => (
          <React.Fragment key={path}>
            {index >= 0 && <div className="okp4-nemeton-web-header-mobile-links-divider" />}
            <Link href={path}>
              <h2 className={classNames('link-label', { active: routerPath === path })}>{name}</h2>
            </Link>
            {index === headerRoutes.length - 1 && (
              <div className="okp4-nemeton-web-header-mobile-links-divider" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

const DesktopMenu: React.FC<MenuProps> = ({ routerPath }): JSX.Element => {
  return (
    <div className="okp4-nemeton-web-header-links-container">
      {headerRoutes.map(({ name, path, hash }: Route) => (
        <Link href={hash ? `${path}${hash}` : path} key={path}>
          <h2 className={classNames('link-label', { active: path === routerPath })}>{name}</h2>
        </Link>
      ))}
    </div>
  )
}

export const Header: React.FC = () => {
  const [routerPath, setRouterPath] = useState<string | null>(null)
  const isLargeScreen = useMediaType('(min-width: 1441px)')
  const isMobileScreen = useMediaType('(max-width: 580px)')
  const router = useRouter()

  useEffect(() => {
    setRouterPath(router.pathname)
  }, [router.pathname])

  return (
    <div className="okp4-nemeton-web-header-main">
      <div className="okp4-nemeton-web-header-title-container">
        <h1>Nemeton Program</h1>
      </div>
      <div className="okp4-nemeton-web-header-logo-container">
        {isLargeScreen ? (
          <Image
            alt="okp4-vertical-logo"
            height={275}
            src="/image/okp4-logo-vertical.webp"
            width={359}
          />
        ) : (
          <Image alt="okp4-logo-mobile" height={42} src="/image/okp4-logo-mobile.svg" width={150} />
        )}
      </div>
      <div className="okp4-nemeton-web-header-description-container">
        <h1>incentivized testnet program</h1>
      </div>
      {!isLargeScreen && <div className="okp4-nemeton-web-header-divider" />}
      {isMobileScreen ? (
        <MobileMenu routerPath={routerPath} />
      ) : (
        <DesktopMenu routerPath={routerPath} />
      )}
    </div>
  )
}
