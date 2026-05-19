import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AudienceSection from './components/AudienceSection'
import BenefitsSection from './components/BenefitsSection'
import LessonsSection from './components/LessonsSection'
import WhyLearnSection from './components/WhyLearnSection'
import SpeakerSection from './components/SpeakerSection'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Modal from './components/Modal'
import LeadForm from './components/LeadForm'
import CookieBanner from './components/CookieBanner'
import PrivacyPolicy from './components/legal/PrivacyPolicy'
import CookiePolicy from './components/legal/CookiePolicy'
import TermsOfUse from './components/legal/TermsOfUse'
import Disclaimer from './components/legal/Disclaimer'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [legalModal, setLegalModal] = useState(null)

  const openLeadForm = () => setModalOpen(true)
  const closeLeadForm = () => setModalOpen(false)
  const openLegal = (type) => setLegalModal(type)
  const closeLegal = () => setLegalModal(null)

  return (
    <div className="min-h-screen" style={{ background: '#0a0e1a' }}>
      <Header onCTA={openLeadForm} />
      <main>
        <Hero onCTA={openLeadForm} />
        <LessonsSection onCTA={openLeadForm} />
        <AudienceSection />
        <BenefitsSection />
        <WhyLearnSection />
        <SpeakerSection />
        <HowItWorksSection onCTA={openLeadForm} />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA onLegal={openLegal} />
      </main>
      <Footer onCTA={openLeadForm} onLegal={openLegal} />

      <Modal isOpen={modalOpen} onClose={closeLeadForm} title="Оставьте заявку, чтобы получить бесплатный доступ к вводным урокам и узнать детали программы">
        <LeadForm onLegal={openLegal} />
      </Modal>

      <Modal isOpen={legalModal === 'privacy'} onClose={closeLegal} title="Политика конфиденциальности" wide>
        <PrivacyPolicy />
      </Modal>
      <Modal isOpen={legalModal === 'cookies'} onClose={closeLegal} title="Политика cookies" wide>
        <CookiePolicy />
      </Modal>
      <Modal isOpen={legalModal === 'terms'} onClose={closeLegal} title="Пользовательское соглашение" wide>
        <TermsOfUse />
      </Modal>
      <Modal isOpen={legalModal === 'disclaimer'} onClose={closeLegal} title="Дисклеймер" wide>
        <Disclaimer />
      </Modal>

      <CookieBanner onOpenPolicy={() => openLegal('cookies')} />
    </div>
  )
}
