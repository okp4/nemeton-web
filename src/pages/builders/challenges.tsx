import React, { useState, useMemo } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { config } from '@/lib/config'
import Phases from '@/data/phase'
import { Head } from '@/components/head/Head'
import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import { CategoryTab } from '@/components/tab/CategoryTab'
import type { Config } from '@/types/config.type'
import type { ChallengeContent } from '@/data/phase/dto.type'

export type ChallengesProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls' | 'phases'>

type CategoryChallengesProps = {
  challengeContent: ChallengeContent[]
}

const CategoryChallenges: React.FC<CategoryChallengesProps> = ({
  challengeContent
}): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(challengeContent[0].challengeId)
  const [selectedCategory, setSelectedCategory] = useState<number>(0)

  const handleTabClick = (challengeId: number, index: number) => () => {
    setActiveTab(challengeId)
    setSelectedCategory(index)
  }

  return (
    <div>
      <ul className="okp4-nemeton-web-page-challenges-categorys-tabs">
        {challengeContent.map(({ challengeCategory, challengeId }, index) => (
          <CategoryTab
            challengeCategory={challengeCategory}
            isActive={activeTab === challengeId}
            key={challengeId}
            onToggle={handleTabClick(challengeId, index)}
          />
        ))}
      </ul>
      <div className="okp4-nemeton-web-page-challenges-categorys-content">
        {challengeContent[selectedCategory].challenges.map(({ description }, index) => (
          <div key={index}>{description}</div>
        ))}
      </div>
    </div>
  )
}

const Challenges: NextPage<ChallengesProps> = props => {
  const { urls, phases } = props
  const challenges = useMemo(
    () => Phases(phases)[Phases(phases).length - 1].challenges ?? [],
    [phases]
  )

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-page-content-container challenges" id="challenges">
          <div className="okp4-nemeton-web-page-challenges-container">
            <div className="okp4-nemeton-web-page-challenges-content">
              <h1>Challenges</h1>
              <div className="okp4-nemeton-web-page-divider" />
              {challenges.map(({ challengePart, challengeDescription, challengeContent }) => (
                <div key={challengePart}>
                  <h2>{challengePart}</h2>
                  {challengeDescription}
                  <CategoryChallenges challengeContent={challengeContent} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<ChallengesProps> = async () => ({
  props: {
    ...config
  }
})

export default Challenges
