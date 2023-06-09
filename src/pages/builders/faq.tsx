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
      <p>
        When the submission period comes, we&apos;ll open a form to send a detailed presentation &
        links to your contribution. It can be docs, code, proof of concepts... If it seems cool,
        you&apos;ll be nominated by the judges and be invited to discuss your contribution with the
        team.
      </p>
    )
  }
]

const Faq: NextPage<FaqProps> = props => {
  const { urls } = props
  const {
    socialMediaUrls: { discordUrl },
    docsUrls: { whitepaperUrl, nodesUrl, faqUrl, registrationFormUrl },
    supportUrls: { discordChannelUrl, discordTicketChannelUrl }
  } = urls
  const [activeIndex, setActiveIndex] = useAccordion()

  const handleClick = (index: number) => () => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)
  }

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
        <div className="okp4-nemeton-web-page-accordions-wrapper">
          {buildersFaqContent({
            discordChannelUrl,
            discordTicketChannelUrl,
            registrationFormUrl
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
