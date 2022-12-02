import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import { config } from '../lib/config'
import type { Config } from '../types/config.type'

type FAQ = {
  part: string
  question: string
  answer: JSX.Element
}

type FAQUrls = {
  discordUrl: string
  typeformUrl: string
}

export type FAQProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const faqs = (urls: FAQUrls): FAQ[] => [
  {
    part: 'General Concepts',
    question: 'What is the Nemeton Program?',
    answer: (
      <>
        <p>
          The Nemeton Program is OKP4 incentivized testnet. Any validator can apply for the Nemeton
          program by registering on the &#39;Join the program&#39; form. Only 150 validators will be
          selected for phases 1 to 4 to become Druids, the official title for incentivized testnet
          participants. The phase 5 (by the end of the program) will open for developers to join
          though. <br />
          During every phase from 1 to 5, Druids will have the opportunity to participate in the
          following:
        </p>
        <ul>
          <li>
            <p>Node-specific tasks (to test the network)</p>
          </li>
          <li>
            <p>Community tasks (to let the world know about the network)</p>
          </li>
          <li>
            <p>Participate in challenges (to contribute to and improve the network)</p>
          </li>
        </ul>
      </>
    )
  },
  {
    part: 'General Concepts',
    question: 'Who are the druids in OKP4 ecosystem?',
    answer: (
      <p>
        The word « druid » corresponds to the name of the validators who participate in the
        incentivized testnet Nemeton Program, they are chosen by the OKP4 team.
      </p>
    )
  },
  {
    part: 'General Concepts',
    question: 'What does it mean to be an OKP4 Druid?',
    answer: (
      <p>
        The OKP4 blockchain is a Layer 1 PoS (proof of stake). To secure its network, we need a set
        of validators called druids in the context of the Nemeton Program. Druids are in charge of
        operating nodes to build, share, verify blocks to operate and secure the network. They will
        have specific tasks given to them and can choose to perform them to earn points and climb
        the leaderbord.
      </p>
    )
  },
  {
    part: 'General Concepts',
    question: 'What is staking?',
    answer: (
      <p>
        Staking is immobilizing one&#39;s crypto-asset to participate in the blockchain consensus
        mechanism. Staking rewards users who participate in the consensus (nodes) and the ones who
        delegate to nodes. <br />
        In a PoS blockchain like OKP4, validators have a determined voting power thanks to the
        number of tokens they have staked and were delegated to them.
      </p>
    )
  },
  {
    part: 'How to participate in the Nemeton Program',
    question: 'Who can participate in the Nemeton program?',
    answer: (
      <p>
        We have limited the Nemeton Incentivized Program to 150 druids. You must register via{' '}
        <a href={urls.typeformUrl} rel="noreferrer" target="_blank">
          our form
        </a>{' '}
        to be part of these 150 druids. Our team will review your application and contact you if you
        are selected to join the Nemeton Program.
      </p>
    )
  },
  {
    part: 'How to participate in the Nemeton Program',
    question: 'Why 150 druids?',
    answer: (
      <p>
        We will choose only 150 druids for various reasons such as logistics, tokenomics, technical,
        internal resources reasons, etc. <br />
        Community members who are not selected will have the opportunity to get involved and earn
        rewards during other stages of the network, so stay tuned.
      </p>
    )
  },
  {
    part: 'How to participate in the Nemeton Program',
    question: 'How do I sign up for the Nemeton program?',
    answer: (
      <p>
        To register for the Nemeton Program, complete the{' '}
        <a href={urls.typeformUrl} rel="noreferrer" target="_blank">
          registration form
        </a>
        . We will review your application and inform you if you have been accepted or not to our
        program.
      </p>
    )
  },
  {
    part: 'How to participate in the Nemeton Program',
    question: 'Do I need technical skills to participate in the Nemeton Program?',
    answer: (
      <p>
        Yes, a minimum of technical skills is required to participate in the Nemeton Program. You
        need a minimum of experience in Cosmos Validator node operations, server management, and
        maintenance.
      </p>
    )
  },
  {
    part: 'How to participate in the Nemeton Program',
    question:
      'I filled out the form but did not receive a response. Does this mean I was not accepted to participate in the testnet?',
    answer: (
      <p>
        We will inform all people who have registered for the Nemeton Program by email. Whether you
        are accepted or not, you will receive a response. The OKP4 team will select druids on Nov
        21st and the results will be announced on Nov 25th.
      </p>
    )
  },
  {
    part: 'How to participate in the Nemeton Program',
    question: 'What are the selection criteria for participating in the program?',
    answer: (
      <>
        <p>
          To participate in the Nemeton Program, we have put in place several criteria, which are:
        </p>
        <ul>
          <li>
            <p>Technical skills</p>
          </li>
          <li>
            <p>Community</p>
          </li>
          <li>
            <p>Reputation</p>
          </li>
          <li>
            <p>Background & experiences</p>
          </li>
        </ul>
        <p>
          You can apply using our application form if you meet the selection criteria. Our team will
          review your application, and you will be informed if you are accepted as a Nemeton Program
          validator (druid). <br />
          The OKP4 team will select druids on Nov 21st and the results will be announced on Nov
          25th.
        </p>
      </>
    )
  },
  {
    part: 'Phases, tasks, and rewards',
    question: 'How many phases does the Nemeton program have?',
    answer: (
      <p>
        The Nemeton Program will be divided into 5 phases over several months, allowing for testing
        different aspects of OKP4. Each phase will be punctuated by challenges and tasks to collect
        as many points as possible and compete in the leaderboard.
      </p>
    )
  },
  {
    part: 'Phases, tasks, and rewards',
    question: 'How long does the program last?',
    answer: (
      <p>
        We can&#39;t give you a definite end date right now. However, we can tell you that the first
        4 phases will last approximately one month each. Phase 5 will be longer because it is a step
        that concerns builders. We can say that the Nemeton program will last six months, more or
        less, and anyone can perform the tasks he wants.
      </p>
    )
  },
  {
    part: 'Phases, tasks, and rewards',
    question: 'What are the rewards associated with the Nemeton program',
    answer: (
      <>
        <p>During the program, there will be two types of ways to earn points:</p>
        <ul>
          <li>
            <p>Fixed points for specific tasks.</p>
          </li>
          <li>
            <p>Pools of points to divide up for more creative tasks.</p>
          </li>
        </ul>
        <p>
          Druids will be rewarded with a mix of token rewards and delegation commitment. 1% of the
          total supply of mainnet tokens will be given to Nemeton participants as a reward based on
          their participation and performance during the program.
          <br />
          Many more tokens (OKP4 foundation vesting) will be delegated to Druids who operate nodes
          on mainnet based on their participation and performance during the program.
        </p>
      </>
    )
  },
  {
    part: 'Support and contact',
    question: 'How can I get in touch with the OKP4 team?',
    answer: (
      <p>
        Please have a look at all the links at the top of this page. If you don&#39;t find the
        answers you want, please go to the{' '}
        <a href={urls.discordUrl} rel="noreferrer" target="_blank">
          OKP4 Discord server
        </a>
        .
      </p>
    )
  }
]

const Faq: NextPage<FAQProps> = props => {
  const { urls } = props
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { socialMediaUrls, docsUrls, typeformUrl } = urls
  const { discordUrl } = socialMediaUrls
  const { whitepaperUrl, nodesUrl, faqUrl } = docsUrls

  const handleClick = (index: number) => () => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)
  }
  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header typeformUrl={typeformUrl} />
        <div className="okp4-nemeton-web-page-content-container" id="faq">
          <h1>F.A.Q.</h1>
          <div>
            <p>
              You have questions about the Nemeton Program, our incentivized testnet, and did not
              find your answer here? Then we invite you to visit the following links; you may find
              the answer to your question!
            </p>
            <ul>
              <li>
                <p>
                  <a href={whitepaperUrl} rel="noreferrer" target="_blank">
                    Whitepaper
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href={nodesUrl} rel="noreferrer" target="_blank">
                    Node & Validators Guide
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href={faqUrl} rel="noreferrer" target="_blank">
                    FAQ
                  </a>
                </p>
              </li>
            </ul>
            <p>
              If you have not found the answer to your question, go to{' '}
              <a href={discordUrl} rel="noreferrer" target="_blank">
                our discord server
              </a>{' '}
              to get in touch with the OKP4 team & community.
            </p>
          </div>
          <div className="okp4-nemeton-web-page-content-wrapper">
            {faqs({ discordUrl, typeformUrl }).map((faq, index, arr) => {
              const previous: FAQ | null = index > 0 ? arr[index - 1] : null
              const active = activeIndex === index
              const mustDisplayPart = !previous || previous.part !== faq.part
              return (
                <div key={index}>
                  {mustDisplayPart && <h2>{faq.part}</h2>}
                  <div className="okp4-nemeton-web-page-content-accordion-container">
                    <h3>{faq.question}</h3>
                    <Image
                      alt="arrow-down"
                      className={`okp4-nemeton-web-icon ${active ? 'rotate-up' : 'rotate-down'}`}
                      height={30}
                      onClick={handleClick(index)}
                      src="/icons/arrow.svg"
                      width={48}
                    />
                  </div>
                  {active && (
                    <div className="okp4-nemeton-web-page-content-accordion-answer-container">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<FAQProps> = async () => ({
  props: {
    ...config
  }
})

export default Faq
