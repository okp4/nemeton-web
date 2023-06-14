import React from 'react'
import Image from 'next/image'
import ArticleIcon from '@mui/icons-material/Article'
import GavelIcon from '@mui/icons-material/Gavel'
import HelpIcon from '@mui/icons-material/Help'
import MoneyIcon from '@mui/icons-material/Money'
import type { TaskContentId,ChallengeTaskContentId } from '@/data/phase/dto.type'

type TaskContentIconProps = {
  id: TaskContentId | ChallengeTaskContentId
}

const TaskContentIcon: React.FC<TaskContentIconProps> = ({ id }): JSX.Element => {
  switch (id) {
    case 'description':
      return <ArticleIcon />
    case 'rewards':
      return <MoneyIcon />
    case 'criteria':
      return <GavelIcon />
    case 'submit':
      return <HelpIcon />
    case 'documentation':
      return <Image alt="useful-links" height={18} src={`/icons/useful_links.svg`} width={22} />
  }
}

export default TaskContentIcon
