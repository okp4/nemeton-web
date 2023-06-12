import { getPhaseStatus } from '@/utils'
import type { PhasesConfig } from '@/types/config.type'
import type { PhaseDTO } from './dto.type'

export const samhain = ({
  samhain: {
    startDate,
    endDate,
    urls: {
      keplrWalletExtensionUrl,
      explorerWalletUrl,
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
      objectariumAddress
    }
  }
}: PhasesConfig): PhaseDTO => ({
  number: 5,
  phaseName: 'samhain',
  phaseDescription:
    'Samhain is no longer only for validators but for builders too and its main objective is the emergence of uses and applications of the OKP4 protocol.',
  status: getPhaseStatus(startDate, endDate),
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
                  claim $KNOW tokens from the faucet and send 0.01 KNOW to this address: okp4….
                </p>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: <p>An “OKP4 avant gardist user” POAP (Stargaze badge)</p>
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
                  You have to send 0.05 KNOW to the OKP4 address above; you don’t need to do
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
                    <a href={explorerWalletUrl} rel="noreferrer" target="_blank">
                      {explorerWalletUrl}
                    </a>
                  </li>
                  <li>
                    Faucet:{' '}
                    <a href={faucetUrl} rel="noreferrer" target="_blank">
                      {faucetUrl}
                    </a>
                  </li>
                  <li>”Get started with OKP4 protocol: Your first transaction” tutorial</li>
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
                  for the previous task. Fetch object from the <span>objectarium</span> instance
                  deployed at the <span>{objectariumAddress}</span>
                  address, with the id …. Decode the base64 message, replace the okp4 address in it
                  by yours. Store this new message in base64. You&apos;ll have to execute a
                  transaction to the <span>objectarium</span> smart contract. The object should be
                  pinned.
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
                  <li>”Get started with OKP4 protocol: how to use the CLI” tutorial</li>
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
                  <span>okp4rocks</span> as a<span>wesome_addresses</span>. Authorize{' '}
                  <span>get_vip_access</span>
                  for these addresses only. Add these governance rules on-chain; instantiate from a
                  <span>law stone</span> smart contract (<span>CODE_ID = …</span>).
                </p>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: <p>An “OKP4 governor trainee” POAP (Stargaze badge)</p>
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <>
                  <p>
                    The instantiate transaction should be from the address you used to complete task
                    1.
                    <br /> A query like this one, with your deployed smart address as{' '}
                    <span>$CONTRACT_ADDR</span>, should return <span>true</span>:
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
                  <li>”Get started with OKP4 protocol: governance rules with Prolog” tutorial</li>
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
                  VIP access only during the day (07:00 - 22:00 UTC). Add these governance rules
                  on-chain; instantiate from a <span>law stone</span> smart contract (
                  <span>CODE_ID = …</span>).
                </p>
              )
            },
            {
              id: 'rewards',
              title: 'Rewards',
              contentDescription: (
                <p>
                  XX points + an “OKP4 time master” POAP (Stargaze badge) for the first one to give
                  a valid solution
                </p>
              )
            },
            {
              id: 'criteria',
              title: 'Judging Criteria',
              contentDescription: (
                <>
                  <p>
                    The instantiate transaction should be from the address you used to complete task
                    2.
                    <br />A query like this one, with your deployed smart address as{' '}
                    <span>$CONTRACT_ADDR</span>, should return <span>true</span> between 07:00 and
                    22:00 only (UTC, any day).
                  </p>
                  <pre>
                    okp4d query wasm contract-state smart $CONTRACT_ADDR
                    <br /> &quot;{'{'}\&quot;ask\&quot;: {'{'}\&quot;query\&quot;:
                    \&quot;an(apos;get_vip_accessapos;,
                    &apos;did:key:okp4rocks7en82gmzfm259y6z93r9qe63l25dfwwng6&apos;).\&quot;{'}}'}
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
                  XX points per validated template + an “OKP4 avant-gardist templator” POAP
                  (Stargaze badge)
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
                  <li>”Get started with OKP4 protocol: governance rules with Prolog” tutorial</li>
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
                    <span>CODE_ID = …</span>).
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
              contentDescription: <p>An “OKP4 ontologist trainee“ POAP (Stargaze POAP)</p>
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
                    ”Get started with OKP4 protocol: describe shared resources with their related
                    governance and service executions using RDF triples” tutorial
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
  ]
})
