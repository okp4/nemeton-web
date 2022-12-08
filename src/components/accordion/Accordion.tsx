import React from 'react'
import Image from 'next/image'

type AccordionProps = {
  title: JSX.Element
  content: JSX.Element
  onClick: () => void
  active: boolean
}

export const Accordion = ({ title, content, onClick, active }: AccordionProps): JSX.Element => (
  <div className="okp4-accordion-main">
    <div className="okp4-accordion-title">
      {title}
      <div>
        <Image
          alt="arrow-down"
          className={`okp4-nemeton-web-icon ${active ? 'rotate-up' : 'rotate-down'}`}
          height={30}
          onClick={onClick}
          src="/icons/arrow.svg"
          width={48}
        />
      </div>
    </div>
    {active && <div className="okp4-accordion-content">{content}</div>}
  </div>
)
