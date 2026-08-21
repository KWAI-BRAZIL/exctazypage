import { AudienceSection } from "@/components/AudienceSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { BigIdeaSection } from "@/components/BigIdeaSection";
import { BusinessAnalysisSection } from "@/components/BusinessAnalysisSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { CTA } from "@/components/CTA";
import { EcosystemBenefitsSection } from "@/components/EcosystemBenefitsSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IncludedSection } from "@/components/IncludedSection";
import { MonthlyExperienceSection } from "@/components/MonthlyExperienceSection";
import { NeuroLabSection } from "@/components/NeuroLabSection";
import { PhysicalDigitalSection } from "@/components/PhysicalDigitalSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SEPMethodSection } from "@/components/SEPMethodSection";
import { Testimonials } from "@/components/Testimonials";
import { WhyCommunitySection } from "@/components/WhyCommunitySection";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function EcossistemaPage() {
  return (
    <div className="neural-bg min-h-screen">
      <Header />
      <WhatsAppButton />
      <main>
        <Hero />
        <ProblemSection />
        <BigIdeaSection />
        <EcosystemSection />
        <EcosystemBenefitsSection />
        <SEPMethodSection />
        <BenefitsSection />
        <BusinessAnalysisSection />
        <NeuroLabSection />
        <AudienceSection />
        <MonthlyExperienceSection />
        <PhysicalDigitalSection />
        <WhyCommunitySection />
        <ComparisonSection />
        <IncludedSection />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
