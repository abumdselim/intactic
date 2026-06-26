import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Section Components
import HeroSection from '../components/sections/HeroSection';
import CapabilitiesSection from '../components/sections/CapabilitiesSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import StatsSection from '../components/sections/StatsSection';
import AiExcellenceSection from '../components/sections/AiExcellenceSection';
import TechStackSection from '../components/sections/TechStackSection';
import ProcessSection from '../components/sections/ProcessSection';
import CaseStudiesSection from '../components/sections/CaseStudiesSection';
import RecognitionsSection from '../components/sections/RecognitionsSection';
import CareersSection from '../components/sections/CareersSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Intactic Innovations | Engineered on Leading Tech Stacks</title>
        <meta name="description" content="Intactic Innovations — From startups to enterprises, build scalable, secure software with 18+ years of expertise and ISO 27001-certified teams." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="homepage-main">
        <HeroSection />
        <CapabilitiesSection />
        <IndustriesSection />
        <StatsSection />
        <AiExcellenceSection />
        <TechStackSection />
        <ProcessSection />
        <CaseStudiesSection />
        <RecognitionsSection />
        <CareersSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
