import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsStrip from './components/StatsStrip';
import AboutSection from './components/AboutSection';
import PlansSection from './components/PlansSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import SidebarCard from './components/SidebarCard';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [sidebarFixed, setSidebarFixed] = useState(false);

  useEffect(() => {
    const updateSidebar = () => {
      setSidebarFixed(window.innerWidth > 1100);
    };

    updateSidebar();
    window.addEventListener('resize', updateSidebar);
    return () => window.removeEventListener('resize', updateSidebar);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.section'));

    sections.forEach((section, index) => {
      section.classList.add('reveal');
      section.style.transitionDelay = `${index * 80}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <Header />

      <main className="main-content">
        <HeroSection />
        <StatsStrip />
        <AboutSection />
        <PlansSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>

      <SidebarCard isFixed={sidebarFixed} />

      <footer className="footer">
        <p>© {new Date().getFullYear()} Car Consórcios. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#home">Início</a>
          <a href="#contato">Contato</a>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}

export default App;
