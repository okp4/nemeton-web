import type { GetServerSideProps, NextPage } from 'next'
import { config } from '@/lib/config'
import type { Config } from '@/types/config.type'
import Accordion from '@/components/accordion/Accordion'
import { useAccordion } from '@/hook/useAccordion'

type FaqContent = {
  part?: string
  question: JSX.Element
  answer: JSX.Element
}

type BuildersFaqUrls = {
  discordChannelUrl: string
  discordTicketChannelUrl: string
  registrationFormUrl: string
  faqStargazeUrl: string
}

export type FaqProps = Pick<Config, 'urls'>

const buildersFaqContent = (urls: BuildersFaqUrls): FaqContent[] => [
  {
    question: (
      <div className="okp4-nemeton-web-tasks-accordion-title">
        <h3>Who can participate in the Builders Program?</h3>
      </div>
    ),
    answer: <p>Anyone can participate, we have no limits of participants.</p>
  },
  {
    question: (
      <div className="okp4-nemeton-web-tasks-accordion-title">
        <h3>How do I sign up for the Builders Program?</h3>
      </div>
    ),
    answer: (
      <p>
        While you can contribute directly to the code & documentation in the Github repos, we advise
        you to complete the{' '}
        <a href={urls.registrationFormUrl} rel="noreferrer" target="_blank">
          registration form
        </a>{' '}
        to help you define your potential contribution and to onboard you into the Builders Program.
      </p>
    )
  },
  {
    question: (
      <div className="okp4-nemeton-web-tasks-accordion-title">
        <h3>Can I get any help from the OKP4 core team?</h3>
      </div>
    ),
    answer: (
      <p>
        You can ask help to your fellow builders on{' '}
        <a href={urls.discordChannelUrl} rel="noreferrer" target="_blank">
          the Discord dedicated channel
        </a>{' '}
        or{' '}
        <a href={urls.discordTicketChannelUrl} rel="noreferrer" target="_blank">
          Open a ticket
        </a>{' '}
        to specify your need to the team.
      </p>
    )
  },
  {
    question: (
      <div className="okp4-nemeton-web-tasks-accordion-title">
        <h3>How do I submit my contribution?</h3>
      </div>
    ),
    answer: (
      <>
        <p>
          Follow the &quot;How to submit&quot; instructions provided for each challenge. Sometimes a
          transaction you submit on-chain is enough; other times, you should tweet a thread with
          specific hashtags. We may open a form to send a detailed presentation & links to your
          contribution. It can be docs, code, proof of concepts...
        </p>
        <p>
          For most of the challenges, you&apos;ll be nominated by the judges. You might be invited
          to discuss your contribution with the team.
        </p>
      </>
    )
  },
  {
    question: (
      <div className="okp4-nemeton-web-tasks-accordion-title">
        <h3>How do I know I completed a challenge? When will I receive rewards?</h3>
      </div>
    ),
    answer: (
      <>
        <p>
          For each challenge, the OKP4 team will communicate eligible wallets a few days after the
          end period. POAP badges{' '}
          <a href={urls.faqStargazeUrl} rel="noreferrer" target="_blank">
            (Stargaze NFT)
          </a>{' '}
          will be sent at this moment, but $KNOW token will be airdropped when the mainnet is
          launched (expected at the end of the 2023 year).
        </p>
        <p>
          If you have doubts, if you&apos;re not sure your work is eligible to rewards, you can ask
          on{' '}
          <a href={urls.discordChannelUrl} rel="noreferrer" target="_blank">
            the Discord dedicated channel
          </a>{' '}
          and{' '}
          <a href={urls.discordTicketChannelUrl} rel="noreferrer" target="_blank">
            open a ticket.
          </a>
        </p>
      </>
    )
  }
]

const Faq: NextPage<FaqProps> = props => {
  const { urls } = props
  const {
    socialMediaUrls: { discordUrl },
    docsUrls: { whitepaperUrl, tutorialsUrl, faqUrl, registrationFormUrl, faqStargazeUrl },
    supportUrls: { discordChannelUrl, discordTicketChannelUrl }
  } = urls
  const [activeIndex, setActiveIndex] = useAccordion()

  const handleClick = (index: number) => () => setActiveIndex(activeIndex === index ? null : index)

  return (
    <div className="okp4-nemeton-web-page-main">
      <div className="okp4-nemeton-web-page-content-container" id="faq">
        <h1>F.A.Q.</h1>
        <div>
          <p>
            You have questions about the Builders Program and did not find your answer here? Then we
            invite you to visit the following links; you may find the answer to your question!
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
                <a href={tutorialsUrl} rel="noreferrer" target="_blank">
                  Tutorials
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
        <div className="okp4-nemeton-web-page-accordions-wrapper">
          {buildersFaqContent({
            discordChannelUrl,
            discordTicketChannelUrl,
            registrationFormUrl,
            faqStargazeUrl
          }).map(({ part, question, answer }, index, array) => {
            const previous = index > 0 ? array[index - 1] : null
            const active = activeIndex === index
            const mustDisplayPart = part && (!previous || previous.part !== part)

            return (
              <div key={index}>
                {mustDisplayPart && <h2>{part}</h2>}
                <Accordion
                  content={answer}
                  isExpanded={active}
                  onToggle={handleClick(index)}
                  title={question}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<FaqProps> = async () => ({
  props: {
    ...config
  }
})

export default Faq
