import type { Config } from '../types/config.type'

export const config: Config = {
  title: process.env.APP_TITLE,
  keywords: process.env.APP_KEYWORDS,
  description: process.env.APP_DESCRIPTION,
  urls: {
    graphqlUri: process.env.GRAPHQL_URI,
    websiteUrl: process.env.OKP4_WEBSITE_URL,
    explorerUrl: process.env.OKP4_EXPLORER_URL,
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
      faqUrl: process.env.OKP4_DOCS_FAQ_URL,
      logicModuleUrl: process.env.OKP4_DOCS_LOGIC_MODULE_URL
    },
    supportUrls: {
      discordNemetonUrl: process.env.OKP4_DISCORD_NEMETON_URL,
      discordTicketUrl: process.env.OKP4_DISCORD_TICKET_URL
    },
    mailAddresses: {
      contact: process.env.OKP4_MAIL_CONTACT_ADDRESS
    },
    licenceUrls: {
      blockchainLicenceUrl: process.env.OKP4_LICENCE_BLOCKCHAIN_URL,
      codeLicenceUrl: process.env.OKP4_LICENCE_CODE_URL,
      assetsLicenceUrl: process.env.OKP4_LICENCE_ASSETS_URL
    },
    termsUrls: {
      arbitrageUrl: process.env.OKP4_ARBITRAGE_URL,
      arbitrageRulesUrl: process.env.OKP4_ARBITRAGE_RULES_URL
    },
    privacyUrls: {
      cookiePolicyUrl: process.env.OKP4_COOKIE_POLICY_URL
    }
  },
  phases: {
    sidh: {
      startDate: process.env.OKP4_PHASE_SIDH_START_DATE,
      endDate: process.env.OKP4_PHASE_SIDH_END_DATE,
      urls: {
        originalContentUrl: process.env.OKP4_TASKS_SIDH_5_TYPEFORM_URL
      }
    },
    imbolc: {
      startDate: process.env.OKP4_PHASE_IMBOLC_START_DATE,
      endDate: process.env.OKP4_PHASE_IMBOLC_END_DATE,
      urls: {
        exposeRPCUrl: process.env.OKP4_TASKS_IMBOLC_1_TYPEFORM_URL,
        provideSnapshotUrl: process.env.OKP4_TASKS_IMBOLC_2_TYPEFORM_URL,
        provideDashboardUrl: process.env.OKP4_TASKS_IMBOLC_3_TYPEFORM_URL
      }
    },
    beltaine: {
      startDate: process.env.OKP4_PHASE_BELTAINE_START_DATE,
      endDate: process.env.OKP4_PHASE_BELTAINE_END_DATE
    },
    lughnasad: {
      startDate: process.env.OKP4_PHASE_LUGHNASAD_START_DATE,
      endDate: process.env.OKP4_PHASE_LUGHNASAD_END_DATE,
      urls: {
        logicModuleDocsUrl: process.env.OKP4_DOCS_LOGIC_MODULE_URL,
        gasConsumptionTypeformUrl: process.env.OKP4_TASKS_LUGHNASAD_5_TYPEFORM_URL,
        logicModuleTypeformUrl: process.env.OKP4_TASKS_LUGHNASAD_6_TYPEFORM_URL
      }
    }
  }
}
