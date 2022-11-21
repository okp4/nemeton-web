import classNames from 'classnames'
import React, { useCallback, useState } from 'react'
import { Search } from '../search/Search'
import { Snackbar } from '../snackbar/Snackbar'

export type Column = {
  id: 'rank' | 'name' | 'address' | 'tasks' | 'points'
  label: string
  width?: string
}

export type Data = {
  rank: number
  name: string
  address: string
  tasks: string
  points: number
}

const columns: Column[] = [
  {
    id: 'rank',
    label: 'Rank',
    width: '9%'
  },
  {
    id: 'name',
    label: 'Name',
    width: '29%'
  },
  {
    id: 'address',
    label: 'Address',
    width: '25%'
  },
  {
    id: 'tasks',
    label: 'Completed tasks',
    width: '22%'
  },
  {
    id: 'points',
    label: 'Total points',
    width: '15%'
  }
]

const data: Data[] = [
  {
    rank: 1,
    name: 'christophe camel',
    address: 'okp4valoper12484t0zw9ztqvepm6pw774p6k4ye4jqr2q0nue',
    tasks: '3/3',
    points: 8907
  },
  {
    rank: 2,
    name: 'fred vilcot',
    address: 'okp4valoper13484t0zw9ztqvepb6pw884p6k4ya4jqr2q0nue',
    tasks: '2/3',
    points: 7347
  },
  {
    rank: 3,
    name: 'arnaud mimart',
    address: 'okp4valoper1cgyf7qy8pdrwaj803lywwul0l6ykpdthashzd2',
    tasks: '2/3',
    points: 5821
  },
  {
    rank: 4,
    name: 'homer simpson',
    address: 'okp4valoper1dxv5dlg4vvmux00h0v7vy8d3mflju93yq4hhfh',
    tasks: '1/3',
    points: 4377
  },
  {
    rank: 5,
    name: 'jean bonbeurre',
    address: 'okp4valoper1etx55kw7tkmnjqz0k0mups4ewxlr324tdwqwss',
    tasks: '1/3',
    points: 2090
  }
]

export const Table: React.FC = () => {
  const [address, setAddress] = useState<string>('')

  const handleSearchChange = useCallback((value: string) => {
    console.log(value)
  }, [])

  const handleCopyAddress = useCallback(
    (address: string) => () => {
      navigator.clipboard.writeText(address)
      setAddress(address)
    },
    [setAddress]
  )

  const handleSnackbarClose = useCallback(() => {
    setAddress('')
  }, [setAddress])

  return (
    <>
      <div className="okp4-nemeton-web-table-main">
        <div className="okp4-nemeton-web-table-header-container">
          <h2>RANKING</h2>
          <Search onChange={handleSearchChange} />
        </div>
        <div className="okp4-nemeton-web-table-content-container">
          <table>
            <thead>
              <tr>
                {columns.map(({ id, label, width }) => (
                  <th key={id} {...(width && { style: { width } })}>
                    <span>{label}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => {
                const podiumClassname = classNames({
                  gold: index === 0,
                  silver: index === 1,
                  bronze: index === 2
                })
                return (
                  <tr className={podiumClassname} key={index}>
                    {columns.map((column, index) => {
                      const { id } = column
                      const value = row[id as keyof Data]
                      const isAddress = id === 'address'
                      return (
                        <td key={index}>
                          <span>{value}</span>
                          {isAddress && (
                            <span
                              className="okp4-nemeton-web-table-copy-logo"
                              onClick={handleCopyAddress(value as string)}
                              title="Copy on clipboard"
                            />
                          )}
                        </td>
                      )
                    })}
                    {index <= 2 && (
                      <td className={`okp4-nemeton-web-table-podium-logo ${podiumClassname}`} />
                    )}
                  </tr>
                )
              })}
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
