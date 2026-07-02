import { HeroSection } from "@/components/sections/hero";
import { BuiltForMomentsSection } from "@/components/sections/built-for-moments";
import { ImagineSection } from "@/components/sections/imagine";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { ProductPreviewSection } from "@/components/sections/product-preview";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features";
import { MemoryMapSection } from "@/components/sections/memory-map";
import { UseCasesSection } from "@/components/sections/use-cases";
import { PrivacySection } from "@/components/sections/privacy-first";
import { WaitlistCTASection } from "@/components/sections/waitlist-cta";
import { WhyCrossedSection } from "@/components/sections/why-crossed";
import { FinalNoteSection } from "@/components/sections/final-note";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BuiltForMomentsSection />
      <ImagineSection />
      <ProblemSection />
      <SolutionSection />
      <ProductPreviewSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MemoryMapSection />
      <UseCasesSection />
      <PrivacySection />
      <WaitlistCTASection />
      <WhyCrossedSection />
      <FinalNoteSection />
    </>
  );
}
