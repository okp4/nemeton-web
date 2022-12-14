export type TasksUrls = {
  sidh: {
    originalContentUrl: string
  }
  imbolc: {
    exposeRPCUrl: string
    provideSnapshotUrl: string
    provideDashboardUrl: string
  }
}

export type Config = {
  title: string
  keywords: string
  description: string
  urls: {
    graphqlUri: string
    websiteUrl: string
    explorerUrl: string
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
    tasksUrls: TasksUrls
  }
}
