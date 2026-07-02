import { HeroSection } from "@/components/sections/hero";
import { ImagineSection } from "@/components/sections/imagine";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features";
import { UseCasesSection } from "@/components/sections/use-cases";
import { PrivacySection } from "@/components/sections/privacy-first";
import { WaitlistCTASection } from "@/components/sections/waitlist-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImagineSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <UseCasesSection />
      <PrivacySection />
      <WaitlistCTASection />
    </>
  );
}
