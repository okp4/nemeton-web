import classNames from 'classnames'
import Image from 'next/image'
import React, { useCallback, useMemo, useState } from 'react'
import { Search } from '../search/Search'
import { Snackbar } from '../snackbar/Snackbar'

export type Column = {
  label: string
  renderCell: (data: Data) => JSX.Element
  width?: string
}

export type Data = {
  rank: number
  identity: {
    avatar: string
    name: string
  }
  address: string
  tasks: {
    completed: number
    total: number
  }
  points: number
}

const data: Data[] = [
  {
    rank: 1,
    identity: {
      avatar: '/image/avatar-fallback.webp',
      name: 'christophe camel'
    },
    address: 'okp4valoper12484t0zw9ztqvepm6pw774p6k4ye4jqr2q0nue',
    tasks: {
      completed: 3,
      total: 3
    },
    points: 8907
  },
  {
    rank: 2,
    identity: {
      avatar: '/image/avatar-fallback.webp',
      name: 'fred vilcot'
    },
    address: 'okp4valoper13484t0zw9ztqvepb6pw884p6k4ya4jqr2q0pue',
    tasks: {
      completed: 2,
      total: 3
    },
    points: 7347
  },
  {
    rank: 3,
    identity: {
      avatar: '/image/beltaine-medium.webp',
      name: 'arnaud mimart'
    },
    address: 'okp4valoper1cgyf7qy8pdrwaj803lywwul0l6ykpdthashzd2',
    tasks: {
      completed: 2,
      total: 3
    },
    points: 5821
  },
  {
    rank: 4,
    identity: {
      avatar: '/image/sidh-medium.webp',
      name: 'homer simpson'
    },
    address: 'okp4valoper1dxv5dlg4vvmux00h0v7vy8d3mflju93yq4hhfh',
    tasks: {
      completed: 1,
      total: 3
    },
    points: 4377
  },
  {
    rank: 5,
    identity: {
      avatar: '/image/avatar-fallback.webp',
      name: 'jean bonbeurre'
    },
    address: 'okp4valoper1etx55kw7tkmnjqz0k0mups4ewxlr324tdwqwss',
    tasks: {
      completed: 1,
      total: 3
    },
    points: 2090
  }
]

export const Table: React.FC = () => {
  const [address, setAddress] = useState<string>('')

  const handleCopyAddress = useCallback(
    (address: string) => () => {
      navigator.clipboard.writeText(address)
      setAddress(address)
    },
    [setAddress]
  )

  const columns: Column[] = useMemo(
    () => [
      {
        label: 'Rank',
        renderCell: (data: Data) => <span>{data.rank.toLocaleString()}</span>,
        width: '9%'
      },
      {
        label: 'Name',
        renderCell: (data: Data) => (
          <div className="flex-cell">
            <Image
              alt="validator-avatar"
              className="avatar-bg"
              height={21}
              src={data.identity.avatar}
              width={21}
            />
            <span>{data.identity.name}</span>
          </div>
        ),
        width: '29%'
      },
      {
        label: 'Address',
        width: '25%',
        renderCell: (data: Data) => (
          <div className="flex-cell">
            <span>{data.address}</span>
            <span
              className="okp4-nemeton-web-table-copy-logo"
              onClick={handleCopyAddress(data.address)}
              title="Copy on clipboard"
            />
          </div>
        )
      },
      {
        label: 'Completed tasks',
        width: '22%',
        renderCell: (data: Data) => (
          <span>{`${data.tasks.completed.toString()}/${data.tasks.total.toString()}`}</span>
        )
      },
      {
        label: 'Total points',
        width: '15%',
        renderCell: (data: Data) => <span>{data.points.toLocaleString()}</span>
      }
    ],
    [handleCopyAddress]
  )

  const handleSearchChange = useCallback((value: string) => {
    console.log(value)
  }, [])

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
                {columns.map(({ label, width }, index) => (
                  <th key={index} {...(width && { style: { width } })}>
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
                      const { renderCell } = column
                      return <td key={index}>{renderCell(row)}</td>
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
