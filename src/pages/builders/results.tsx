import React, { useMemo, useState, useCallback } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import type { Config } from '@/types/config.type'
import { config } from '@/lib/config'
import { BuildersLeaderboardTable } from '@/components/index'
import { buildersData } from '@/data/builder/builder'
import { mapBuilderDTOtoBuilderDescriptor } from '@/data/builder/mapper'

export type ResultsProps = Pick<Config, 'urls'>

const Results: NextPage = () => {
  const [query, setQuery] = useState<string>('')
  const builders = useMemo(
    () =>
      buildersData
        .map(mapBuilderDTOtoBuilderDescriptor)
        .filter(
          row =>
            row.valoper.toLowerCase().includes(query.toLowerCase()) ||
            row.earnings.poap.find(item => item.toLowerCase().includes(query.toLowerCase()))
        ),
    [query]
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
              <BuildersLeaderboardTable data={builders} onSearchChange={handleSearchChange} />
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
