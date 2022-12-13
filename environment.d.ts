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
    OKP4_DOCS_URL: string
    OKP4_DOCS_NODES_URL: string
    OKP4_DOCS_FAQ_URL: string
    OKP4_DISCORD_NEMETON_URL: string
    OKP4_DISCORD_TICKET_URL: string
    OKP4_MAIL_CONTACT_ADDRESS: string
    OKP4_LICENCE_BLOCKCHAIN_URL: string
    OKP4_LICENCE_CODE_URL: string
    OKP4_LICENCE_ASSETS_URL: string
    OKP4_ARBITRAGE_URL: string
    OKP4_ARBITRAGE_RULES_URL: string
    OKP4_COOKIE_POLICY_URL: string
    GRAPHQL_URI: string
    OKP4_TASKS_SIDH_5_TYPEFORM_URL: string
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
