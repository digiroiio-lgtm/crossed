import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Crossed Privacy Policy — how we collect, use, and protect your data.",
};

const lastUpdated = "July 2024";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto container-padding">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 text-xs font-medium mb-6">
            ⚠️ Draft — Requires legal review before launch
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">

          <p className="text-base leading-relaxed">
            Crossed (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and protect information about
            you when you use our website and services.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Name and email address (when joining our waitlist)</li>
              <li>City or location (optional, when provided)</li>
              <li>Use case preferences (when provided)</li>
              <li>Messages sent through our contact form</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Waitlist Data</h2>
            <p>
              When you join our waitlist, we collect your name, email address, and optionally
              your city and intended use case. This information is used solely to notify you
              of our launch and to understand our user base. We will not sell or share this
              data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. App Usage Data</h2>
            <p>
              When the Crossed app is available, we may collect information about how you
              use the app, including features accessed, interactions performed, and technical
              information such as device type and operating system. This data is used to
              improve the service and is processed in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Location Data</h2>
            <p>
              Location data is central to the Crossed experience. We collect location
              information only when you explicitly choose to add it to a Memory. Location
              data is stored privately and is not shared with other users without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Memories</h2>
            <p>
              Memories you create in Crossed are private by default. They are stored securely
              and are only visible to you unless you explicitly choose to initiate a reconnection.
              We do not analyze, sell, or use the content of your Memories for advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Messaging</h2>
            <p>
              Messaging between users only becomes possible when both parties have mutually
              opted in to reconnect. Message content is stored securely and is not read
              by Crossed staff except where required by law or to investigate abuse reports.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Cookies and Analytics</h2>
            <p>
              We use minimal cookies necessary for the functioning of our website. We may use
              analytics tools (such as Vercel Analytics) to understand aggregate usage patterns.
              These tools are configured to collect anonymized data only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to provide our services
              or as required by law. Waitlist data will be deleted within 12 months of our launch
              unless you become a registered user. You may request deletion of your data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact</h2>
            <p>
              For privacy-related inquiries, please contact us at{" "}
              <a href="mailto:privacy@crossedapp.co" className="text-primary hover:underline">
                privacy@crossedapp.co
              </a>
              .
            </p>
          </section>

          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-sm text-amber-700 dark:text-amber-400 mt-8">
            <strong>Note:</strong> This is a draft privacy policy and requires review by a
            qualified legal professional before the app launches publicly. It does not constitute
            legal advice.
          </div>
        </div>
      </div>
    </div>
  );
}
