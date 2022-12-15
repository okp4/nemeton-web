import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import { GoBackButton } from '../../components/button/goBackButton'
import { Head } from '../../components/head/Head'
import { Footer } from '../../components/layout/footer/Footer'
import { Header } from '../../components/layout/header/Header'
import { useQValidatorQuery } from '../../graphql/generated/query/types'
import { config } from '../../lib/config'
import type { Config } from '../../types/config.type'
import client from '../../graphql/apolloClient'
import { Profile } from '../../components/profile/profile'
import { Druid } from '../../entity/druid'
import { Snackbar } from '../../components/snackbar/Snackbar'
import { TasksSummary } from '../../components/tasks/TasksSummary'

export type DruidProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Druid: NextPage<DruidProps> = props => {
  const [druid, setDruid] = useState<Druid | null>(null)
  const [address, setAddress] = useState<string>('')

  const router = useRouter()
  const { urls } = props
  const { graphqlUri } = urls
  const { id } = router.query
  const gqlClient = useMemo(() => client(graphqlUri), [graphqlUri])

  useQValidatorQuery({
    variables: { valoper: id as string },
    skip: !id,
    client: gqlClient,
    fetchPolicy: 'network-only',
    onCompleted: data =>
      data.validator &&
      setDruid({
        profile: {
          identity: {
            name: data.validator.moniker,
            avatar: data.validator.identity?.picture?.href ?? '/image/avatar-fallback.webp'
          },
          valoper: data.validator.valoper,
          website: data.validator.website ?? null,
          twitter: data.validator.twitter ?? null,
          explorer: null,
          points: data.validator.points
        },

        tasksPerPhase: data.validator.tasks.perPhase.map(perPhase => ({
          phase: {
            number: perPhase.phase.number,
            started: perPhase.phase.started,
            tasks: perPhase.tasks.map(t => ({
              name: t.task.name,
              completed: t.completed,
              points: t.earnedPoints
            })),
            points: perPhase.points
          }
        }))
      })
  })

  const handleCopyAddress = useCallback(
    (address: string) => {
      setAddress(address)
    },
    [setAddress]
  )

  const handleSnackbarClose = useCallback(() => {
    setAddress('')
  }, [setAddress])

  return (
    <>
      <div className="okp4-nemeton-web-page-main">
        <Head {...props} />
        <main>
          <Header />
          <div className="okp4-nemeton-web-page-content-container" id="profile">
            <div className="okp4-nemeton-web-page-druid-main-container">
              <GoBackButton />
              {druid && (
                <>
                  <Profile druidProfile={druid.profile} onValoperCopied={handleCopyAddress} />
                  <TasksSummary points={druid.profile.points} tasksPerPhase={druid.tasksPerPhase} />
                </>
              )}
            </div>
          </div>
          <Footer urls={urls} />
        </main>
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

export const getServerSideProps: GetServerSideProps<DruidProps> = async () => ({
  props: {
    ...config
  }
})

export default Druid
