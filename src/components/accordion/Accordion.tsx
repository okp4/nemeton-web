import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

type AccordionProps = {
  title: JSX.Element
  content: JSX.Element
  onToggle: () => void
  isExpanded: boolean
  iconProps?: {
    width?: number
    height?: number
  }
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export const Accordion = ({
  title,
  content,
  onToggle,
  isExpanded,
  iconProps,
  variant = 'primary',
  disabled = false
}: AccordionProps): JSX.Element => (
  <div
    className={classNames(`okp4-nemeton-web-accordion-main ${variant}`, {
      disabled
    })}
  >
    <div
      className={classNames(`okp4-nemeton-web-accordion-title-container ${variant}`, {
        disabled
      })}
    >
      {title}
      {!disabled && (
        <div>
          <Image
            alt="arrow-down"
            className={`okp4-nemeton-web-icon ${isExpanded ? 'rotate-up' : 'rotate-down'}`}
            height={iconProps?.height ?? 30}
            onClick={onToggle}
            src="/icons/arrow.svg"
            width={iconProps?.width ?? 48}
          />
        </div>
      )}
    </div>
    {isExpanded && <div className="okp4-nemeton-web-accordion-content">{content}</div>}
  </div>
)
