import React, { useCallback, useState, useMemo } from 'react'
import classNames from 'classnames'
import Snackbar from '@/components/snackbar/Snackbar'
import { Search } from '@/components/search/Search'
import { Copy } from '@/components/copy/Copy'
import { useMediaType } from '@/hook/useMediaType'
import type { Column } from '@/components/table/table.type'
import type { BuilderDescriptor, BuildersDescriptor } from '@/entity/builder'

export type LeaderboardTable = {
  data: BuildersDescriptor
  onSearchChange: (value: string) => void
}

const LeaderboardTable: React.FC<LeaderboardTable> = ({ data, onSearchChange }) => {
  const [address, setAddress] = useState<string>('')
  const isMobileScreen = useMediaType('(max-width: 580px)')

  const handleCopyAddress = useCallback(
    (address: string) => {
      setAddress(address)
    },
    [setAddress]
  )

  const columns: Column<BuilderDescriptor>[] = useMemo(
    () =>
      [
        {
          label: 'Rank',
          renderCell: (druid: BuilderDescriptor) => <span>{druid.rank.toLocaleString()}</span>,
          width: isMobileScreen ? '18%' : '10%'
        },
        {
          label: 'Address',
          renderCell: (druid: BuilderDescriptor) => (
            <div className="flex-cell">
              <span>{druid.valoper}</span>
              <Copy item={druid.valoper} onCopied={handleCopyAddress} />
            </div>
          ),
          width: isMobileScreen ? '50%' : '25%'
        },
        {
          label: 'Awarded POAP',
          renderCell: (druid: BuilderDescriptor) => (
            <ul>
              {druid.earnings.poap.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ),
          width: '35%',
          hidden: isMobileScreen
        },
        {
          label: 'Awarded know',
          renderCell: (druid: BuilderDescriptor) => <span>{druid.earnings.know}</span>,
          width: isMobileScreen ? '32%' : '30%'
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

  return (
    <>
      <div className="okp4-nemeton-web-results-table-main ">
        <div className="okp4-nemeton-web-results-table-header-container">
          <h2>RANKING</h2>
          <Search onChange={handleSearchChange} />
        </div>
        <div className="okp4-nemeton-web-results-table-content-container">
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
              {data.length > 0 && (
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
                        {!isMobileScreen && (
                          <td
                            className={`okp4-nemeton-web-results-table-podium-logo ${podiumClassname}`}
                          />
                        )}
                      </tr>
                    )
                  })}
                </React.Fragment>
              )}
              {!data.length && (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center' }}>
                    No results found...
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

export default LeaderboardTable
