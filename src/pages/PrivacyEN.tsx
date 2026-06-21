export default function PrivacyEN() {
  return (
    <main className="legal">
      <h1>Privacy Policy</h1>
      <p className="meta">Last updated: 21 June 2026</p>

      <p>
        This Privacy Policy explains how the operator of the Saxya app (hereinafter:{' '}
        <strong>“Saxya”</strong>, <strong>“we”</strong>, <strong>“us”</strong>) processes personal
        data of users of the Saxya mobile application (available on the App Store and Google Play)
        and the website saxya.com (together: the <strong>“Service”</strong>).
      </p>

      <h2>1. Data controller</h2>
      <p>
        The controller of your personal data is:{' '}
        <strong>
          GREGMAR Grzegorz Czudowski, ul. Sienkiewicza 22B, 64-000 Kościan, Poland. Tax ID (NIP):
          4970074627
        </strong>
        . Privacy contact:{' '}
        <a href="mailto:contact@gregmarapps.com">contact@gregmarapps.com</a>.
      </p>

      <h2>2. What the Service is about</h2>
      <p>
        Saxya is a mobile application that lets you have text, voice and image-based conversations
        with AI-generated characters. The app also lets you purchase a <strong>Premium</strong>{' '}
        subscription and the in-app currency <strong>“Diamonds”</strong> (one-time in-app
        purchases).
      </p>

      <h2>3. Data we process</h2>

      <h3>3.1. Data you provide</h3>
      <ul>
        <li>the content of your messages in AI chats and group chats,</li>
        <li>names, descriptions and settings of characters and scenarios you create,</li>
        <li>app configuration preferences (selected voices, suggestions, language, etc.),</li>
        <li>optional data shared in surveys, feedback and support tickets,</li>
        <li>your email address if you subscribe to our newsletter or contact us.</li>
      </ul>

      <h3>3.2. Data collected automatically</h3>
      <ul>
        <li>
          a <strong>Device ID</strong> generated locally on your device and used as your
          pseudonymous identifier in the Service (e.g. for Diamond balance and subscription status),
        </li>
        <li>device country and language (based on system settings),</li>
        <li>
          IDFA (iOS) / Advertising ID (Android) — only if you consent through the iOS App Tracking
          Transparency prompt or the Android equivalent,
        </li>
        <li>device model, OS, app version, install identifiers,</li>
        <li>
          analytics events about how you use the app (e.g. app open, chat opened, message sent,
          purchase, Diamond spend, onboarding completion, terms acceptance, streak activation),
        </li>
        <li>error and diagnostic logs (stack traces, screen context) to detect crashes.</li>
      </ul>

      <h3>3.3. Payment data</h3>
      <p>
        All payments (subscriptions and Diamonds) are processed exclusively by the{' '}
        <strong>Apple App Store</strong> or <strong>Google Play</strong>. We do not receive or store
        your card details. We receive only a transaction identifier, product identifier, country of
        purchase, subscription status and purchase receipt necessary to validate Premium entitlement
        and credit Diamonds.
      </p>

      <h2>4. Purposes and legal bases (GDPR)</h2>
      <ul>
        <li>
          <strong>providing the Service</strong> (AI chats, image generation, voice calls,
          subscriptions, Diamonds) — Art. 6(1)(b) GDPR (contract performance);
        </li>
        <li>
          <strong>safety and content moderation</strong> (detecting abuse, prohibited content,
          protection of minors) — Art. 6(1)(c) and (f) GDPR (legal obligation, legitimate interest);
        </li>
        <li>
          <strong>analytics and product improvement</strong> — Art. 6(1)(f) GDPR (legitimate
          interest); on iOS, for SDKs that fall under “tracking” — based on your ATT consent;
        </li>
        <li>
          <strong>marketing and attribution</strong> (campaign measurement, retargeting) — your
          consent (Art. 6(1)(a) GDPR);
        </li>
        <li>
          <strong>billing, complaints, legal claims</strong> — Art. 6(1)(c) and (f) GDPR;
        </li>
        <li>
          <strong>newsletter</strong> — your consent (Art. 6(1)(a) GDPR).
        </li>
      </ul>

      <h2>5. AI conversation content</h2>
      <p>
        Messages you send to AI characters are transmitted to LLM providers (see section 7) to
        generate responses. We transmit the minimum context necessary. Chat content may be stored
        locally on your device (SQLite) and on our servers as needed for moderation, abuse
        detection, billing and diagnostics. We do not use your conversation content to train models
        without a separate, explicit consent.
      </p>

      <h2>6. Adult content and moderation</h2>
      <p>
        The Service may provide content intended for adults (18+). By using it, you confirm that
        you are at least 18 years old. We apply automated content moderation (word and pattern
        filters) and provider-side moderation to block prohibited content — in particular, any
        content involving minors, illegal content, content inciting violence or violating
        third-party rights. Violations may be reported to competent authorities.
      </p>

      <h2>7. Recipients and processors</h2>
      <p>We use the following trusted providers (processors):</p>
      <ul>
        <li>
          <strong>Apple Inc.</strong> and <strong>Google LLC</strong> — app distribution,
          subscription and in-app purchase billing (StoreKit, Google Play Billing);
        </li>
        <li>
          <strong>Google / Firebase</strong> (Google Ireland Ltd) — Firebase Analytics, Remote
          Config, app infrastructure;
        </li>
        <li>
          <strong>Meta Platforms Ireland Ltd</strong> — Meta SDK (Facebook SDK) for campaign
          measurement and install attribution;
        </li>
        <li>
          <strong>AppsFlyer Ltd</strong> — marketing attribution and campaign measurement;
        </li>
        <li>
          <strong>TikTok / ByteDance</strong> — TikTok Business SDK for TikTok campaign measurement;
        </li>
        <li>
          <strong>Functional Software, Inc. (Sentry)</strong> — crash and error reporting;
        </li>
        <li>
          AI model providers (LLM, TTS, image generation), including: <strong>OpenAI</strong>,{' '}
          <strong>Google (Gemini)</strong>, <strong>xAI (Grok)</strong>, <strong>DeepSeek</strong>,{' '}
          <strong>OpenRouter</strong>, and providers of text-to-speech and image generation —
          processing the content of your messages and prompt parameters solely to generate the
          response;
        </li>
        <li>cloud infrastructure and hosting providers for our backend;</li>
        <li>customer support tooling providers.</li>
      </ul>

      <h2>8. Transfers outside the EEA</h2>
      <p>
        Some recipients (e.g. OpenAI, Google, Meta, TikTok, Sentry, AppsFlyer) are located outside
        the European Economic Area, in particular in the USA. Such transfers rely on the European
        Commission’s Standard Contractual Clauses (SCC), adequacy decisions (including the EU-US
        Data Privacy Framework) or other mechanisms under Art. 46 GDPR.
      </p>

      <h2>9. Retention</h2>
      <ul>
        <li>chat content on your device — until you delete the app or its data;</li>
        <li>backend-side device data — until you withdraw consent, request deletion, or for as long as required to provide the Service;</li>
        <li>billing and tax data — for the statutory period (typically 5 years);</li>
        <li>error logs — up to 90 days;</li>
        <li>analytics data — according to the retention settings of the analytics tools (typically 14–26 months).</li>
      </ul>

      <h2>10. Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>access your data,</li>
        <li>rectification,</li>
        <li>erasure (“right to be forgotten”),</li>
        <li>restriction of processing,</li>
        <li>data portability,</li>
        <li>object to processing based on legitimate interest,</li>
        <li>withdraw your consent at any time (without affecting the lawfulness of prior processing),</li>
        <li>lodge a complaint with a supervisory authority — in Poland, the President of the Personal Data Protection Office (UODO, ul. Stawki 2, 00-193 Warsaw).</li>
      </ul>
      <p>
        To exercise your rights, write to{' '}
        <a href="mailto:contact@saxya.com">contact@saxya.com</a>. Please include your Device ID,
        which you can find in the app under “Settings”.
      </p>

      <h2>11. Cookies and local storage</h2>
      <p>
        The mobile app does not use cookies in the browser sense; it stores data locally
        (AsyncStorage, SQLite) to preserve chat history, preferences and purchase status. The
        saxya.com website does not use marketing cookies.
      </p>

      <h2>12. Children</h2>
      <p>
        The Service is not directed at persons under 18. If we learn that we hold data of a minor,
        we will delete it without undue delay.
      </p>

      <h2>13. Security</h2>
      <p>
        We use appropriate technical and organisational measures, including TLS encryption, access
        controls and security monitoring. No system is 100% secure — please be cautious about
        sharing sensitive content in chats.
      </p>

      <h2>14. Changes to this policy</h2>
      <p>
        We may update this policy. We will announce material changes in the app or on saxya.com at
        least 14 days in advance.
      </p>

      <h2>15. Contact</h2>
      <p>
        Email: <a href="mailto:contact@saxya.com">contact@saxya.com</a>
      </p>
    </main>
  );
}
