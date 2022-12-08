import React from 'react'
import Image from 'next/image'

type AccordionProps = {
  title: JSX.Element
  content: JSX.Element
  onToggle: () => void
  isExpanded: boolean
}

export const Accordion = ({
  title,
  content,
  onToggle,
  isExpanded
}: AccordionProps): JSX.Element => (
  <div className="okp4-accordion-main">
    <div className="okp4-accordion-title">
      {title}
      <div>
        <Image
          alt="arrow-down"
          className={`okp4-nemeton-web-icon ${isExpanded ? 'rotate-up' : 'rotate-down'}`}
          height={30}
          onClick={onToggle}
          src="/icons/arrow.svg"
          width={48}
        />
      </div>
    </div>
    {isExpanded && <div className="okp4-accordion-content">{content}</div>}
  </div>
)
