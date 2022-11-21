import React, { useCallback } from 'react'

type SearchProps = {
  onChange: (value: string) => void
}

export const Search: React.FC<SearchProps> = ({ onChange }) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      onChange(value)
    },
    [onChange]
  )
  return (
    <div className="okp4-nemeton-web-search-main">
      <input onChange={handleChange} placeholder="Search" type={'text'} />
    </div>
  )
}
