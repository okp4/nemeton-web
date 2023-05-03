import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useMediaType } from '../../../hook/useMediaType'
import { menu } from '../../../routes'
import type { Route } from '../../../routes'

type MenuProps = Readonly<{
  routerPath: string | null
}>

type SubMenuProps = MenuProps & Readonly<{
  selectedMenu: Route | null
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
        {menu.map(({ name, path }: Route, index: number) => (
          <React.Fragment key={path}>
            {index >= 0 && <div className="okp4-nemeton-web-header-mobile-links-divider" />}
            <Link href={path}>
              <h2 className={classNames('link-label', { active: routerPath === path })}>{name}</h2>
            </Link>
            {index === menu.length - 1 && (
              <div className="okp4-nemeton-web-header-mobile-links-divider" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

const SubMenuDesktop: React.FC<SubMenuProps> = ({ selectedMenu, routerPath }) => (
  <div
    className={classNames('okp4-nemeton-web-header-sub-links-container', {
      open: selectedMenu
    })}
  >
    {selectedMenu?.subMenu?.map(({ name, path, hash }) => (
      <Link href={hash ? `${path}${hash}` : path} key={path}>
        <h2 className={classNames('link-label', { active: routerPath?.includes(path) })}>{name}</h2>
      </Link>
    ))}
  </div>
)

const DesktopMenu: React.FC<MenuProps> = ({ routerPath }): JSX.Element => {
  const [selectedMenu, setSelectedMenu] = useState<Route | null>(null)
  
  useEffect(() => {
    const route = menu.find((route: Route) => routerPath?.startsWith(route.path) && route.subMenu?.length)
    if (route) setSelectedMenu(route)
  }, [routerPath])

  const handleClick = useCallback(
    (menuItem: Route) => () => {
      const isMenuItemSelected = menuItem.name === selectedMenu?.name
      menuItem.subMenu && setSelectedMenu(isMenuItemSelected ? null : menuItem)
    },
    [selectedMenu]
  )

  const isActiveMenu = useCallback(
    (menuItem: Route) => (routerPath?.startsWith(menuItem.path) ?? '') || selectedMenu === menuItem,
    [routerPath, selectedMenu]
  )

  return (
    <React.Fragment>
      <div className="okp4-nemeton-web-header-links-container">
        {menu.map((menuItem: Route) => (
          <div
            className="okp4-nemeton-web-header-menu-item"
            key={menuItem.name}
            onClick={handleClick(menuItem)}
          >
            {menuItem.hash ? (
              <Link
                href={`${menuItem.path}${menuItem.hash}`}
              >
                <h2
                  className={classNames('link-label', {
                    active:
                      (routerPath === menuItem.path ||
                        routerPath?.substring(1) === menuItem.hash) &&
                      !selectedMenu
                  })}
                >
                  {menuItem.name}
                </h2>
              </Link>
            ) : (
              <h2
                className={classNames('link-label', {
                  active: isActiveMenu(menuItem)
                })}
              >
                {menuItem.name}
              </h2>
            )}
          </div>
        ))}
      </div>
      <SubMenuDesktop
        routerPath={routerPath}
        selectedMenu={selectedMenu}
      />
    </React.Fragment>
  )
}

export const Header: React.FC = () => {
  const [routerPath, setRouterPath] = useState<string | null>(null)
  const isLargeScreen = useMediaType('(min-width: 1441px)')
  const isMobileScreen = useMediaType('(max-width: 580px)')
  const router = useRouter()

  useEffect(() => {
    setRouterPath(router.asPath)
  }, [router.asPath])

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
