import { getStatusByDuration } from '@/utils'
import type { PhasesConfig } from '@/types/config.type'
import type { PhaseDTO } from './dto.type'

export const samhain = ({
  samhain: {
    startDate,
    endDate,
    urls: {
      keplrWalletExtensionUrl,
      keplrDocsTutorialsUrls,
      explorerDashboardUrl,
      faucetUrl,
      githubOkp4dReleasesUrl,
      okp4dDocsCommandsUrl,
      githubObjectariumUrl,
      githubCognitariumMessagesUrl,
      githubLawStoneUrl,
      githubPredicateBlockUrl,
      githubPredicateAddressUrl,
      githubLogicModulePredicatesUrl,
      githubPrologTemplateUrl,
      githubOntologyRhizomeUrl,
      githubOntologyS3ServiceUrl,
      githubS3ServiceMetadataUrl,
      githubOntologyCsvDatasetUrl,
      githubOntologyCsvDatasetMetadataUrl,
      githubServiceReferenceUrl,
      githubDatasetReferenceUrl,
      githubCognitariumPrologCodeUrl,
      githubCognitariumServiceCategoryUrl,
      githubCognitariumDatasetMediaTypeUrl,
      githubStorageServiceUrl,
      githubDatasetUrl,
      githubContractsUrl,
      ontologyDescriptionUrl,
      swiPrologUrl,
      swiPrologFunctionsUrl,
      objectariumAddress,
      objectariumID,
      smartContractLawStoneCodeID,
      smartContractCognitariumCodeID,
      smartContractTutorialUrl,
      dataCognitariumCodeID,
      chainAddress,
      tutorialsPrologUrl,
      tutorialsCliUrl,
      csvDatasetUrl,
      awsS3Url,
      scaleWayObjectStorageUrl,
      uuidIdentifierUrl,
      tutorialsOntologyUrl,
      testnetContractListUrl,
      beyondTraditionalGovernanceUrl,
      grazDocsUrl,
      okp4WebsiteDocsUrl,
      nemetonSupportUrl
    },
    challenges
  }
}: PhasesConfig): PhaseDTO => ({
  number: 5,
  phaseName: 'samhain',
  phaseDescription:
    'Samhain is no longer only for validators but for builders too and its main objective is the emergence of uses and applications of the OKP4 protocol.',
  status: getStatusByDuration(startDate, endDate),
  phaseDuration: {
    from: startDate,
    to: endDate
  },
  tasks: [
    {
      group: 'Nodes',
      taskName: 'Vote for the governance proposals',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              During the Phase 5, we&apos;ll submit governance proposals to make evolve the chain.
              To achieve this task you need to submit your vote on these proposals.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>500 points per vote.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>You will receive the points once OKP4 team has checked your governance votes.</p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              You just have to vote on the proposal with your delegator address - you don&apos;t
              need to do anything else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-05-24T12:00:00Z',
        to: '2023-10-31T23:59:59Z'
      },
      points: 500
    },
    {
      group: 'Nodes',
      taskName: 'Perform upgrades on time',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Once the software upgrade governance proposals are accepted, Druids must perform the
              update. To achieve this task, you must ensure your node is updated on time and
              doesn&apos;t miss blocks. The upgrade plan will be detailed in the governance
              proposals.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>1 000 per upgrade.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              Points will be awarded according to your uptime within the hour following the targeted
              upgrade heights.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              Perform the best uptime within the hour following the targeted upgrade heights - you
              don&apos;t need to do anything else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-05-24T12:00:00Z',
        to: '2023-10-31T23:59:59Z'
      },
      points: 1000
    },
    {
      group: 'Nodes',
      taskName: 'Make an original/ creative tweet',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Publish a tweet including the{' '}
              <span className="okp4-nemeton-web-bold-text">@OKP4_Protocol</span> tag using your
              validator Twitter account. Feel free to share an original content! Be creative to
              reach out to the OKP4 community.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>3 000 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <>
              <p>Results depend on :</p>
              <ul>
                <li>Creativity</li>
                <li>Relevance</li>
                <li>Editorial Aspect</li>
                <li>Reference & Reflexion</li>
              </ul>
            </>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              Publish a tweet with the right tag and account - You don&apos;t need to do anything
              else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-05-24T12:00:00Z',
        to: '2023-10-31T23:59:59Z'
      },
      points: 3000
    },
    {
      group: 'Nodes',
      taskName: 'Uptime',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: <p>Maintain the best uptime with your validator.</p>
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>8 000 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              Points are attributed according to the following formula: 8 001 ^0,01x - 1 with x =
              %uptime.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: <p>Missed blocks are automatically tracked.</p>
        }
      ],
      taskDuration: {
        from: '2023-05-24T12:00:00Z',
        to: '2023-10-31T23:59:59Z'
      },
      points: 8000
    },
    {
      group: 'Nodes',
      taskName: `You're welcome to the Builders program to earn many more rewards!`,
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Have a look on the{' '}
              <a href="/builders/challenges#challenges" rel="noreferrer" target="_blank">
                Builders Program challenges
              </a>{' '}
              to get a chance to earn more rewards.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-06-14T12:00:00Z',
        to: '2023-10-31T23:59:59Z'
      },
      points: 8000
    }
  ],
  challenges: [
    {
      challengeName: 'The first fire of Tlachtga- From June, 14th to June, 28th',
      challengeStatus: getStatusByDuration(challenges[0].startDate, challenges[0].endDate),
      challengeDescription: (
        <p>
          Enter in the Nemeton world with the first task that a druid should master before getting
          to the heart of the matter.
        </p>
      ),
      challengeTasks: [
        {
          taskName: 'Starter task: Send your first transaction to the OKP4 blockchain',
          taskContent: [
            {
              id: 'description',
              title: 'Description',
              contentDescription: (
                <p>
                  (Difficulty: 1/5)
                  <br /> Setup with Keplr or another wallet, connect to the OKP4 testnet network,
                  claim $KNOW tokens from the faucet and send 0.01 KNOW to this address:
                  <span>{chainAddress}</span>
                </p>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: <p>An “OKP4 young druid” POAP (Stargaze badge)</p>
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <p>
                  The first 250 wallets with an eligible transaction will receive the on-chain badge
                  on June 28th.
                  <br /> It&apos;s useless to farm the POAP, don&apos;t expect related $KNOW airdrop
                  eligibility 😄
                </p>
              )
            },
            {
              id: 'submit',
              title: 'How to Submit',
              contentDescription: (
                <p>
                  You have to send 0.01 KNOW to the OKP4 address above; you don’t need to do
                  anything else.
                </p>
              )
            },
            {
              id: 'documentation',
              title: 'Documentation, useful links',
              contentDescription: (
                <ul>
                  <li>
                    Keplr:{' '}
                    <a href={keplrWalletExtensionUrl} rel="noreferrer" target="_blank">
                      {keplrWalletExtensionUrl}
                    </a>
                  </li>
                  <li>
                    Explorer:{' '}
                    <a href={explorerDashboardUrl} rel="noreferrer" target="_blank">
                      {explorerDashboardUrl}
                    </a>
                  </li>
                  <li>
                    Faucet:{' '}
                    <a href={faucetUrl} rel="noreferrer" target="_blank">
                      {faucetUrl}
                    </a>
                  </li>
                  <li>
                    <a href={keplrDocsTutorialsUrls} rel="noreferrer" target="_blank">
                      ”Get started with OKP4: Your first transaction”
                    </a>{' '}
                    tutorial
                  </li>
                </ul>
              )
            }
          ],
          taskDuration: {
            from: '2023-06-14T12:00:00Z',
            to: '2023-06-28T12:00:00Z'
          }
        },
        {
          taskName:
            'Use the okp4d CLI to fetch and store messages in a storage-oriented smart contract',
          taskContent: [
            {
              id: 'description',
              title: 'Description',
              contentDescription: (
                <p>
                  (Difficulty: 2/5)
                  <br /> Install the CLI with your terminal, and import the wallet seed you created
                  for the previous task. Fetch object data from the <span>objectarium</span>{' '}
                  instance deployed at the <span>{objectariumAddress}</span>
                  address, with the <span>ID = {objectariumID}</span>. Decode the base64 message,
                  and replace the okp4 address in it by yours. Store this new message in{' '}
                  <span>base64</span>. You&apos;ll have to execute a transaction to the{' '}
                  <span>objectarium</span> smart contract. The object should be pinned.
                </p>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: <p>An “OKP4 objectarium explorer” POAP (Stargaze badge)</p>
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <p>
                  The storing transaction should be from the same address you used to complete the
                  starter task.
                  <br /> The first 250 wallets with an eligible transaction will receive the
                  on-chain badge on June 28th.
                  <br /> It&apos;s useless to farm the POAP, don&apos;t expect related $KNOW airdrop
                  eligibility 😄
                </p>
              )
            },
            {
              id: 'submit',
              title: 'How to Submit',
              contentDescription: (
                <p>
                  You have to store and pin the correct message to the correct{' '}
                  <span>objectarium</span> instance. You don&apos;t need to do anything else.
                </p>
              )
            },
            {
              id: 'documentation',
              title: 'Documentation, useful links',
              contentDescription: (
                <ul>
                  <li>
                    OKP4 daemon CLI releases:{' '}
                    <a href={githubOkp4dReleasesUrl} rel="noreferrer" target="_blank">
                      {githubOkp4dReleasesUrl}
                    </a>
                  </li>
                  <li>
                    <span>okp4d</span> commands documentation:{' '}
                    <a href={okp4dDocsCommandsUrl} rel="noreferrer" target="_blank">
                      {okp4dDocsCommandsUrl}
                    </a>
                  </li>
                  <li>
                    <span>objectarium</span> smart contract Github Repo:{' '}
                    <a href={githubObjectariumUrl} rel="noreferrer" target="_blank">
                      {githubObjectariumUrl}
                    </a>
                  </li>
                  <li>
                    <a href={tutorialsCliUrl} rel="noreferrer" target="_blank">
                      ”Get started with OKP4 protocol: how to use the CLI”
                    </a>{' '}
                    tutorial
                  </li>
                </ul>
              )
            }
          ],
          taskDuration: {
            from: '2023-06-14T12:00:00Z',
            to: '2023-06-28T12:00:00Z'
          }
        },
        {
          taskName:
            'Create a Prolog program to allowlist account addresses, add it to the OKP4 blockchain as governance rules',
          taskContent: [
            {
              id: 'description',
              title: 'Description',
              contentDescription: (
                <p>
                  (Difficulty: 2/5)
                  <br /> Create a Prolog file that categorizes any okp4 address starting with
                  <span>okp4rocks</span> as <span>awesome_addresses</span>. Authorize{' '}
                  <span>get_vip_access</span>
                  for these addresses only. Add these governance rules on-chain; instantiate from a
                  <span>law stone</span> smart contract (
                  <span>CODE_ID = {smartContractLawStoneCodeID}</span>).
                </p>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: <p>An “OKP4 law stone builder” POAP (Stargaze badge)</p>
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <>
                  <p>
                    The instantiate transaction should be from the address you used to complete task
                    1.
                    <br /> A query like this one, with <span>$CONTRACT_ADDR</span> as your deployed
                    smart contract address, should return <span>true</span>:
                  </p>
                  <pre>
                    okp4d query wasm contract-state smart $CONTRACT_ADDR \<br />
                    &quot;{'{'}\&quot;ask\&quot;: {'{'}\&quot;query\&quot;:
                    \&quot;can(&apos;get_vip_access&apos;,
                    &apos;did:key:okp4rocks7en82gmzfm259y6z93r9qe63l25dfwwng6&apos;).\&quot;{'}}'}
                    &quot;
                  </pre>
                  <p>
                    The first 250 wallets with an eligible transaction will receive the on-chain
                    badge on June 28th.
                    <br /> It&apos;s useless to farm the POAP, don&apos;t expect related $KNOW
                    airdrop eligibility 😄
                  </p>
                </>
              )
            },
            {
              id: 'submit',
              title: 'How to Submit',
              contentDescription: (
                <p>
                  You have to instantiate a <span>law stone</span> instance with a correct Prolog
                  program. You don&apos;t need to do anything else.
                </p>
              )
            },
            {
              id: 'documentation',
              title: 'Documentation, useful links',
              contentDescription: (
                <ul>
                  <li>
                    Prolog - Learn the basics:{' '}
                    <a href={swiPrologUrl} rel="noreferrer" target="_blank">
                      {swiPrologUrl}
                    </a>
                  </li>
                  <li>
                    <span>law stone</span> smart contract Github Repo:{' '}
                    <a href={githubLawStoneUrl} rel="noreferrer" target="_blank">
                      {githubLawStoneUrl}
                    </a>
                  </li>
                  <li>
                    <a href={tutorialsPrologUrl} rel="noreferrer" target="_blank">
                      ”Get started with OKP4 protocol: Governance rules with Prolog”
                    </a>{' '}
                    tutorial
                  </li>
                </ul>
              )
            }
          ],
          taskDuration: {
            from: '2023-06-14T12:00:00Z',
            to: '2023-06-28T12:00:00Z'
          }
        },
        {
          taskName: 'Create a Prolog program to allow access only on a time slot',
          taskContent: [
            {
              id: 'description',
              title: 'Description',
              contentDescription: (
                <p>
                  (Difficulty: 3/5)
                  <br /> Add an additional condition to the Prolog program from task 2 to authorize
                  VIP access only during a specific time slot of the day (e. g., 07:00 - 22:00 UTC).
                  Add these governance rules on-chain; instantiate from a <span>
                    law stone
                  </span>{' '}
                  smart contract (<span>CODE_ID = {smartContractLawStoneCodeID}</span>).
                </p>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: (
                <p>
                  20,000 $KNOW ($1500 at current valuation) + an “OKP4 Dagda Servant” POAP (Stargaze
                  badge) for the first one to give a valid solution.
                  <br />
                  The first wallet with an eligible transaction will receive the on-chain badge on
                  June 28th, and the $KNOW tokens will be sent out when the mainnet is launched
                  (scheduled for late 2023).
                </p>
              )
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <>
                  <p>
                    Schedule rules should be set between 07:00 and 22:00, but we should be able to
                    change the time slot easily.
                    <br />A query like the one below, with <span>$CONTRACT_ADDR</span> as your
                    deployed smart contract address, should return <span>true</span> between 07:00
                    and 22:00 only (UTC, any day).
                  </p>
                  <pre>
                    okp4d query wasm contract-state smart $CONTRACT_ADDR \
                    <br /> &quot;{'{'}\&quot;ask\&quot;: {'{'}\&quot;query\&quot;:
                    \&quot;can(&apos;get_vip_access&apos;,
                    &apos;did:key:okp4rocks7en82gmzfm259y6z93r9qe63l25dfwwng6&apos;).\&quot;{'}}'}
                    &quot;
                  </pre>
                  <p>
                    The instantiate transaction should be from the address you used to complete task
                    2.
                  </p>
                </>
              )
            },
            {
              id: 'submit',
              title: 'How to Submit',
              contentDescription: (
                <p>
                  You have to instantiate a <span>law stone</span> instance with a correct Prolog
                  program. You don&apos;t need to do anything else.
                </p>
              )
            },
            {
              id: 'documentation',
              title: 'Documentation, useful links',
              contentDescription: (
                <ul>
                  <li>
                    <span>block_time/1</span> predicate:{' '}
                    <a href={githubPredicateBlockUrl} rel="noreferrer" target="_blank">
                      {githubPredicateBlockUrl}
                    </a>
                  </li>
                  <li>
                    Prolog arithmetic functions:{' '}
                    <a href={swiPrologFunctionsUrl} rel="noreferrer" target="_blank">
                      {swiPrologFunctionsUrl}
                    </a>
                  </li>
                  <li>
                    <a href={tutorialsPrologUrl} rel="noreferrer" target="_blank">
                      ”Get started with OKP4 protocol: Governance rules with Prolog”
                    </a>{' '}
                    tutorial
                  </li>
                </ul>
              )
            }
          ],
          taskDuration: {
            from: '2023-06-14T12:00:00Z',
            to: '2023-06-28T12:00:00Z'
          }
        },
        {
          taskName:
            'Purpose a governance template (Prolog code), tweet a thread to explain its relevance',
          taskContent: [
            {
              id: 'description',
              title: 'Description',
              contentDescription: (
                <>
                  <p>
                    (Difficulty: 3/5)
                    <br /> Create an open-source project published on GitHub with an example of a
                    governance template. Provides a Prolog file using this template too. Be
                    innovative, and consider real-life use cases, even basic ones.
                  </p>
                  <div>
                    <p>Tweet a thread with the following:</p>
                    <ul>
                      <li>#OKP4BuildersProgram hashtag and @OKP4_Protocol tag</li>
                      <li>
                        Link to the Github repo with at least two Prolog files (template and
                        governance use example)
                      </li>
                      <li>The explanation of why this template is relevant</li>
                      <li>
                        <span>okp4d query wasm</span> ask command to a <span>law stone</span> smart
                        contract you instantiated, linked to the template
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>Need inspiration? You can propose rules according to the following:</p>
                    <ul>
                      <li>
                        addresses from others Cosmos chains (use{' '}
                        <a href={githubPredicateAddressUrl} rel="noreferrer" target="_blank">
                          bech32_address/2 predicate
                        </a>
                        )
                      </li>
                      <li>
                        data from a smart contract query (use{' '}
                        <span>
                          consult(cosmwasm:{'{'}contract_name{'}'}:{'{'}contract_address{'}'}?query=
                          {'{'}contract_query{'}'}
                        </span>
                        )
                      </li>
                    </ul>
                  </div>
                </>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: (
                <p>
                  $KNOW tokens + an “OKP4 governance creator” POAP (Stargaze badge) per validated
                  template.
                  <br />
                  Up to 80,000 $KNOW (in total) will be sent to builders for this task. OKP4 team
                  will manually evaluate the governance template and rewards the most relevant ones.
                  The first wallet to propose it will be rewarded if there are similar templates.
                  It&apos;s OK to propose several templates (for different use cases) to get $KNOW
                  rewards multiple times.
                  <br />
                  Wallets with an eligible transaction will receive the on-chain badge on June 28th,
                  and the $KNOW tokens will be sent out when the mainnet is launched (scheduled for
                  late 2023).
                </p>
              )
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <p>
                  Your tweet and README should clearly state the problem you want to solve and why
                  it is a good contribution to the OKP4 community.
                </p>
              )
            },
            {
              id: 'submit',
              title: 'How to Submit',
              contentDescription: (
                <p>
                  Send the tweet as required in the &apos;Description&apos; part above. You
                  don&apos;t need to do anything else.
                </p>
              )
            },
            {
              id: 'documentation',
              title: 'Documentation, useful links',
              contentDescription: (
                <ul>
                  <li>
                    Custom predicates in the OKP4 logic module:{' '}
                    <a href={githubLogicModulePredicatesUrl} rel="noreferrer" target="_blank">
                      {githubLogicModulePredicatesUrl}
                    </a>
                  </li>
                  <li>
                    Prolog template example:{' '}
                    <a href={githubPrologTemplateUrl} rel="noreferrer" target="_blank">
                      {githubPrologTemplateUrl}
                    </a>
                  </li>
                  <li>
                    <a href={tutorialsPrologUrl} rel="noreferrer" target="_blank">
                      ”Get started with OKP4 protocol: Governance rules with Prolog”
                    </a>{' '}
                    tutorial
                  </li>
                </ul>
              )
            }
          ],
          taskDuration: {
            from: '2023-06-14T12:00:00Z',
            to: '2023-06-28T12:00:00Z'
          }
        },
        {
          taskName:
            'Add a formal and structured representation of a resource to share with the OKP4 blockchain',
          taskContent: [
            {
              id: 'description',
              title: 'Description',
              contentDescription: (
                <>
                  <p>
                    (Difficulty: 2/5)
                    <br /> Get the ontology file of a shared resource from Rhizome (available here:
                    <a href={githubOntologyRhizomeUrl} rel="noreferrer" target="_blank">
                      {' '}
                      {githubOntologyRhizomeUrl}
                    </a>
                    ).
                  </p>
                  <p>
                    Modify the file to add a time coverage over 2021 (RDF graph triple with
                    <span>core:hasTemporalCoverage</span> predicate).
                  </p>
                  <p>
                    Then, instantiate a <span>cognitarium</span> smart contract (
                    <span>CODE_ID = {smartContractCognitariumCodeID}</span>).
                  </p>
                  <p>
                    Finally, store the updated semantic data on-chain; you should execute an
                    <span>InsertData</span> message to the <span>cognitarium</span> smart contract
                    instance you&apos;ve deployed.
                  </p>
                </>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: <p>An “OKP4 ontologist apprentice“ POAP (Stargaze POAP)</p>
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <p>
                  The storing transaction should be from the address you used to complete task 1.
                  <br />
                  The first 250 wallets with an eligible transaction will receive the on-chain badge
                  on June 28th.
                  <br /> It&apos;s useless to farm the POAP, don&apos;t expect related $KNOW airdrop
                  eligibility 😄
                </p>
              )
            },
            {
              id: 'submit',
              title: 'How to Submit',
              contentDescription: (
                <p>
                  You have to store the data (Turtle format) in a <span>cognitarium</span> instance
                  you deployed. You don&apos;t need to do anything else.
                </p>
              )
            },
            {
              id: 'documentation',
              title: 'Documentation, useful links',
              contentDescription: (
                <ul>
                  <li>
                    OKP4 Ontology, the approach to knowledge description:{' '}
                    <a href={ontologyDescriptionUrl} rel="noreferrer" target="_blank">
                      {ontologyDescriptionUrl}
                    </a>
                  </li>
                  <li>
                    <span>cognitarium</span> smart contract messages:{' '}
                    <a href={githubCognitariumMessagesUrl} rel="noreferrer" target="_blank">
                      {githubCognitariumMessagesUrl}
                    </a>
                  </li>
                  <li>
                    <a href={tutorialsCliUrl} rel="noreferrer" target="_blank">
                      ”Get started with OKP4 protocol: how to use the CLI”
                    </a>{' '}
                    tutorial
                  </li>
                </ul>
              )
            }
          ],
          taskDuration: {
            from: '2023-06-14T12:00:00Z',
            to: '2023-06-28T12:00:00Z'
          }
        }
      ]
    },
    {
      challengeName: 'Invoke the power of Dagda- From July, 12th to August, 30th',
      challengeStatus: getStatusByDuration(challenges[1].startDate, challenges[1].endDate),
      challengeDescription: (
        <>
          <p>
            Summon the wisdom of the druids and harness the OKP4 Protocol - the key to unlocking
            decentralized resource sharing. Delve into the enchanted tech to inscribe your own runes
            of data, query their secrets, and craft user interfaces reminiscent of ancient stone
            circles to establish consent rules for resources. Your journey begins here, within the
            heart of this decentralized realm.
          </p>
          <p>
            Complete these four challenges to imagine the tools and usages for the new world of
            decentralized resource sharing!
          </p>
        </>
      ),
      challengeTasks: [
        {
          taskName: 'Reference within the OKP4 ontology a CSV file stored in S3',
          taskContent: [
            {
              id: 'description',
              title: 'Description',
              contentDescription: (
                <>
                  <p>
                    (Difficulty: 2.5/5)
                    <br /> In the timeless wisdom of the druids, to share one&apos;s knowledge, one
                    must first be able to name and reference it. This is the vital essence of
                    ontology, the ancient tree of understanding from which all information grows.
                    Like the sturdy oak representing the world, ontology thrives on RDF triplets,
                    encoded into the essence of a smart contract, adhering to the sacred text of the
                    OKP4 core specification. Just as druids believed in the interconnectedness of
                    all things, so does the dataverse interweave every piece of data into a living,
                    breathing digital grove.
                  </p>
                  <p>
                    Add a CSV dataset (like this{' '}
                    <a href={csvDatasetUrl} rel="noreferrer" target="_blank">
                      one
                    </a>{' '}
                    for exemple) to the dataverse. You should previously store the data in an S3
                    service you control (you can use{' '}
                    <a href={awsS3Url} rel="noreferrer" target="_blank">
                      AWS
                    </a>{' '}
                    or{' '}
                    <a href={scaleWayObjectStorageUrl} rel="noreferrer" target="_blank">
                      Scaleway
                    </a>{' '}
                    for example).
                  </p>
                  <p>Generate a Turtle file with descriptions of:</p>
                  <ul>
                    <li>
                      the S3 service{' '}
                      <a href={githubOntologyS3ServiceUrl} rel="noreferrer" target="_blank">
                        <span>&lt;https://ontology.okp4.space/core/Service&gt;</span>
                      </a>
                    </li>
                    <li>
                      the S3 service metadata{' '}
                      <a href={githubS3ServiceMetadataUrl} rel="noreferrer" target="_blank">
                        <span>
                          &lt;https://ontology.okp4.space/metadata/service/GeneralMetadata&gt;
                        </span>
                      </a>
                    </li>
                    <li>
                      the CSV dataset{' '}
                      <a href={githubOntologyCsvDatasetUrl} rel="noreferrer" target="_blank">
                        <span>&lt;https://ontology.okp4.space/core/Dataset&gt;</span>
                      </a>
                    </li>
                    <li>
                      the CSV dataset metadata{' '}
                      <a
                        href={githubOntologyCsvDatasetMetadataUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span>
                          &lt;https://ontology.okp4.space/metadata/dataset/GeneralMetadata&gt;
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p>
                    If you need to generate identifiers, use{' '}
                    <a href={uuidIdentifierUrl} rel="noreferrer" target="_blank">
                      <span>uuid-v4</span>
                    </a>
                    . Feel free to add any additional metadata!
                  </p>
                  <p>
                    Store this semantic data on-chain; you should submit the whole by executing a
                    single <span>insert_data</span> message to a <span>cognitarium</span> smart
                    contract you&apos;ve instantiated (
                    <span>CODE_ID = {dataCognitariumCodeID}</span>).
                    <br /> Provide “Nemeton-Dagda1” as a memo (add{' '}
                    <span>--note &quot;Nemeton-Dagda1&quot;</span> to your command if you use the
                    CLI).
                  </p>
                </>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: <p>An “OKP4 Dataverse precursor“ POAP (Stargaze POAP)</p>
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <p>
                  The first 250 wallets with an eligible transaction will receive the on-chain badge
                  on August 31.
                  <br /> It&apos;s useless to farm the POAP, don&apos;t expect related $KNOW airdrop
                  eligibility 😄
                </p>
              )
            },
            {
              id: 'submit',
              title: 'How to Submit',
              contentDescription: (
                <p>
                  You have to store the semantic data (Turtle format) in a <span>cognitarium</span>{' '}
                  instance with “Nemeton-Dagda1” as a memo of your <span>insert_data</span>{' '}
                  transaction. You don&apos;t need to do anything else.
                </p>
              )
            },
            {
              id: 'documentation',
              title: 'Documentation, useful links',
              contentDescription: (
                <ul>
                  <li>
                    &quot;OKP4 Knowledge Sharing through Ontology-Driven Dataverse&quot; article:{' '}
                    <a href={ontologyDescriptionUrl} rel="noreferrer" target="_blank">
                      {ontologyDescriptionUrl}
                    </a>
                  </li>
                  <li>
                    Service reference - Turtle file example:{' '}
                    <a href={githubServiceReferenceUrl} rel="noreferrer" target="_blank">
                      {githubServiceReferenceUrl}
                    </a>
                  </li>
                  <li>
                    Dataset reference - Turtle file example:{' '}
                    <a href={githubDatasetReferenceUrl} rel="noreferrer" target="_blank">
                      {githubDatasetReferenceUrl}
                    </a>
                  </li>
                  <li>
                    “Leverage the ontology” tutorial:{' '}
                    <a href={tutorialsOntologyUrl} rel="noreferrer" target="_blank">
                      {tutorialsOntologyUrl}
                    </a>
                  </li>
                </ul>
              )
            }
          ],
          taskDuration: {
            from: '2023-07-12T12:00:00Z',
            to: '2023-08-30T12:00:00Z'
          }
        },
        {
          taskName: 'Prolog predicates to query the ontology',
          taskContent: [
            {
              id: 'description',
              title: 'Description',
              contentDescription: (
                <>
                  <p>
                    (Difficulty: 3/5)
                    <br /> Under the celestial canopy of the OKP4 Protocol, Prolog unfolds as the
                    sacred language, defining and interpreting the laws inscribed upon the shared
                    resources. Craft your own druidic predicates, akin to the stones in a sacred
                    henge, making it simpler to divine the mysteries of the ontology within the
                    sacred script of Prolog code.
                  </p>
                  <p>
                    Look at the{' '}
                    <a href={githubCognitariumPrologCodeUrl} rel="noreferrer" target="_blank">
                      Prolog code example in the cognitarium contract GitHub repository
                    </a>
                    . A<span>cognitarium_dataset_tags(CognitariumAddr, DatasetDID, Tags)</span>{' '}
                    predicate allows you to get tags for a specific dataset (objects of{' '}
                    <span>core:Tags</span> and <span>DatasetDID</span> as subject). Similarly, write
                    several predicates to query the ontology from any Prolog program interpreted by
                    the OKP4 blockchain.
                  </p>
                  <p>Write generic predicates to query ontology:</p>
                  <ul>
                    <li>
                      <span>
                        cognitarium_subject_predicate_objects(CognitariumAddr, Subject, Predicate,
                        Objects)
                      </span>
                      , where <span>Objects</span> is the returned value from a SELECT query on
                      <span>CognitariumAddr</span> with provided <span>Subject</span> and{' '}
                      <span>Predicate</span>
                    </li>
                    <li>
                      <span>
                        cognitarium_subject_predicate_subjects(CognitariumAddr, Subjects, Predicate,
                        Object)
                      </span>
                      , where <span>Subjects</span> is the returned value from a SELECT query on
                      <span>CognitariumAddr</span> with provided <span>Object</span> and{' '}
                      <span>Predicate</span>
                    </li>
                    <li>
                      <span>
                        cognitarium_has_stored_triple(CognitariumAddr, Subject, Predicate, Object)
                      </span>
                      indicates that the RDF triple <span>Subject</span>-<span>Predicate</span>-
                      <span>Object</span> is stored in ontology queried on the smart contract
                      address <span>CognitariumAddr</span>
                    </li>
                  </ul>
                  <p>
                    Use these Prolog helpers to write specific predicates retrieving metadata of the
                    CSV you previously stored:
                  </p>
                  <ul>
                    <li>
                      <span>
                        cognitarium_service_category(CognitariumAddr, ServiceId, ServiceCategory)
                      </span>{' '}
                      to get the{' '}
                      <a
                        href={githubCognitariumServiceCategoryUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        service category
                      </a>{' '}
                      of a service
                    </li>
                    <li>
                      <span>
                        cognitarium_dataset_mediatype(CognitariumAddr, DatasetId, MediaType)
                      </span>{' '}
                      to get the{' '}
                      <a
                        href={githubCognitariumDatasetMediaTypeUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        media type
                      </a>{' '}
                      of a dataset
                    </li>
                  </ul>
                  <p>
                    Submit a unique Prolog program containing the five predicates with a{' '}
                    <span>law-stone</span>
                    smart contract instantiation (
                    <span>CODE_ID = {smartContractLawStoneCodeID}</span>). You can set
                    <span>{objectariumAddress}</span> as the default storage address or{' '}
                    <a href={testnetContractListUrl} rel="noreferrer" target="_blank">
                      any other available <span>objectarium</span> instance
                    </a>
                    .
                    <br />
                    Provide “Nemeton-Dagda2” as a memo (add{' '}
                    <span>--note &quot;Nemeton-Dagda2&quot;</span> to your command if you use the
                    CLI).
                  </p>
                </>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: (
                <>
                  <p>
                    100,000 $KNOW (0,05% of the total supply) + an “OKP4 Prolog query master” POAP
                    (Stargaze badge) for the first one to submit 5 valid expected predicates.
                  </p>
                  <p>
                    The first wallet with an eligible transaction will receive the on-chain badge on
                    August 31, and the $KNOW tokens will be sent out when the mainnet is launched
                    (scheduled for late 2023).
                  </p>
                </>
              )
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <>
                  <p>
                    Each predicate will be evaluated. For example, a query like the one below, with
                    your deployed <span>law-stone</span> instance address as{' '}
                    <span>$CONTRACT_ADDR</span>, should return a
                    <span>MediaType = application_vndms-excel</span> substitution:
                  </p>
                  <pre>
                    okp4d query wasm contract-state smart $CONTRACT_ADDR \
                    <br /> &quot;{'{'}\&quot;ask\&quot;: {'{'}\&quot;query\&quot;:
                    \&quot;cognitarium_dataset_mediatype(okp41ehq2u2k5n45malyrncr8ln3cu8uk94cpfgxs80mma8jwrwmxjj3sa9l5zl,
                    0ea1fc7a-dd97-4adc-a10e-169c6597bcde, MediaType).\&quot;{'}}'}
                    &quot;
                  </pre>
                </>
              )
            },
            {
              id: 'submit',
              title: 'How to Submit',
              contentDescription: (
                <p>
                  You have to instantiate a <span>law stone</span> with a Prolog program containing
                  the five expected predicates. You should have instantiated with “Nemeton-Dagda2”
                  as a memo. You don&apos;t need to do anything else.
                </p>
              )
            },
            {
              id: 'documentation',
              title: 'Documentation, useful links',
              contentDescription: (
                <ul>
                  <li>
                    &quot;Beyond Traditional Governance&quot; article:{' '}
                    <a href={beyondTraditionalGovernanceUrl} rel="noreferrer" target="_blank">
                      {beyondTraditionalGovernanceUrl}
                    </a>
                  </li>
                  <li>
                    “Storage” Service example:{' '}
                    <a href={githubStorageServiceUrl} rel="noreferrer" target="_blank">
                      {githubStorageServiceUrl}
                    </a>
                  </li>
                  <li>
                    “text_csv” media type and “igp” tagged Dataset example:{' '}
                    <a href={githubDatasetUrl} rel="noreferrer" target="_blank">
                      {githubDatasetUrl}
                    </a>
                  </li>
                  <li>
                    Prolog tutorial:{' '}
                    <a href={tutorialsPrologUrl} rel="noreferrer" target="_blank">
                      {tutorialsPrologUrl}
                    </a>
                  </li>
                  <li>
                    “Leverage the ontology” tutorial:{' '}
                    <a href={tutorialsOntologyUrl} rel="noreferrer" target="_blank">
                      {tutorialsOntologyUrl}
                    </a>{' '}
                  </li>
                </ul>
              )
            }
          ],
          taskDuration: {
            from: '2023-07-12T12:00:00Z',
            to: '2023-08-30T12:00:00Z'
          }
        },
        {
          taskName: 'Build a web interface to interact with the OKP4 blockchain',
          taskContent: [
            {
              id: 'description',
              title: 'Description',
              contentDescription: (
                <>
                  <p>
                    (Difficulty: 4/5)
                    <br /> With the wisdom of data referencing now in our grasp and Prolog - the
                    ancient druidic tongue for setting consent for sharing nature&apos;s gifts - in
                    our command, the dawn of creation is upon us. It is time to craft portals of
                    interaction, intuitive as the forest path, to empower all who wander in our
                    digital grove to share and dictate the sacred laws according to the innate
                    properties of the metadata. Like ancient druidic symbols carved on stones, these
                    user interfaces shall guide and simplify the journey for all seekers of
                    knowledge.
                  </p>
                  <p>
                    Create a front-end application to list and submit shared resources and rules
                    registered in the blockchain. You should then be able to retrieve data you
                    previously submitted and even use it to reference resources or add a new Prolog
                    program (resources rules or utils).
                  </p>
                  <p>Your web interface should at least have the following features:</p>
                  <ul>
                    <li>OKP4 wallet connection button (should support Keplr wallet).</li>
                    <li>
                      List all rules submitted (Prolog programs in <span>law-stone</span>{' '}
                      instantiations, <span>CODE_ID = {smartContractLawStoneCodeID}</span>) with the
                      following properties: smart contract address, creator address, instantiated
                      date and decoded Prolog program. This list should be ordered by instantiated
                      date and filterable on the okp4 creator address.
                    </li>
                    <li>
                      List all data ontology submitted (from transactions with <span>insert</span>{' '}
                      wasm action) with the following properties: smart contract address, sender
                      address, transaction date and decoded data. This list should be ordered by
                      transaction date and filterable on the okp4 sender address.
                    </li>
                    <li>
                      <span>law-stone</span> instantiation from a Prolog file and/or code form (you
                      can set {objectariumAddress} as default storage address, or{' '}
                      <a href={testnetContractListUrl} rel="noreferrer" target="_blank">
                        any other available <span>objectarium</span> instance
                      </a>
                      ).
                    </li>
                    <li>
                      RDF triples insertion from a Turtle file and/or code form. You should check if
                      the user instantiated a <span>cognitarium</span> smart contract. If not, the
                      UI should propose to create one before using it to insert ontology data.
                    </li>
                  </ul>
                  <p>
                    For every transaction the UI submits, you should set in <span>memo</span>
                    “Nemeton-Dagda3-GH_REPO” with <span>GH_REPO</span> as the Github repo link of
                    the web interface you are developing.
                  </p>
                  <p>
                    You can use any framework to develop your web interface. We advise you to look
                    at the{' '}
                    <a href={grazDocsUrl} rel="noreferrer" target="_blank">
                      graz
                    </a>{' '}
                    React hooks. For example, to instantiate a <span>law-stone</span> with a{' '}
                    <span>memo</span>:
                  </p>
                  <pre>
                    import {'{'} useInstantiateContract {'}'} from &quot;graz&quot;;
                    <br />
                    <br />
                    const {'{'} instantiateContract {'}'} = useInstantiateContract({'{'} <br />{' '}
                    codeId: 5, <br /> onError: () {'=>'} {'{}'}, <br /> onMutate: () {'=>'} {'{}'},{' '}
                    <br /> onSuccess: () {'=>'} {'{}'} <br />
                    {'}'}); <br /> <br />
                    instantiateContract({'{'} <br /> msg: {'{'} <br /> program: &quot;base64 prolog
                    program&quot;, <br /> {'  '}storage_address: &quot;
                    {objectariumAddress}&quot;
                    <br /> {'}'},<br /> options: {'{'}
                    <br /> {'   '}memo:
                    &quot;Nemeton-Dagda3-http://your-github-repo-with-your-OKP4-addr-in-README.link&quot;
                    <br /> {'}'}
                    <br />
                    {'}'});
                  </pre>
                </>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: (
                <>
                  <p>
                    150 000 $KNOW tokens (0,075% of the total supply) + an “OKP4 interface
                    innovator” POAP (Stargaze badge) per validated web interface.
                  </p>
                  <p>
                    300,000 $KNOW will be sent to builders for this task. OKP4 team will manually
                    evaluate the user interfaces and reward the two most relevant ones.
                  </p>
                  <p>
                    The web interface GitHub repository README should provide an OKP4 address where
                    to send the POAP and the $KNOW tokens. Wallets from elected interfaces will
                    receive the on-chain badge on August 31, and the $KNOW tokens will be sent out
                    when the mainnet is launched (scheduled for late 2023).
                  </p>
                </>
              )
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <p>
                  Your web interface should propose the required functionalities. Rewards will be
                  sent in priority to developers submitting early and/or providing the best UX
                  and/or further features.
                </p>
              )
            },
            {
              id: 'submit',
              title: 'How to Submit',
              contentDescription: (
                <p>
                  All the transactions executed from the web application should have
                  “Nemeton-Dagda3” and your Github repository link in the transaction{' '}
                  <span>memo</span>. At least one transaction should have been executed from the
                  front end. Your Github repository should be an open-source project with a clear
                  README to launch the web application locally. To receive the rewards, the README
                  should contain your OKP4 address.
                </p>
              )
            },
            {
              id: 'documentation',
              title: 'Documentation, useful links',
              contentDescription: (
                <ul>
                  <li>
                    OKP4 smart contracts GitHub repository:{' '}
                    <a href={githubContractsUrl} rel="noreferrer" target="_blank">
                      {githubContractsUrl}
                    </a>
                  </li>
                  <li>
                    Graz documentation:{' '}
                    <a href={grazDocsUrl} rel="noreferrer" target="_blank">
                      {grazDocsUrl}
                    </a>
                  </li>
                  <li>
                    “Interactions with the CLI”:{' '}
                    <a href={tutorialsCliUrl} rel="noreferrer" target="_blank">
                      {tutorialsCliUrl}
                    </a>
                  </li>
                  <li>
                    ”Explore the smart contracts” tutorial:{' '}
                    <a href={smartContractTutorialUrl} rel="noreferrer" target="_blank">
                      {smartContractTutorialUrl}
                    </a>
                  </li>
                </ul>
              )
            }
          ],
          taskDuration: {
            from: '2023-07-12T12:00:00Z',
            to: '2023-08-30T12:00:00Z'
          }
        },
        {
          taskName:
            'Open contribution, tweet a thread to explain the relevance of your OKP4 project',
          taskContent: [
            {
              id: 'description',
              title: 'Description',
              contentDescription: (
                <>
                  <p>
                    (Difficulty: 4/5)
                    <br /> Much like the boundless forests of old, the sacred protocol welcomes
                    contributions from every pilgrim. The Dagda challenges are stepping stones
                    shaped to help you navigate the undergrowth and grasp the fundamental lore.
                    Having now tamed the mystical beast of technology, you are as free as a druid in
                    his grove. Go forth, conjure up your own vision, and let your ideas bloom like a
                    sacred mistletoe on the mighty oaks of our digital woodland.
                  </p>
                  <p>
                    Get the OKP4 blockchain on your own. Do you think something is missing and
                    should be developed? Build it and get rewarded for it!
                  </p>
                  <p>Tweet a thread with the following:</p>
                  <ul>
                    <li>#OKP4BuildersProgram hashtag and @OKP4_Protocol tag</li>
                    <li>Link to the Github repo</li>
                    <li>Describe your project, and explain why what you developed is relevant</li>
                  </ul>
                  <p>Need inspiration? You could:</p>
                  <ul>
                    <li>Build on-chain analytics dashboards</li>
                    <li>
                      Enhance your web interface to generate a Prolog code with rules composed from
                      form fields
                    </li>
                    <li>
                      Enhance your web interface to generate RDF triples from metadata set in form
                      fields
                    </li>
                    <li>
                      Develop VSCode extension to evaluate rules (Prolog program) directly from the
                      editor
                    </li>
                    <li>… and anything else you can imagine</li>
                  </ul>
                </>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: (
                <>
                  <p>
                    100,000 $KNOW (0,05% of the total supply) + an “OKP4 visionary contributor” POAP
                    (Stargaze badge) per validated project.
                  </p>
                  <p>
                    300,000 $KNOW will be sent to builders for this task. OKP4 team will manually
                    evaluate the user interfaces and rewards the three most relevant ones.
                  </p>
                  <p>
                    Your GitHub repo README should provide an OKP4 address where to send the POAP
                    and the $KNOW tokens. Wallets from elected projects will receive the on-chain
                    badge on August 31, and the $KNOW tokens will be sent out when the mainnet is
                    launched (scheduled for late 2023).
                  </p>
                </>
              )
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <p>
                  Your tweet and README should clearly state the problem you want to solve and why
                  it is a good contribution to the OKP4 community. Rewards will be sent in priority
                  to developers submitting innovative applications. Feel free to{' '}
                  <a href={nemetonSupportUrl} rel="noreferrer" target="_blank">
                    contact us
                  </a>{' '}
                  if you want to discuss your project before developing it.
                </p>
              )
            },
            {
              id: 'submit',
              title: 'How to Submit',
              contentDescription: (
                <p>
                  Send the tweet as required in the &apos;Description&apos; part above. You
                  don&apos;t need to do anything else.
                </p>
              )
            },
            {
              id: 'documentation',
              title: 'Documentation, useful links',
              contentDescription: (
                <ul>
                  <li>
                    OKP4 documentation:{' '}
                    <a href={okp4WebsiteDocsUrl} rel="noreferrer" target="_blank">
                      {okp4WebsiteDocsUrl}
                    </a>
                  </li>
                </ul>
              )
            }
          ],
          taskDuration: {
            from: '2023-07-12T12:00:00Z',
            to: '2023-08-30T12:00:00Z'
          }
        }
      ]
    }
  ]
})
