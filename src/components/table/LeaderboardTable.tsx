import { Skeleton } from '@mui/material'
import classNames from 'classnames'
import Image from 'next/image'
import hatDruidAnimationData from '../../../public/json/hat-druid.json'
import React, { useCallback, useMemo, useState } from 'react'
import { useMediaType } from '../../hook/useMediaType'
import type { DruidDescriptor } from '../../entity/druid'
import { Search } from '../search/Search'
import { Snackbar } from '../snackbar/Snackbar'
import { LottieLoader } from '../loader/LottieLoader'
import Link from 'next/link'
import { Copy } from '../copy/Copy'

export type Column = {
  label: string
  renderCell: (druid: DruidDescriptor) => JSX.Element
  width?: string
  hidden?: boolean
}

export type LeaderboardTableProps = {
  data: DruidDescriptor[]
  onSearchChange: (value: string) => void
  loading: boolean
  loadingMore?: boolean
}

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({
  data,
  onSearchChange,
  loading,
  loadingMore
}) => {
  const [address, setAddress] = useState<string>('')
  const isMobileScreen = useMediaType('(max-width: 580px)')

  const handleCopyAddress = useCallback(
    (address: string) => {
      setAddress(address)
    },
    [setAddress]
  )

  const columns: Column[] = useMemo(
    () =>
      [
        {
          label: 'Rank',
          renderCell: (druid: DruidDescriptor) => <span>{druid.rank.toLocaleString()}</span>,
          width: isMobileScreen ? '18%' : '9%'
        },
        {
          label: 'Name',
          renderCell: (druid: DruidDescriptor) => (
            <Link href={`/druid/${druid.valoper}#profile`}>
              <Image
                alt="validator-avatar"
                className="avatar-bg"
                height={21}
                src={druid.identity.avatar}
                width={21}
              />
              <span>{druid.identity.name}</span>
            </Link>
          ),
          width: isMobileScreen ? '56%' : '29%'
        },
        {
          label: 'Address',
          width: '25%',
          renderCell: (druid: DruidDescriptor) => (
            <div className="flex-cell">
              <span>{druid.valoper}</span>
              <Copy item={druid.valoper} onCopied={handleCopyAddress} />
            </div>
          ),
          hidden: isMobileScreen
        },
        {
          label: 'Completed tasks',
          width: '22%',
          renderCell: (druid: DruidDescriptor) => (
            <span>{`${druid.tasks.completed.toString()}/${druid.tasks.started.toString()}`}</span>
          ),
          hidden: isMobileScreen
        },
        {
          label: 'Total points',
          width: isMobileScreen ? '26%' : '15%',
          renderCell: (druid: DruidDescriptor) => <span>{druid.points.toLocaleString()}</span>
        }
      ].filter(column => !column.hidden),
    [handleCopyAddress, isMobileScreen]
  )

  const handleSearchChange = useCallback(
    (value: string) => {
      onSearchChange(value)
    },
    [onSearchChange]
  )

  const handleSnackbarClose = useCallback(() => {
    setAddress('')
  }, [setAddress])

  const loadingRows = useMemo(
    () =>
      [...Array(4)].map((_elt, index) => (
        <tr key={index}>
          {columns.map((_column, index) => (
            <td key={index}>
              <Skeleton
                height="35px"
                sx={{ bgcolor: 'rgba(255, 255, 255, 0.13)', borderRadius: '10px' }}
                variant="rectangular"
                width="80%"
              />
            </td>
          ))}
        </tr>
      )),
    [columns]
  )

  const fetchMoreLoader = useMemo(
    () => (
      <>
        <tr>
          <td colSpan={5} style={{ textAlign: 'center', paddingTop: '20px' }}>
            <LottieLoader animationData={hatDruidAnimationData} width={isMobileScreen ? 80 : 130} />
          </td>
        </tr>
        <tr>
          <td colSpan={5} style={{ textAlign: 'center', fontSize: '14px' }}>
            Loading more druids...
          </td>
        </tr>
      </>
    ),
    [isMobileScreen]
  )

  return (
    <>
      <div className="okp4-nemeton-web-leaderboard-table-main">
        <div className="okp4-nemeton-web-leaderboard-table-header-container">
          <h2>RANKING</h2>
          <Search onChange={handleSearchChange} />
        </div>
        <div className="okp4-nemeton-web-leaderboard-table-content-container">
          <table>
            <thead>
              <tr>
                {columns.map(({ label, width }, index) => (
                  <th key={index} {...(width && { style: { width } })}>
                    <span>{label}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && !loadingMore && loadingRows}
              {!loading && data.length > 0 && (
                <React.Fragment>
                  {data.map((row, index) => {
                    const podiumClassname = classNames({
                      gold: row.rank === 1,
                      silver: row.rank === 2,
                      bronze: row.rank === 3
                    })
                    return (
                      <tr className={podiumClassname} key={index}>
                        {columns.map((column, index) => {
                          const { renderCell } = column
                          return <td key={index}>{renderCell(row)}</td>
                        })}
                        {!isMobileScreen && index <= 2 && (
                          <td
                            className={`okp4-nemeton-web-leaderboard-table-podium-logo ${podiumClassname}`}
                          />
                        )}
                      </tr>
                    )
                  })}
                  {loadingMore && fetchMoreLoader}
                </React.Fragment>
              )}
              {!data.length && !loading && (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center' }}>
                    No druids found...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Snackbar
        isOpen={!!address}
        message="Address copied to clipboard!"
        onClose={handleSnackbarClose}
        severityLevel="success"
      />
    </>
  )
}
