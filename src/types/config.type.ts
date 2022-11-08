export type Config = {
  title: string
  keywords: string
  description: string
  urls: {
    websiteUrl: string
    socialMediaUrls: {
      discordUrl: string
      githubUrl: string
      linkedinUrl: string
      mediumUrl: string
      telegramUrl: string
      twitterUrl: string
    }
    docsUrls: {
      whitepaperUrl: string
      nodesUrl: string
      faqUrl: string
    }
    typeformUrl: string
    supportUrls: {
      discordNemetonUrl: string
      discordTicketUrl: string
    }
    mailAddresses: {
      contact: string
    }
    licenceUrls: {
      blockchainLicenceUrl: string
      codeLicenceUrl: string
      assetsLicenceUrl: string
    }
    termsUrls: {
      arbitrageUrl: string
      arbitrageRulesUrl: string
    }
    privacyUrls: {
      cookiePolicyUrl: string
    }
  }
}
