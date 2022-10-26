import type { NextApiRequest, NextApiResponse } from 'next'
import type { Config } from '../../types/config.type'

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export default function handler(_req: NextApiRequest, res: NextApiResponse<Config>): void {
  const config: Config = {
    app: {
      websiteUrl: process.env.OKP4_WEBSITE_URL,
      socialMediaUrls: {
        discordUrl: process.env.OKP4_DISCORD_URL,
        githubUrl: process.env.OKP4_GITHUB_URL,
        linkedinUrl: process.env.OKP4_LINKEDIN_URL,
        mediumUrl: process.env.OKP4_MEDIUM_URL,
        telegramUrl: process.env.OKP4_TELEGRAM_URL,
        twitterUrl: process.env.OKP4_TWITTER_URL
      },
      docsUrls: {
        whitepaperUrl: process.env.OKP4_DOCS_URL,
        nodesUrl: process.env.OKP4_DOCS_NODES_URL,
        faqUrl: process.env.OKP4_DOCS_FAQ_URL
      },
      typeformUrl: process.env.OKP4_TYPEFORM_URL
    }
  }
  return res.status(200).json(config)
}
