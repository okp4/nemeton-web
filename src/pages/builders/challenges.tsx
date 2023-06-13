import React, { useMemo } from 'react'
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
    () => Phases(phases)[Phases(phases).length - 1].challenges ?? [],
    [phases]
  )
  const [activeIndex, setActiveIndex] = useAccordion()

  const handleClick = (index: number) => () => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)
  }

  return (
    <div className="okp4-nemeton-web-page-main">
      <div className="okp4-nemeton-web-page-content-container challenges" id="challenges">
        <div className="okp4-nemeton-web-page-challenges-container">
          <div className="okp4-nemeton-web-page-challenges-content">
            <h1>Challenges</h1>
            <div className="okp4-nemeton-web-page-divider" />
            {challenges.map(
              ({ challengeName, challengeDescription, challengeTasks, challengeStatus }) => (
                <div key={challengeName}>
                  {challengeStatus === 'coming' ? (
                    <h2>Coming soon</h2>
                  ) : (
                    <>
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
                        const active = activeIndex === index

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
                              onToggle={handleClick(index)}
                              title={title}
                              variant="tertiary"
                            />
                          </div>
                        )
                      })}
                    </>
                  )}
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
