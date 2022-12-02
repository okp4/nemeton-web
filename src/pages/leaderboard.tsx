import type { GetServerSideProps, NextPage } from 'next'
import InfiniteScroll from 'react-infinite-scroll-component'
import type { BaseCardProps } from '../components/card/BaseCard'
import { BaseCard } from '../components/card/BaseCard'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import type { PodiumStep } from '../components/podium/Podium'
import { Podium } from '../components/podium/Podium'
import { config } from '../lib/config'
import type { Config } from '../types/config.type'
import { Table } from '../components/table/Table'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import type { Druid, PodiumDruid } from '../entity/druid'
import type { Phase } from '../entity/phase'
import {
  useQBoardPodiumQuery,
  useQBoardQuery,
  useQPhasesQuery,
  useQValidatorCountQuery
} from '../graphql/generated/query/types'
import { Snackbar } from '../components/snackbar/Snackbar'
import { Countdown } from '../components/countdown/Countdown'
import {
  mapValidatorEdgeDTOToDruid,
  mapPodiumValidatorEdgeDTOToPodiumDruid
} from '../graphql/dto/mapper'
import client from '../graphql/apolloClient'

export type LeaderboardProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Leaderboard: NextPage<LeaderboardProps> = props => {
  const [druids, setDruids] = useState<Druid[]>([])
  const [podium, setPodium] = useState<PodiumDruid[]>([])
  const [druidCount, setDruidCount] = useState<number>(0)
  const [activePhase, setActivePhase] = useState<Phase | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSearchMode, setSearchMode] = useState<boolean>(false)
  const { urls } = props
  const { typeformUrl, graphqlUri } = urls
  const gqlClient = useMemo(() => client(graphqlUri), [graphqlUri])

  const { error: boardPodiumError } = useQBoardPodiumQuery({
    fetchPolicy: 'network-only',
    variables: { first: 3 },
    client: gqlClient,
    onCompleted: data => setPodium(data.board.edges.map(mapPodiumValidatorEdgeDTOToPodiumDruid))
  })

  const { error: validatorCountError, loading: validatorCountLoading } = useQValidatorCountQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    client: gqlClient,
    onCompleted: data => setDruidCount(data.validatorCount)
  })

  const {
    data: boardData,
    error: boardError,
    loading: boardLoading,
    refetch: boardReftech,
    variables
  } = useQBoardQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    client: gqlClient,
    onCompleted: data => {
      const newData = data.board.edges.map(mapValidatorEdgeDTOToDruid)
      isSearchMode && !variables?.after
        ? setDruids(newData)
        : setDruids(prev => [...prev, ...newData])
    }
  })

  const { error: phaseError, loading: phaseLoading } = useQPhasesQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    client: gqlClient,
    onCompleted: data => setActivePhase(data.phases.current ?? null)
  })

  const resetErrorMessage = useCallback(() => {
    setErrorMessage(null)
  }, [setErrorMessage])

  useEffect(() => {
    if (validatorCountError || phaseError || boardError || boardPodiumError)
      setErrorMessage('Oops... Druids could not be properly retrieved... Please try again later.')
  }, [validatorCountError, phaseError, boardError, boardPodiumError])

  const handleSearchChange = useCallback(
    (value: string): void => {
      if (value.length >= 2) {
        setSearchMode(true)
        boardReftech({ search: value, after: null })
      } else if (!value.length) {
        boardReftech({ search: value, after: null }).then(() => setSearchMode(false))
      }
    },
    [boardReftech]
  )

  const fetchMoreDruids = useCallback(() => {
    const lastCursor = boardData?.board.pageInfo.endCursor
    !boardLoading && boardReftech({ after: lastCursor })
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  }, [boardData?.board?.pageInfo.endCursor, boardLoading, boardReftech])

  const summaryCards: Array<Omit<BaseCardProps, 'loading'> | null> = useMemo(
    () => [
      {
        ...(druidCount && {
          title: (
            <h1 className="okp4-nemeton-web-page-leaderboard-summary-card-title">{druidCount}</h1>
          )
        }),
        description: (
          <p className="okp4-nemeton-web-page-leaderboard-summary-card-description">
            {!druidCount ? 'Druids are getting ready to participate...' : 'Active druids'}
          </p>
        ),
        disabled: !druidCount,
        disabledBackgroundImageUrl: '/icons/druid-staff.svg'
      },
      activePhase && {
        title: (
          <div className="okp4-nemeton-web-page-leaderboard-summary-card-title-container">
            <h2 className="okp4-nemeton-web-page-leaderboard-summary-card-title">{`Phase ${activePhase.number}`}</h2>
            <h1 className="okp4-nemeton-web-page-leaderboard-summary-card-title uppercase">
              {activePhase.name}
            </h1>
          </div>
        ),
        description: (
          <p className="okp4-nemeton-web-page-leaderboard-summary-card-description">
            Current phase name
          </p>
        ),
        backgroundImageUrl: `/image/${activePhase.name.toLowerCase()}-medium.webp`
      },
      {
        ...(activePhase && {
          title: (
            <div className="okp4-nemeton-web-page-leaderboard-summary-card-title">
              <Countdown countdownEndDate={activePhase.endDate} />
            </div>
          )
        }),
        description: (
          <p className="okp4-nemeton-web-page-leaderboard-summary-card-description">
            {activePhase
              ? 'Before the end of the current phase'
              : 'Imminent take-off of the phase.'}
          </p>
        ),
        disabled: !activePhase,
        disabledBackgroundImageUrl: '/icons/flame.svg'
      }
    ],
    [activePhase, druidCount]
  )

  const podiumSteps: PodiumStep[] = useMemo(
    () =>
      podium.map(
        (druid: PodiumDruid): PodiumStep => ({
          rank: druid.rank,
          legend: druid.identity.name,
          backgroundImageUrl: druid.identity.avatar
        })
      ),
    [podium]
  )

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header typeformUrl={typeformUrl} />
        <div className="okp4-nemeton-web-page-content-container" id="leaderboard">
          <h1>Leaderboard</h1>
          <div className="okp4-nemeton-web-page-divider" />
          <p className="center">Welcome to the Nemeton Leaderboard!</p>
          <div className="okp4-nemeton-web-page-leaderboard-summary-container">
            {validatorCountLoading || phaseLoading
              ? [...Array(3)].map((_elt, index) => <BaseCard key={index} loading />)
              : summaryCards
                  .filter(Boolean)
                  .map((card, index) => (
                    <BaseCard
                      backgroundImageUrl={card?.backgroundImageUrl}
                      description={card?.description}
                      disabled={card?.disabled}
                      disabledBackgroundImageUrl={card?.disabledBackgroundImageUrl}
                      key={index}
                      title={card?.title}
                    />
                  ))}
          </div>
          <div className="okp4-nemeton-web-page-leaderboard-main-container">
            <div className="okp4-nemeton-web-page-leaderboard-main-wrapper">
              <p className="okp4-nemeton-web-page-leaderboard-main-description">
                Here you can check the points earned by all the druids. Complete more tasks to
                become the leader!
              </p>
              {podium.length > 0 && <Podium steps={podiumSteps} />}
              <InfiniteScroll
                dataLength={druids.length}
                hasMore={!boardLoading && !!boardData?.board.pageInfo.hasNextPage}
                loader={null}
                next={fetchMoreDruids}
                scrollThreshold={0.91}
                style={{ overflow: 'unset' }}
              >
                <Table
                  data={druids}
                  loading={boardLoading && !variables?.after}
                  loadingMore={boardLoading && !!variables?.after}
                  onSearchChange={handleSearchChange}
                />
              </InfiniteScroll>
            </div>
          </div>
        </div>
        <Footer urls={urls} />
      </main>
      <Snackbar
        isOpen={!!errorMessage}
        message={errorMessage ?? ''}
        onClose={resetErrorMessage}
        severityLevel="error"
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<LeaderboardProps> = async () => ({
  props: {
    ...config
  }
})

export default Leaderboard
