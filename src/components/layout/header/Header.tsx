import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useMediaType } from '@/hook/useMediaType'
import { menu } from '@/routes'
import type { Route } from '@/routes'

type MenuProps = Readonly<{
  routerPath: string | null
}>

type SubMenuProps = MenuProps &
  Readonly<{
    selectedMenu: Route | null
  }>

const SubMenuMobile: React.FC<SubMenuProps> = ({ selectedMenu, routerPath }): JSX.Element => (
  <div className="okp4-nemeton-web-header-mobile-sub-menu-links">
    <div className="okp4-nemeton-web-header-mobile-sub-menu-content">
      <div className="okp4-nemeton-web-header-menu-item-divider" />
      {selectedMenu?.subMenu?.map(({ name, path, hash }) => (
        <Link
          className={classNames('okp4-nemeton-web-header-mobile-sub-menu-item-name', {
            active: routerPath?.startsWith(path)
          })}
          href={`${path}${hash}`}
          key={path}
        >
          {name}
        </Link>
      ))}
    </div>
  </div>
)

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

const Menu: React.FC<MenuProps> = ({ routerPath }): JSX.Element => {
  const [selectedMenu, setSelectedMenu] = useState<Route | null>(null)
  const isMobileScreen = useMediaType('(max-width: 580px)')
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const separatorElement = useMemo(
    (): JSX.Element => <div className="okp4-nemeton-web-header-menu-item-divider" />,
    []
  )

  useEffect(() => {
    const route = menu.find(
      (route: Route) => routerPath?.startsWith(route.path) && route.subMenu?.length
    )
    if (route) setSelectedMenu(route)
  }, [routerPath])

  useEffect(() => setMenuOpen(!routerPath), [routerPath])

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen)
  }, [menuOpen])

  const handleClick = useCallback(
    (menuItem: Route) => () => {
      setSelectedMenu(menuItem.subMenu ? menuItem : null)
    },
    []
  )

  const isActiveMenu = useCallback((menuItem: Route) => selectedMenu === menuItem, [selectedMenu])

  return (
    <React.Fragment>
      <div className="okp4-nemeton-web-header-links-container">
        {isMobileScreen && (
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
        )}
        <div
          className={classNames('okp4-nemeton-web-header-menu-links', {
            open: menuOpen
          })}
        >
          {menu.map((menuItem: Route, index: number) => (
            <div
              className="okp4-nemeton-web-header-menu-item"
              key={menuItem.name}
              onClick={handleClick(menuItem)}
            >
              {isMobileScreen && index >= 0 && separatorElement}
              {menuItem.hash ? (
                <Link href={`${menuItem.path}${menuItem.hash}`}>
                  <h2
                    className={classNames('link-label', {
                      active:
                        (routerPath === menuItem.path ||
                          routerPath?.substring(routerPath.lastIndexOf('#')) === menuItem.hash) &&
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
              {isMobileScreen &&
                (selectedMenu?.name === menuItem.name && menuItem.subMenu ? (
                  <SubMenuMobile routerPath={routerPath} selectedMenu={selectedMenu} />
                ) : (
                  index === menu.length - 1 &&
                  selectedMenu?.name !== menuItem.name &&
                  separatorElement
                ))}
            </div>
          ))}
        </div>
      </div>
      {!isMobileScreen && <SubMenuDesktop routerPath={routerPath} selectedMenu={selectedMenu} />}
    </React.Fragment>
  )
}

export const Header: React.FC = () => {
  const [routerPath, setRouterPath] = useState<string | null>(null)
  const isLargeScreen = useMediaType('(min-width: 1441px)')
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
      <Menu routerPath={routerPath} />
    </div>
  )
}
