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
      ontologyDescriptionUrl,
      swiPrologUrl,
      swiPrologFunctionsUrl,
      objectariumAddress,
      objectariumID,
      smartContractLawStoneCodeID,
      smartContractCognitariumCodeID,
      chainAddress,
      tutorialsPrologUrl,
      tutorialsCliUrl
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
    }
  ],
  results: [
    {
      rank: 1,
      valoper: 'okp41u6vp630kpjpxqp2p6xwagtlkzq58tw3zadwrgu',
      poap: [
        'OKP4 Ontologist Apprentice',
        'OKP4 Governance Creator',
        'Dagda Servant',
        'OKP4 Law-Stone Builder',
        'OKP4 Objectarium Explorer',
        'OKP4 Young Druid'
      ],
      know: 30000
    },
    {
      rank: 2,
      valoper: 'okp41wy8ywt98sv5pmsg873rct4pxtw0ntxuwxdtzen',
      poap: [
        'OKP4 Ontologist Apprentice',
        'OKP4 Governance Creator',
        'OKP4 Law-Stone Builder',
        'OKP4 Objectarium Explorer',
        'OKP4 Young Druid'
      ],
      know: 30000
    },
    {
      rank: 3,
      valoper: 'okp41hkf8uj3yg9v2dwdq6ygapf7gyjnjvuamgz6m0g',
      poap: ['OKP4 Law-Stone Builder', 'OKP4 Objectarium Explorer', 'OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 3,
      valoper: 'okp413pn0qmuxferwvjv0yzssedlkxff77ddtcwfefd',
      poap: ['OKP4 Law-Stone Builder', 'OKP4 Objectarium Explorer', 'OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 4,
      valoper: 'okp41cvclz3u9zrpfvrhymds9pjp63x94wcujzlaaw0',
      poap: ['OKP4 Objectarium Explorer', 'OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 4,
      valoper: 'okp413dgy7rtjjvvlkzu2upgtntdyzy4hnr6efarspq',
      poap: ['OKP4 Objectarium Explorer', 'OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 4,
      valoper: 'okp41pa7ngqmqz5z4x88fd273kha89mtjkncnm5nwnx',
      poap: ['OKP4 Objectarium Explorer', 'OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 4,
      valoper: 'okp41htsmzdnjf9zgrpnmyjzd04w3ql5mnq9xsaek64',
      poap: ['OKP4 Objectarium Explorer', 'OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41d26y0n0y84yj2r9gzeyudzd6v5c8z6m7wmryer',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp414y9j2e7lqy0cr3nd5w73esuqtx07pse3ts5au4',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp410t2s8nzagk3lf9ydkn0t3ur5f0qcsy3fx6wdsh',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41wr7xfnm65keadtnu2asucqur2w54vdvder0du0',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41482yd7n04xk3l77wkaq7hntyq0xlr4sjjyjafz',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp414u09zxsxw752dfrzy7g4zxj6d4mprv4rmyv6lt',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp4102yjeeher64ttnu27fcvd0ah774ywsrp3qst4e',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp4127ey4un5zdfylq0a9fwgp8z27av5at0y8k0wrc',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41czkq2rg372tyrkdw2cpczgkd9k7x7zrgqcv8g6',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp416ve0fkf8ew8hezevhmyfg8ftkuzrx37chest4z',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41qaqzdzme4apm3d6f2lrg6espuay3wa0s5dap3x',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41vplplzclfmlg7pyutnau7p0w40gv0lp7nucdy3',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41srjjchn57narjr7gjxntrtdkegrx96mr495a77',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41hxlrt94n2nj6acpvk60wz8wdr4tgn84sk5a7ln',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41s7pz4rc7sq4hj88ljcruvrh4v7hk28paf6dm30',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41qcual5kgmw3gqc9q22hlp0aluc3t7rnsvlux5l',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41k5pyrxxd3usuneeeh4gssqh7sw0f73kv09dxql',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41wr6s62fgs7asqjt3yy566rlrtakujc8r7l7nwr',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41mde8kzhdc80qdxsx20rf4jfxhfnwxk4a7u29mh',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41hy5f3vftpj8lm9y8f5k4p38w73xu73rdeg0y3m',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41m8f8qnr2h5mdwu8ntjjrtyjcac74tjs62xahqz',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41vmv0tle77ag7r4v2myktnlj6a94uhel0jaf5af',
      poap: ['OKP4 Young Druid'],
      know: 0
    },
    {
      rank: 5,
      valoper: 'okp41wknzm45q885vyp7ynr6ld0u0h2ah4mpv60lq58',
      poap: ['OKP4 Young Druid'],
      know: 0
    }
  ]
})
