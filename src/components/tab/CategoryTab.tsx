import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'

type CategoryTabProps = {
  onToggle: () => void
  isActive: boolean
  challengeCategory: string
}

export const CategoryTab: React.FC<CategoryTabProps> = ({
  isActive,
  onToggle,
  challengeCategory
}): JSX.Element => {
  const refObject = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    if (isActive) {
      refObject.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [isActive])

  return (
    <li
      className={classNames('okp4-nemeton-web-page-challenges-category-tab', {
        active: isActive
      })}
      onClick={onToggle}
      ref={refObject}
    >
      {challengeCategory}
    </li>
  )
}
