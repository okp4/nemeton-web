export type PhasesConfig = {
  sidh: {
    startDate: string
    endDate: string
    urls: {
      originalContentUrl: string
    }
  }
  imbolc: {
    startDate: string
    endDate: string
    urls: {
      exposeRPCUrl: string
      provideSnapshotUrl: string
      provideDashboardUrl: string
    }
  }
  beltaine: {
    startDate: string
    endDate: string
  }
  lughnasad: {
    startDate: string
    endDate: string
    urls: {
      logicModuleDocsUrl: string
      gasConsumptionTypeformUrl: string
      logicModuleTypeformUrl: string
    }
  }
  samhain: {
    startDate: string
    endDate: string
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
    githubUrls: {
      githubOkp4dUrl: string
      githubContractsUrl: string
      githubAwesomeUrl: string
    }
    docsUrls: {
      whitepaperUrl: string
      nodesUrl: string
      faqUrl: string
      logicModuleUrl: string
      technicalDocsUrl: string
      registrationFormUrl: string
    }
    supportUrls: {
      discordNemetonUrl: string
      discordTicketUrl: string
      discordChannelUrl: string
      discordTicketChannelUrl: string
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
  phases: PhasesConfig
}
