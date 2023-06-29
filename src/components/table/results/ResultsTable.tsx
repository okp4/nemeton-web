import React, { useCallback, useState, useMemo } from 'react'
import classNames from 'classnames'
import Snackbar from '@/components/snackbar/Snackbar'
import { Search } from '@/components/search/Search'
import { Copy } from '@/components/copy/Copy'
import { useMediaType } from '@/hook/useMediaType'
import type { ResultsDTO } from '@/data/phase/dto.type'
import type { Column } from '@/components/table/table.type'

export type ResultsTableProps = {
  results?: ResultsDTO[]
  onSearchChange: (value: string) => void
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results, onSearchChange }) => {
  const [address, setAddress] = useState<string>('')
  const isMobileScreen = useMediaType('(max-width: 580px)')

  const handleCopyAddress = useCallback(
    (address: string) => {
      setAddress(address)
    },
    [setAddress]
  )

  const columns: Column<ResultsDTO>[] = useMemo(
    () =>
      [
        {
          label: 'Rank',
          renderCell: (druid: ResultsDTO) => <span>{druid.rank.toLocaleString()}</span>,
          width: isMobileScreen ? '18%' : '10%'
        },
        {
          label: 'Address',
          renderCell: (druid: ResultsDTO) => (
            <div className="flex-cell">
              <span>{druid.valoper}</span>
              <Copy item={druid.valoper} onCopied={handleCopyAddress} />
            </div>
          ),
          width: isMobileScreen ? '50%' : '25%'
        },
        {
          label: 'Awarded POAP',
          renderCell: (druid: ResultsDTO) => (
            <ul>
              {druid.poap.map(x => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          ),
          width: '35%',
          hidden: isMobileScreen
        },
        {
          label: 'Awarded know',
          renderCell: (druid: ResultsDTO) => <span>{druid.know}</span>,
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
              {results && results.length > 0 && (
                <React.Fragment>
                  {results.map((row, index) => {
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
              {!results?.length && (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center' }}>
                    No marks found...
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

export default ResultsTable
