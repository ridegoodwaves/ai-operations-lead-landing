import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { CaseStudies } from '@/components/sections/case-studies';
import { Pricing } from '@/components/sections/pricing';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
