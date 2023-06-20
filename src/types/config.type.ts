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
    urls: {
      keplrWalletExtensionUrl: string
      keplrDocsTutorialsUrls: string
      explorerDashboardUrl: string
      faucetUrl: string
      githubOkp4dReleasesUrl: string
      githubObjectariumUrl: string
      githubCognitariumMessagesUrl: string
      githubLawStoneUrl: string
      githubPredicateBlockUrl: string
      githubPredicateAddressUrl: string
      githubLogicModulePredicatesUrl: string
      githubPrologTemplateUrl: string
      githubOntologyRhizomeUrl: string
      okp4dDocsCommandsUrl: string
      ontologyDescriptionUrl: string
      swiPrologUrl: string
      swiPrologFunctionsUrl: string
      objectariumAddress: string
      objectariumID: string
      smartContractLawStoneCodeID: string
      smartContractCognitariumCodeID: string
      chainAddress: string
      tutorialsPrologUrl: string
      tutorialsCliUrl: string
    }
    challenges: Array<{
      startDate: string
      endDate: string
    }>
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
      faqStargazeUrl: string
      logicModuleUrl: string
      tutorialsUrl: string
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
