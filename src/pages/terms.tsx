import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import type { Config } from '../types/config.type'
import { config } from '../lib/config'

export type TermsProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const privacyUrl = '/privacy#privacy-cookie-policy'

const Terms: NextPage<TermsProps> = props => {
  const { urls } = props
  const {
    socialMediaUrls: { discordUrl },
    mailAddresses: { contact },
    licenceUrls: { blockchainLicenceUrl, codeLicenceUrl, assetsLicenceUrl },
    termsUrls: { arbitrageUrl, arbitrageRulesUrl }
  } = urls

  return (
    <div className="okp4-nemeton-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="okp4-nemeton-web-page-content-container" id="terms-conditions">
          <h1>Terms & conditions</h1>

          <div className="okp4-nemeton-web-page-terms-update">
            <div className="okp4-nemeton-web-page-terms-update-title" id="update-jan-11-2023">
              <h2>Update</h2>
              <h3>Jan 11th 2023</h3>
            </div>
            <p>
              In order to maintain the integrity and efficiency of the Nemeton program, OKP4 has
              implemented the following terms and conditions for validator nodes:
            </p>
            <p>
              If a validator node fails to validate a block for a consecutive period of{' '}
              <span className="okp4-nemeton-web-bold-text">
                1,000,000 blocks (approximately 11.5 days), OKP4 reserves the right to terminate the
                participant&apos;s participation
              </span>{' '}
              in the Nemeton program and remove them from the leaderboard. This is to ensure that
              all validator nodes are actively contributing to the network and that the program is
              operating in an optimal manner.
            </p>
            <p>
              If OKP4 decides to terminate a participant&apos;s participation, the participant will
              be notified via Discord (and other relevant channels, if applicable) and will be given
              a 72-hour grace period to validate at least one block using their validator node. This
              grace period is intended to provide the participant with an opportunity to address any
              issues that may have arisen with their node and to confirm their continued
              participation in the program.
            </p>
            <p>
              If the participant fails to validate a block within the 72-hour grace period, their
              participation in the program will be terminated, and they will forfeit any points
              earned. The participant may still apply to rejoin the program in the future, however,
              any points earned will not be restored.
            </p>
            <p>
              It is important to note that this policy is designed to allow willing participants to
              continue their participation and to provide an opportunity for willing candidates to
              join.
            </p>
          </div>

          <p>
            These Nemeton Testnet participation Terms & Conditions (the &quot;Terms&quot;) apply to
            your access to and use of the websites, platform, software, technologies, features and
            other online products and services (collectively, the &quot;OKP4 Services&quot; or
            &quot;Services&quot;) provided or made available by OKP4 SAS, a French company
            registered under number 842765356 and whose registered office is located at 1 passage de
            l&apos;Europe - 31400 Toulouse - France (the &quot;Company&quot;, &quot;OKP4&quot;, or
            &quot;we&quot;) in connection with the Testnet (&quot;Testnet&quot;, or
            &quot;Nemeton&quot;).
          </p>

          <p>
            The Nemeton program is designed to improve the operational experience, security, and
            design of the OKP4 mainnet protocol as well as to expose potential issues and improve
            the experience of participants prior to the launch of the OKP4 mainnet and OKP4 DAO
            operation.
          </p>

          <ol>
            <li>
              <h2>Agreement on the conditions</h2>
            </li>
            <p>
              By accessing or using our OKP4 Services, or by participating in our Testnet, you agree
              to these Terms and Conditions as well as our{' '}
              <Link href={privacyUrl}>Privacy Policy</Link> and any other agreements or terms set
              forth by OKP4. These Terms constitute a binding obligation between you and OKP4. If
              you do not agree to these Terms, do not use our Services; if you do use our Services,
              you accept this Agreement. If you have any questions about these Terms, the Services
              or the Testnet, please contact us at <a href={`mailto:${contact}`}>{contact}</a>.
            </p>
            <li>
              <h2>Privacy Policy</h2>
            </li>
            <p>
              Please refer to our <Link href={privacyUrl}>Privacy Policy</Link> for more details on
              what information OKP4 may collect, use, or disclose and under what circumstances. You
              acknowledge and agree that your participation in Nemeton is subject to this Privacy
              Policy.
            </p>
            <li>
              <h2>Change to the Terms</h2>
            </li>
            <p>
              OKP4, in its sole discretion, may update the Terms at any time. In that event, OKP4
              will provide notice either by posting the updated Terms on its website, on any OKP4
              blog or forum used for information sharing, or by other means of communication. It is
              important that you review all updated Terms. If you continue to participate in Nemeton
              after OKP4 has posted updated Terms, you agree to be bound by the new Terms. If you do
              not agree to be bound by the new Terms, you will not be able to participate in
              Nemeton.
            </p>
            <li>
              <h2>Duration of the Testnet</h2>
            </li>
            <p>
              Nemeton will begin on the date prescribed by OKP4 and will continue until terminated
              by OKP4 in its sole discretion (&quot;Testnet Period&quot;). Notwithstanding any other
              information provided by OKP4 regarding the Testnet (including on its website, blog
              posts or through other communications - forum, Discord, Telegram or other channels),
              OKP4 may modify, suspend or terminate, temporarily or permanently, all or any part of
              the Testnet, at any time and without notice, in its sole discretion (including prior
              to providing any incentives or rewards).
            </p>
            <li>
              <h2>Testnet Eligibility</h2>
            </li>
            <p>
              You may participate in the Testnet only if: (a) you are 18 years of age or older and
              capable of entering into a binding contract with OKP4 ; (b) you are not subject to any
              sanctions administered or enforced by any country or government or otherwise
              designated on a list of prohibited or restricted parties (including, but not limited
              to, lists maintained by the United Nations Security Council, the United States
              Government, the European Union or member states or any other applicable governmental
              authority) or a citizen or organization of, or resident in, a country or territory
              subject to national or international sanctions (including, without limitation, Cuba,
              the Democratic People&apos;s Republic of Korea, the Crimean, Donetsk and Luhansk
              regions, Iran or Syria) ; and (c) you are not barred from participating under
              applicable law. In addition, to be eligible for incentives or rewards in the Testnet,
              you (i) must be an individual or entity, and (ii) must not be an employee, consultant,
              or affiliate of OKP4.
            </p>

            <p>
              Moreover, to participate in Nemeton, participants must demonstrate their ability to
              configure and deploy an OKP4 node to OKP4&apos;s satisfaction, in its sole discretion,
              and will be required to provide certain identifying information (e.g., name, place of
              residence or domicile, date of birth, etc.) and related documentation, and to pass the
              sanctions and watch list check. If you fail to provide such identifying information,
              fail to pass the sanctions and watch list check, and/or fail to demonstrate compliance
              with the requirements hereof, your participation may be terminated, you forfeit any
              incentive or reward, you are not eligible to participate in future Testnet challenges,
              and you are subject to further action or prosecution.
            </p>

            <p>
              From among those applicants who register for the Testnet with incentive and meet all
              eligibility requirements, OKP4 will select Testnet participants in its sole
              discretion, based on criteria determined by OKP4 (including, but not limited to,
              geographic distribution and applicant reputation). By applying or registering, there
              is no promise or guarantee that you will be able to participate in the Testnet.
            </p>

            <p>
              Based on information provided by OKP4 regarding the Testnet (including on its website,
              in blog posts or through other communications (such as forums, Telegram, Discord or
              other channels), OKP4 may change or modify at any time the number of participants who
              may participate in the Testnet or the requirements of the Testnet and may terminate
              the participation of any participant at any time.
            </p>

            <p>
              The Testnet operates in several phases. Your selection or participation in the first
              phase automatically qualifies you for the following phases. If a participant leaves
              the Testnet, we reserve the right to invite a new participant.
            </p>
            <li>
              <h2>Third Party Services</h2>
            </li>
            <p>
              OKP4 may share identifying information and documents with certain third party vendors
              or providers that offer identity verification and sanctions monitoring services and
              watch lists (the &quot;Third Party Services&quot;).
            </p>

            <p>
              You agree that your access to and use of such Third Party Services is governed solely
              by the terms and conditions of such Third Party Services, and OKP4 is not responsible
              for, and makes no representations about, any aspect of such Third Party Services,
              including, without limitation, their content or the manner in which they handle,
              protect, manage or process data or any interaction between you and the provider of
              such Third Party Services. You irrevocably waive any claim against OKP4 with respect
              to such Third Party Services. We are not responsible for any damage or loss caused or
              alleged to be caused by or in connection with your activation, access or use of such
              Third Party Services, or your reliance on the privacy practices, data security
              processes or other policies of such Third Party Services.
            </p>
            <li>
              <h2>Rewards & Incentives</h2>
            </li>
            <p>
              As part of your participation in the Testnet, OKP4 may choose, at its sole discretion,
              to provide certain incentives or rewards to eligible participants for completing
              certain activities, including executing a validation node and meeting certain
              performance criteria or other requirements set by OKP4. More details are available on
              the Nemeton program website. Other contributions to the Testnet may also be rewarded
              by OKP4, at its discretion. These rewards may include OKP4 mainnet tokens; however,
              (i) such OKP4 mainnet tokens will only be provided after the successful launch of the
              mainnet and all tokens provided will be subject to an 18-month linear vesting period,
              (ii) to comply with laws and regulations in accordance to the United States and
              Canada, miners operating as U.S. or Canadian parties will be asked to prove their
              status as an accredited investor prior to receiving any rewards. Notwithstanding any
              other information provided by OKP4 regarding the Testnet (including on its website,
              blog posts or through other communications (such as forums, Telegram, Discord or other
              channels)), OKP4 may, at its sole discretion, change or modify the amounts or types of
              rewards or incentives and/or suspend or terminate, temporarily or permanently, all or
              any part of the incentives or rewards program at any time without notice, and OKP4 may
              remove or reassign any rewards or incentives earned by a participant or choose not to
              provide rewards to a participant.
            </p>

            <p>
              OKP4 reserves the right to block your access to Testnet if you violate any of the
              terms and conditions of the Terms (as determined solely by OKP4) or if you fail to
              complete the required information or provide accurate information; you will not be
              eligible to receive rewards.
            </p>

            <p>
              OKP4 reserves the right to request information about, review and investigate all
              Testnet activities and to disqualify participants if it believes that a participant
              has engaged in abusive, fraudulent, bad faith activity or activity that does not
              comply with Nemeton standards and requirements.
            </p>

            <p>
              You agree that any rewards or incentives received are for your Testnet OKP4 testing
              services.
            </p>
            <li>
              <h2>Taxes</h2>
            </li>
            <p>
              You are responsible for paying all taxes associated with your receipt of any rewards
              (including, if applicable, OKP4 mainnet tokens). You agree to provide OKP4 with any
              additional information and to complete any tax or other forms required in connection
              with your receipt of such rewards.
            </p>

            <p>
              You may suffer adverse tax consequences because of your participation in Nemeton. You
              hereby represent that (i) you have consulted with any tax advisor that you deem
              appropriate in connection with your participation, or that you have had the
              opportunity to obtain tax advice but have chosen not to do so, (ii) OKP4 has not
              provided you with any tax advice in connection with your participation, and (iii) you
              are not relying on OKP4 for any tax advice.
            </p>
            <li>
              <h2>Security & Wallet</h2>
            </li>
            <p>
              You are responsible for maintaining adequate security and control of all identifiers,
              passwords, indicia, personal identification numbers (PINs) or other codes that you use
              to access the Testnet as part of your systems. OKP4 assumes no responsibility for any
              losses resulting from a compromise of your systems or wallet(s).
            </p>

            <p>
              As part of certain phases of Testnet, Mainnet, or as part of providing
              incentives/rewards, OKP4 may send or receive Testnet tokens or rewards on your wallet
              application. In this case, you are responsible for managing the private keys and
              security of your wallet(s). OKP4 does not and will not manage, store, collect or
              otherwise access the private keys of your wallet(s). You are responsible for all
              activities that occur while using your wallet, whether or not you have knowledge of
              them.
            </p>
            <li>
              <h2>Update & Monitoring</h2>
            </li>
            <p>
              We may make improvements, changes, or updates to our Testnet, including, but not
              limited to, changes and updates to the underlying software, infrastructure, security
              protocols, technical configurations or service features (the &quot;Updates&quot;) from
              time to time. Your continued access to and use of our Testnet is subject to such
              Updates and you must accept any patches, system upgrades, bug fixes, feature changes
              or other maintenance work that results from such Updates. We are not responsible for
              any failure on your part to accept and use such Updates in the manner specified or
              required by us. While OKP4 is not obligated to monitor access to or participation in
              the Testnet, it has the right to do so for the purpose of operating the Testnet,
              ensuring compliance with the Terms, and complying with applicable laws or other legal
              requirements.
            </p>
            <li>
              <h2>Testnet tokens & Testnet</h2>
            </li>
            <p>
              No monetary value. As part of your use of Nemeton, you may accumulate &quot;Testnet
              Tokens&quot;, for example through a faucet, which are not, and will never be,
              converted into or accumulated as Mainnet Tokens or any other virtual token or asset.
              Testnet Tokens are virtual objects with no monetary value. Testnet Tokens are not
              currency or property of any kind and are not exchangeable, redeemable, or eligible for
              any fiat or virtual currency or other thing of value. Testnet Tokens are not
              transferable between users outside of the Testnet, and you may not attempt to sell,
              trade or transfer Testnet Tokens outside of the Testnet, or obtain any credit using
              Testnet Tokens. Any attempt to sell, trade or transfer Testnet Tokens outside of the
              Testnet will be null and void.
            </p>

            <p>
              Modification. OKP4 may, in its sole discretion, decide to delete, erase, or otherwise
              withdraw the Testnet at any time without notice, including, without limitation,
              changing the presence, amounts, or any other terms and conditions applicable to
              Testnet Tokens, without any liability to you or other users of the Testnet. OKP4 does
              not guarantee that Testnet Tokens will continue to be offered for any specific period
              and you cannot rely on the continued availability of any Testnet Token. If the Testnet
              expires or terminates, you acknowledge and agree that your access to and use of your
              Testnet Tokens will be terminated, and that all accumulated Testnet Tokens will be
              deleted from the Testnet system. Testnet Tokens will not be converted to future
              rewards offered by OKP4.
            </p>
            <li>
              <h2>Intellectual Property Rights & Feedback</h2>
            </li>
            <p>
              By participating in our Testnet, you agree to abide by the various licenses under
              which our resources are licensed. All right, title, and interest in and to our
              Testnet, including all modifications, enhancements, and improvements thereto, and all
              proprietary rights therein, are subject to the following open-source licenses:
            </p>
            <ul>
              <li>
                <p>
                  All OKP4 elements related to blockchain (mainly, but not limited to, blockchain
                  and smart contracts) are subject to the license{' '}
                  <a href={blockchainLicenceUrl} rel="noreferrer" target="_blank">
                    Apache-2
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Other OKP4 code elements not related to the blockchain are subject to the license{' '}
                  <a href={codeLicenceUrl} rel="noreferrer" target="_blank">
                    BSD 3-Clause
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  The other OKP4 elements of content and other works (documents, images... without
                  limitation) are subject to the license{' '}
                  <a href={assetsLicenceUrl} rel="noreferrer" target="_blank">
                    Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  All other elements of content and other works are under the respective licenses
                  chosen by their respective copyright holders.
                </p>
              </li>
            </ul>
            <p>
              OKP4 welcomes feedback, comments, and suggestions for improvement from Nemeton and
              related OKP4 protocol technologies (&quot;Feedback&quot;). You grant OKP4 a
              non-exclusive, transferable, worldwide, perpetual, irrevocable, fully paid,
              royalty-free license, with the right to sublicense, under any intellectual property
              rights you own or control, to use, copy, modify, create derivative works based on, and
              otherwise exploit the Feedback for any purpose, in any form, format, media, or media
              channel now known or later developed or discovered.
            </p>
            <li>
              <h2>Prohibited Activities</h2>
            </li>
            <p>You shall not (in each case, except as provided in these Terms):</p>
            <ul>
              <li>
                <p>
                  Initiate attacks that violate the rules or policies of your cloud service, data
                  center, or other applicable third party service provider;
                </p>
              </li>
              <li>
                <p>
                  Unless specifically requested by OKP4 as part of a security or similar challenge,
                  disrupt or launch attacks against users of OKP4 Services or the Testnet;
                </p>
              </li>
              <li>
                <p>
                  Disrupt, compromise or otherwise damage data or property belonging to other
                  parties;
                </p>
              </li>
              <li>
                <p>
                  Impersonate any person or entity or falsely represent your affiliation with any
                  person or entity;
                </p>
              </li>
              <li>
                <p>
                  Access accounts or data other than your own (or want you to with the explicit
                  permission of their owners);
                </p>
              </li>
              <li>
                <p>
                  Interfere or attempt to interfere with any user, host or network access,
                  including, without limitation, via means of submitting a virus, overloading,
                  flooding, spamming, creating, encouraging or implementing sibyl attacks;
                </p>
              </li>
              <li>
                <p>Sell or resell the OKP4 Services;</p>
              </li>
              <li>
                <p>
                  Encourage or permit any other person or entity to do any of the foregoing or to
                  violate the Terms.
                </p>
              </li>
            </ul>
            <li>
              <h2>Law Enforcement</h2>
            </li>
            <p>
              You agree to comply with all laws, rules, regulations, and generally accepted
              practices in the relevant jurisdictions (including laws regarding the export of data
              or software to and from France or other relevant countries and all applicable privacy
              and data collection laws and regulations) in connection with your participation in
              Nemeton. To the extent required by law, you are solely responsible for obtaining or
              filing any regulatory approval, authorization, registration, permit or other
              authorization and must comply with the requirements of such authorization.
            </p>
            <li>
              <h2>Warranty Disclaimer</h2>
            </li>
            <p>
              OKP4 makes no representations or warranties of any kind with respect to our Testnet.
              The Testnet is provided &quot;as is&quot; with all faults and without warranty of any
              kind. Without limiting the foregoing, OKP4 expressly disclaims any implied warranties
              of merchantability, fitness for a particular purpose, value, quiet enjoyment, and
              non-infringement, as well as any warranties arising out of the ordinary course of
              business or usage of trade. OKP4 has made no promises or warranties regarding the
              delivery of any future features or functions. Any discussion of future features or
              functions, whether before or after acceptance of these Terms, is for informational
              purposes only and OKP4 has no obligation to provide such features or functions. You
              acknowledge that you have not relied on any representations, promises, assurances or
              warranties that are not set forth in the Terms.
            </p>

            <p>
              You agree and acknowledge that there are risks associated with participating in
              Nemeton, including, but not limited to, the risk of failure of hardware, software and
              internet connections, the risk of introduction of malware, loss of rewards and
              security risks. You agree and acknowledge that OKP4 will not be responsible for any
              loss, failure, interruption, error, distortion, or delay that you may experience while
              participating in the Testnet, however caused. OKP4 will not be responsible for any
              loss and assumes no responsibility for and will not be liable to you for your
              participation in Nemeton.
            </p>

            <p>
              OKP4 does not warrant that Nemeton will meet your requirements or be available on an
              uninterrupted, secure, error-free, or virus-free basis. OKP4 does not warrant the
              quality, accuracy, timeliness, truthfulness, completeness or reliability of any
              information or materials offered in connection with the Testnet. Any rewards or
              incentives you receive (including tokens) in connection with the Testnet may be
              worthless.
            </p>

            <p>You further understand that:</p>
            <ul>
              <li>
                <p>
                  Access to Nemeton may require the use of your personal computer and/or mobile
                  devices, as well as communications with or use of data and storage on such
                  devices. You are responsible for any Internet or cell phone connection charges you
                  may incur in connection with your voluntary participation in Testnet.
                </p>
              </li>
              <li>
                <p>
                  Certain information, including your transaction records on the blockchain, are all
                  public information and may be viewed by anyone, including Testnet participants and
                  non-participants.
                </p>
              </li>
              <li>
                <p>
                  Security and other blockchain audits undertaken by OKP4 or third parties will
                  access user data and may result in loss of data or actions by telecommunications
                  and other third party service providers.
                </p>
              </li>
            </ul>
            <li>
              <h2>Limitation of Liability</h2>
            </li>
            <p>
              To the maximum extent permitted by law, in no event will we or our affiliates,
              suppliers or licensors be liable to you or any third party for any indirect,
              incidental, special or consequential damages, or for any loss of use, loss of profits
              or loss of data arising out of or in connection with these Terms or the Testnet
              program, however caused and regardless of the form of action, whether in contract,
              tort, strict liability or otherwise, even if we or our suppliers or licensors have
              been advised of the possibility of such damages. To the maximum extent permitted by
              law, in no event shall our combined liability, or that of our suppliers and licensors,
              for any claim arising out of or relating to these Terms or the Testnet exceed one
              hundred dollars ($100). Some jurisdictions do not allow limitations of liability, so
              the foregoing limitation may not apply to you.
            </p>

            <p>
              The exclusions and limitations of damages set forth above are fundamental elements of
              the basis of the agreement between OKP4 and you.
            </p>
            <li>
              <h2>Compensation</h2>
            </li>
            <p>
              To the fullest extent permitted by applicable law, you will indemnify, defend and hold
              harmless OKP4 and our subsidiaries and affiliates, and each of our respective
              officers, directors, agents, partners and employees (individually and collectively,
              the &apos;OKP4 Parties&apos;) from and against any and all losses, liabilities,
              claims, demands, damages, expenses or costs (&apos;Claims&apos;) arising out of or
              relating to (i) your access to or use of the OKP4 Services or the Testnet; (ii) your
              violation of these Terms; (iii) your violation, misappropriation or infringement of
              any rights of others (including intellectual property rights or privacy rights); or
              (iv) your conduct in connection with the OKP4 Services or your participation in the
              Testnet. You agree to promptly notify the OKP4 Parties of any third party claims, to
              cooperate with the OKP4 Parties in the defence of such Claims, and to pay all fees,
              costs and expenses associated with the defence of such Claims (including
              attorneys&apos; fees). You also agree that the OKP4 Parties shall have control over
              the defence or settlement, in OKP4&apos;s sole discretion, of any third party claims.
            </p>
            <li>
              <h2>Privacy</h2>
            </li>
            <p>
              As part of the Testnet, you may be entrusted with so-called Confidential Information,
              which will be clearly identified and notified as such. Accordingly, you may not
              reveal, publish, or otherwise disclose the Confidential Information to any third party
              without OKP4&apos;s prior written consent, and you must protect the Confidential
              Information from disclosure using the same degree of care that you use to protect your
              own Confidential Information of the same nature, but in no event using less than
              reasonable care.
            </p>
            <li>
              <h2>Applicable Law</h2>
            </li>
            <p>
              These Terms and any action relating to them shall be governed by the laws of France,
              without regard to its conflict of law provisions. The exclusive jurisdiction for all
              disputes (defined below) shall be Toulouse, and you and OKP4 each waive any objection
              to such jurisdiction and venue.
            </p>
            <li>
              <h2>Dispute Resolution</h2>
            </li>
            <p>
              Please read the following section carefully, as it requires you to arbitrate certain
              disputes and claims with OKP4 and limits the way you may obtain relief from us. No
              class or representative action or arbitration is permitted under this arbitration
              provision. In addition, arbitration prevents you from filing a lawsuit or having a
              trial with a judge.
            </p>

            <p>
              (a) Binding Arbitration of Disputes. We both agree that any dispute, claim, or
              controversy arising out of your participation in the Testnet, use of the OKP4 Services
              or these Terms or the breach, termination, performance, interpretation, or validity
              thereof (collectively, &apos;Disputes&apos;) shall be resolved solely by binding
              individual arbitration and not by any class, representative or consolidated action or
              proceeding. You and OKP4 agree that the Chambre Arbitrale Internationale de Paris,
              France shall govern the interpretation and enforcement of these Terms, and that you
              and OKP4 each waive the right to a trial by judge or to participate in a class action.
              This arbitration provision shall survive the termination of these Terms.
            </p>

            <p>
              (b) Exceptions. As limited exceptions to the above section: (i) we may both seek to
              resolve a dispute in small claims court if it qualifies; and (ii) we both retain the
              right to seek injunctive or other equitable relief from a court to prevent (or enjoin)
              infringement or misappropriation of our intellectual property rights.
            </p>

            <p>
              (c) Conduct of Arbitration and Arbitration Rules. The arbitration shall be conducted
              by the Chambre Arbitrale Internationale de Paris (&apos;CAIP&apos;) under its
              then-current Consumer Arbitration Rules (&apos;CAIP Rules&apos;), unless modified by
              these Terms. The CAIP Rules are available at{' '}
              <a href={arbitrageUrl} rel="noreferrer" target="_blank">
                {arbitrageUrl}
              </a>
              . A party wishing to initiate an arbitration must submit a written request for
              arbitration to CAIP and notify the other party as set forth in the CAIP Rules
              (Arbitration Rules:{' '}
              <a href={arbitrageRulesUrl} rel="noreferrer" target="_blank">
                {arbitrageRulesUrl}
              </a>
              ). The place of arbitration shall be Toulouse. The language of the arbitration shall
              be English. The parties agree that the arbitrator shall have exclusive authority to
              decide all questions relating to the interpretation, applicability, performance, and
              scope of this arbitration agreement.
            </p>

            <p>
              (d) Arbitration Fees. Payment of all filing, administration and arbitration fees will
              be governed by the CAIP rules. If we prevail in the arbitration, we will seek, to a
              reasonable extent, considering the facts in dispute, to recover them from you. If you
              prevail in the arbitration, you will be entitled to an award of attorneys&apos; fees
              and costs to the extent provided by applicable law.
            </p>

            <p>
              (e) Injunctive and Declaratory Relief. Except as provided above, the arbitrator will
              determine all questions of liability on the merits of any claim asserted by either
              party and may grant declaratory or injunctive relief only in favour of the individual
              party seeking relief and only to the extent necessary to provide relief justified by
              that party&apos;s individual claim. To the extent that either you or we prevail on a
              claim and seek public injunctive relief (i.e., injunctive relief whose primary purpose
              and effect is to enjoin unlawful acts that threaten future harm to the public), the
              right to and extent of such relief shall be litigated in a civil court of competent
              jurisdiction and not arbitrated. The parties agree that litigation of any public
              injunction issue shall be stayed pending the outcome of arbitration on the merits of
              any individual claim.
            </p>

            <p>
              (f) Waiver of Class Action; Waiver of Trial by Judge. You and OKP4 agree that each may
              bring Claims against the other only in your or his or her individual capacity, and not
              as a plaintiff or class member in any purported class or representative proceeding. In
              addition, if the parties&apos; Dispute is resolved by arbitration, the arbitrator may
              not consolidate another person&apos;s Claims with your Claims, and may not otherwise
              preside over any form of representative or class proceeding. If this specific
              provision is found to be unenforceable, this entire section on dispute resolution will
              be null and void. You and we both agree to waive the right to demand a trial by a
              judge.
            </p>

            <p>
              (g) Severability. Except as provided above (&apos;Class Action Waiver&apos;), if an
              arbitrator or court of competent jurisdiction determines that any part of these Terms
              is invalid or unenforceable, the remaining portions of these Terms shall continue to
              apply.
            </p>
            <li>
              <h2>Assignment</h2>
            </li>
            <p>
              You may not sell, assign, or transfer any of your rights, duties, or obligations under
              these Terms without our prior written consent. Any attempted assignment or transfer of
              the Terms without such consent will be null and void. We reserve the right to assign
              or transfer these Terms or any of its rights, duties, and obligations hereunder to any
              third party. Subject to the foregoing, these Terms shall be binding upon and inure to
              the benefit of the parties, their successors and permitted assigns.
            </p>
            <li>
              <h2>General Terms</h2>
            </li>
            <p>
              Nothing herein shall constitute an employment, consulting, joint venture, or
              partnership relationship between you and OKP4. If any provision of the Terms is found
              by an arbitrator or court of competent jurisdiction to be invalid or unenforceable,
              that provision will be enforced to the maximum extent permissible, and the remaining
              provisions of the Terms will remain in full force and effect. These Terms reflect the
              entire agreement between the parties with respect to the subject matter hereof and
              supersede all prior agreements, representations, statements, and understandings of the
              parties. The section titles in these Terms are for convenience only and have no legal
              or contractual effect. The use of the word &apos;including&apos; shall be construed to
              mean &apos;including and without limitation&apos;.
            </p>

            <p>
              Notices. Any notices or other communications provided by the Company under the Terms,
              including those regarding changes to the Terms, may be given by posting on the OKP4
              website, blog, or through other communications (such as forums, Telegram, Discord, or
              other channels).
            </p>

            <p>
              Waiver of Rights. OKP4&apos;s failure to enforce any right or provision of these Terms
              shall not be deemed a waiver of such right or provision. A waiver of any such right or
              provision will be effective only if in writing and signed by a duly authorized
              representative of OKP4. Except as expressly provided in these Terms, the exercise by
              either party of any of its remedies under these Terms shall be without prejudice to
              its other remedies under these Terms or otherwise.
            </p>

            <p>
              Contact Information. If you have any questions regarding these Terms or Nemeton,
              please contact <a href={`mailto:${contact}`}>{contact}</a> or join us on our{' '}
              <a href={discordUrl} rel="noreferrer" target="_blank">
                OKP4 Discord server
              </a>
              .
            </p>
          </ol>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<TermsProps> = async () => ({
  props: {
    ...config
  }
})

export default Terms
