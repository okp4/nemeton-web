import React from 'react'

type TagProps = Readonly<{
  status: 'done' | 'idle' | 'progress' | 'error' | 'submitted'
  content: string
}>

export const Tag: React.FC<TagProps> = ({ status, content }) => (
  <div className={`okp4-nemeton-web-tag-main ${status}`}>
    <span className={`okp4-nemeton-web-tag-content ${status}`}>{content}</span>
    <span className={`okp4-nemeton-web-tag-icon ${status}`} />
  </div>
)
