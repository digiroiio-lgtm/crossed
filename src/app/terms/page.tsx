import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Crossed Terms of Service — the rules and guidelines for using Crossed.",
};

const lastUpdated = "July 2024";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto container-padding">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 text-xs font-medium mb-6">
            ⚠️ Draft — Requires legal review before launch
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Terms of Service</h1>
          <p className="text-muted-foreground text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <p className="text-base leading-relaxed">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Crossed website and
            services. By using Crossed, you agree to these Terms.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Eligibility</h2>
            <p>
              You must be at least 18 years old to use Crossed. By using our services, you
              represent that you are at least 18 years of age and have the legal capacity to
              enter into these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Account Use</h2>
            <p>
              You are responsible for maintaining the security of your account. You agree to
              provide accurate information and to keep your account credentials secure. You
              are responsible for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Acceptable Use</h2>
            <p>You agree not to use Crossed to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Harass, stalk, or harm other users</li>
              <li>Create fake or misleading encounters or profiles</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to other accounts or systems</li>
              <li>Use the service for commercial solicitation without permission</li>
              <li>Share illegal, harmful, or offensive content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Privacy</h2>
            <p>
              Your use of Crossed is subject to our{" "}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>,
              which is incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. User Content</h2>
            <p>
              You retain ownership of the content you create in Crossed, including your
              Memories and profile information. By using Crossed, you grant us a limited
              license to store, process, and display your content as necessary to provide
              the service.
            </p>
            <p className="mt-2">
              You are solely responsible for the content you create and share through Crossed.
              We reserve the right to remove content that violates these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Subscription (Placeholder)</h2>
            <p>
              Crossed may offer paid subscription tiers in the future. Details of any
              subscription plans, pricing, and billing terms will be provided when those
              features become available.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Crossed shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use
              of our services. Our total liability to you for any claim shall not exceed the
              amount you paid to us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account if you violate these
              Terms. You may delete your account at any time. Upon termination, your data will
              be handled in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact</h2>
            <p>
              For questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@crossedapp.co" className="text-primary hover:underline">
                legal@crossedapp.co
              </a>
              .
            </p>
          </section>

          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-sm text-amber-700 dark:text-amber-400 mt-8">
            <strong>Note:</strong> This is a draft Terms of Service and requires review by a
            qualified legal professional before the app launches publicly. It does not constitute
            legal advice.
          </div>
        </div>
      </div>
    </div>
  );
}
