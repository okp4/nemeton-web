import React, { useMemo } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import moment from 'moment'
import Phases from '@/data/phase'
import { Accordion } from '@/components/index'
import { useAccordion } from '@/hook/useAccordion'
import { ContentBlock, taskContentIcon } from '../validators/tasks'
import { config } from '@/lib/config'
import type { Config } from '@/types/config.type'
import type { TaskContent } from '@/data/phase/dto.type'

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
            {challenges.map(({ group: challengePart, challengeDescription, tasks }) => (
              <div key={challengePart}>
                <h2>{challengePart}</h2>
                {challengeDescription}
                {tasks.map(({ taskName, taskContent, taskDuration }, index) => {
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
                              ({ id, title, contentDescription }: TaskContent): JSX.Element => (
                                <div key={id}>
                                  <ContentBlock
                                    description={contentDescription}
                                    icon={taskContentIcon(id)}
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
              </div>
            ))}
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
