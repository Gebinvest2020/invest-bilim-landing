import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SpeakerHeroSection from './components/SpeakerHeroSection'
import CurriculumSection from './components/CurriculumSection'
import LessonsSection from './components/LessonsSection'
import HowItWorksSection from './components/HowItWorksSection'
import WhyLearnSection from './components/WhyLearnSection'
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
        {/* 1. Hero */}
        <Hero onCTA={openLeadForm} />

        {/* 2. Блок эксперта */}
        <SpeakerHeroSection onCTA={openLeadForm} />

        {/* 3. Как проходит обучение */}
        <HowItWorksSection onCTA={openLeadForm} />

        {/* 4. Программа обучения — 12 уроков */}
        <LessonsSection onCTA={openLeadForm} />

        {/* 5. Что вы разберёте на обучении (6 карточек) */}
        <CurriculumSection onCTA={openLeadForm} />

        {/* 6. Почему формат подходит новичкам */}
        <WhyLearnSection onCTA={openLeadForm} />

        {/* 7. Отзывы */}
        <TestimonialsSection />

        {/* 8. FAQ */}
        <FAQSection />

        {/* 9. Финальный CTA + форма */}
        <FinalCTA onLegal={openLegal} />
      </main>
      <Footer onCTA={openLeadForm} onLegal={openLegal} />

      <Modal
        isOpen={modalOpen}
        onClose={closeLeadForm}
        title="Оставьте заявку, чтобы получить бесплатный доступ к вводным урокам и узнать детали программы"
      >
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
