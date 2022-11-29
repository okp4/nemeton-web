import React, { useCallback } from 'react'

type SearchProps = {
  onChange: (value: string) => void
  disabled?: boolean
}

export const Search: React.FC<SearchProps> = ({ onChange, disabled }) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      onChange(value)
    },
    [onChange]
  )
  return (
    <div className="okp4-nemeton-web-search-main">
      <input disabled={disabled} onChange={handleChange} placeholder="Search" type={'text'} />
    </div>
  )
}
