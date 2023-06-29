import React, { useMemo, useState, useCallback } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import type { Config } from '@/types/config.type'
import { config } from '@/lib/config'
import Phases from '@/data/phase'
import { ResultsTable } from '@/components/index'

export type ResultsProps = Pick<Config, 'urls' | 'phases'>

const Results: NextPage<ResultsProps> = props => {
  const { phases } = props
  const [query, setQuery] = useState<string>('')
  const results = useMemo(
    () =>
      Phases(phases)[Phases(phases).length - 1].results?.filter(
        row =>
          row.valoper.toLowerCase().includes(query.toLowerCase()) ||
          row.poap.find(item => item.toLowerCase().includes(query.toLowerCase()))
      ),
    [phases, query]
  )

  const handleSearchChange = useCallback((value: string): void => setQuery(value), [])

  return (
    <div className="okp4-nemeton-web-page-main">
      <div className="okp4-nemeton-web-page-content-container" id="results">
        <div className="okp4-nemeton-web-page-results-container">
          <h1>Results</h1>
          <div className="okp4-nemeton-web-page-divider" />
          <p>Here you can consult the marks allocated to builders for the Samhain challenges.</p>
          <div className="okp4-nemeton-web-page-results-main-container">
            <div className="okp4-nemeton-web-page-results-main-wrapper">
              <ResultsTable
                onSearchChange={handleSearchChange}
                results={results}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<ResultsProps> = async () => ({
  props: {
    ...config
  }
})

export default Results
