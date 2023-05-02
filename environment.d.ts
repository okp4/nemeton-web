declare namespace NodeJS {
  interface ProcessEnv {
    APP_TITLE: string
    APP_KEYWORDS: string
    APP_DESCRIPTION: string
    OKP4_DISCORD_URL: string
    OKP4_GITHUB_URL: string
    OKP4_LINKEDIN_URL: string
    OKP4_MEDIUM_URL: string
    OKP4_TELEGRAM_URL: string
    OKP4_TWITTER_URL: string
    OKP4_WEBSITE_URL: string
    OKP4_EXPLORER_URL: string
    OKP4_DOCS_URL: string
    OKP4_DOCS_NODES_URL: string
    OKP4_DOCS_FAQ_URL: string
    OKP4_TECHNICAL_DOCS_URL: string
    OKP4_DISCORD_NEMETON_URL: string
    OKP4_DISCORD_TICKET_URL: string
    OKP4_DISCORD_CHANNEL_URL: string
    OKP4_DISCORD_TICKET_CHANNEL_URL: string
    OKP4_MAIL_CONTACT_ADDRESS: string
    OKP4_LICENCE_BLOCKCHAIN_URL: string
    OKP4_LICENCE_CODE_URL: string
    OKP4_LICENCE_ASSETS_URL: string
    OKP4_ARBITRAGE_URL: string
    OKP4_ARBITRAGE_RULES_URL: string
    OKP4_COOKIE_POLICY_URL: string
    OKP4_GITHUB_OKP4D_URL: string
    OKP4_GITHUB_CONTRACTS_URL: string
    OKP4_GITHUB_AWESOME_URL: string
    GRAPHQL_URI: string
    OKP4_TASKS_SIDH_5_TYPEFORM_URL: string
    OKP4_TASKS_IMBOLC_1_TYPEFORM_URL: string
    OKP4_TASKS_IMBOLC_2_TYPEFORM_URL: string
    OKP4_TASKS_IMBOLC_3_TYPEFORM_URL: string
    OKP4_PHASE_SIDH_START_DATE: string
    OKP4_PHASE_SIDH_END_DATE: string
    OKP4_PHASE_IMBOLC_START_DATE: string
    OKP4_PHASE_IMBOLC_END_DATE: string
    OKP4_PHASE_BELTAINE_START_DATE: string
    OKP4_PHASE_BELTAINE_END_DATE: string
    OKP4_PHASE_LUGHNASAD_START_DATE: string
    OKP4_PHASE_LUGHNASAD_END_DATE: string
    OKP4_PHASE_SAMHAIN_START_DATE: string
    OKP4_PHASE_SAMHAIN_END_DATE: string
    OKP4_DOCS_LOGIC_MODULE_URL: string
    OKP4_TASKS_LUGHNASAD_5_TYPEFORM_URL: string
    OKP4_TASKS_LUGHNASAD_6_TYPEFORM_URL: string
  }
}

declare module 'next/config' {
  declare const _default: () => {
    publicRuntimeConfig: {
      version: string
    }
  }

  export default _default
}
