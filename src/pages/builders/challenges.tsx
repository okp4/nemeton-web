import React, { useMemo, useCallback } from 'react'
import Link from 'next/link'
import type { GetServerSideProps, NextPage } from 'next'
import moment from 'moment'
import Phases from '@/data/phase'
import { Accordion, ContentBlock, TaskContentIcon } from '@/components/index'
import { useAccordion } from '@/hook/useAccordion'
import { config } from '@/lib/config'
import type { Config } from '@/types/config.type'
import type { ChallengeTaskContent } from '@/data/phase/dto.type'

export type ChallengesProps = Pick<Config, 'urls' | 'phases'>

const Challenges: NextPage<ChallengesProps> = props => {
  const { phases } = props
  const challenges = useMemo(
    () => Phases(phases)[Phases(phases).length - 1].challenges?.reverse() ?? [],
    [phases]
  )
  const [activeTask, setActiveTask] = useAccordion()

  const handleClick = useCallback(
    (taskName: string) => () => setActiveTask(activeTask === taskName ? null : taskName),
    [activeTask, setActiveTask]
  )

  return (
    <div className="okp4-nemeton-web-page-main">
      <div className="okp4-nemeton-web-page-content-container challenges" id="challenges">
        <div className="okp4-nemeton-web-page-challenges-container">
          <div className="okp4-nemeton-web-page-challenges-content">
            <h1>Challenges</h1>
            <div className="okp4-nemeton-web-page-divider" />
            <p>
              Builders: We heard your concerns, Dagda challenges are extended to September 30!
              <br /> You are a new druid ? It is wise to begin with the{' '}
              <Link href="/builders/challenges#tlachtga">Tlachtga challenges.</Link>
            </p>
            {challenges.map(
              ({
                challengeId,
                challengeName,
                challengeDescription,
                challengeTasks,
                challengeStatus
              }) => (
                <div id={challengeId} key={challengeName}>
                  <h2>
                    {challengeName}
                    {challengeStatus === 'closed' && <span> (closed)</span>}
                  </h2>

                  {challengeDescription}
                  {challengeTasks.map(({ taskName, taskContent, taskDuration }, index) => {
                    const { from, to } = taskDuration
                    const title = (
                      <div className="okp4-nemeton-web-challenges-accordion-title-wrapper">
                        <h3>{taskName}</h3>
                        <div className="okp4-nemeton-web-challenges-accordion-duration-wrapper">
                          <p>{`${moment(from).utc().format('MMMM Do H:mm ')} UTC -`}</p>
                          <p>{`${moment(to).utc().format('MMMM Do H:mm ')} UTC`}</p>
                        </div>
                      </div>
                    )

                    const active = activeTask === taskName

                    return (
                      <div key={index}>
                        <Accordion
                          content={
                            <>
                              {taskContent.map(
                                ({
                                  id,
                                  title,
                                  contentDescription
                                }: ChallengeTaskContent): JSX.Element => (
                                  <div key={title}>
                                    <ContentBlock
                                      description={contentDescription}
                                      icon={<TaskContentIcon id={id} />}
                                      title={title}
                                    />
                                  </div>
                                )
                              )}
                            </>
                          }
                          iconProps={{ width: 21, height: 13 }}
                          isExpanded={active}
                          onToggle={handleClick(taskName)}
                          title={title}
                          variant="tertiary"
                        />
                      </div>
                    )
                  })}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<ChallengesProps> = async () => ({
  props: {
    ...config
  }
})

export default Challenges
