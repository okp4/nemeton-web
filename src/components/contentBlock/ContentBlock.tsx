import React from 'react'

type ContentBlockProps = Readonly<{
  title: string
  description: JSX.Element
  icon: JSX.Element
}>

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description, icon }) => (
  <div className="content-block-main">
    <div className="content-block-title-container">
      {icon}
      <h3>{title}</h3>
    </div>
    {description}
  </div>
)

export default ContentBlock
