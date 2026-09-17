import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WorkloadCalculator } from './components/WorkloadCalculator';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechMatrix } from './components/TechMatrix';
import { ReliabilitySection } from './components/ReliabilitySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [prefillSubject, setPrefillSubject] = useState('');
  const [prefillMessage, setPrefillMessage] = useState('');

  const handleOpenContact = () => {
    setPrefillSubject('Consultation Request with Lauren Joyce Tugadi');
    setPrefillMessage('');
    setContactOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefillSubject(`Inquiry regarding: ${serviceTitle}`);
    setPrefillMessage(
      `Hi Lauren,\n\nI am interested in delegating ${serviceTitle} to you. Here are some details about our properties and workflow needs:\n`
    );
    setContactOpen(true);
  };

  const handleCustomInquiry = (details: string) => {
    setPrefillSubject('Operations Scope & Capacity Inquiry');
    setPrefillMessage(
      `Hi Lauren,\n\nI calculated our portfolio requirements using your website tool:\n${details}\n\nLet's discuss how quickly we can onboard you into our operations.`
    );
    setContactOpen(true);
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenContact={handleOpenContact} />

      <main style={{ flexGrow: 1 }}>
        <Hero onOpenContact={handleOpenContact} />
        <ServicesSection onSelectService={handleSelectService} />
        <WorkloadCalculator onCustomInquiry={handleCustomInquiry} />
        <ExperienceTimeline />
        <TechMatrix />
        <ReliabilitySection />
        <FaqSection />
      </main>

      <Footer onOpenContact={handleOpenContact} />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        prefillSubject={prefillSubject}
        prefillMessage={prefillMessage}
      />
    </div>
  );
}

export default App;
