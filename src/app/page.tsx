import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { SocialProof } from "@/components/social-proof";
import { Faq } from "@/components/faq";
import { CtaFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Pricing />
        <SocialProof />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
