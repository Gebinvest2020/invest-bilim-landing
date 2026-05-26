import { useState, useEffect, useRef } from 'react'
import { sendEvent, initConsent } from './analytics/gtag'
import Header from './components/Header'
import Hero from './components/Hero'
import SpeakerHeroSection from './components/SpeakerHeroSection'
import CurriculumSection from './components/CurriculumSection'
import LessonsSection from './components/LessonsSection'
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
  const [modalSource, setModalSource] = useState('unknown')
  const [legalModal, setLegalModal] = useState(null)

  // Tracks whether user touched any field before closing the modal
  const formStarted = useRef(false)

  // ── On mount: restore GA4 consent for returning visitors ──────────────
  useEffect(() => {
    initConsent()
  }, [])

  // ── Section visibility tracking (once per section per page visit) ──────
  useEffect(() => {
    const sections = [
      'lessons', 'curriculum', 'testimonials',
      'speaker', 'how_it_works', 'faq', 'final_cta',
    ]
    const seen = new Set()
    const observers = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !seen.has(id)) {
            seen.add(id)
            sendEvent('section_view', { section_name: id })
          }
        },
        { threshold: 0.25 },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  // ── Lead form modal ────────────────────────────────────────────────────
  const openLeadForm = (source = 'unknown', ctaText = '') => {
    formStarted.current = false
    setModalSource(source)
    setModalOpen(true)
    sendEvent('cta_click', { cta_location: source, cta_text: ctaText })
    sendEvent('lead_form_open', { source_location: source })
  }

  const closeLeadForm = () => {
    sendEvent('lead_form_close', {
      source_location: modalSource,
      form_started: formStarted.current,
    })
    setModalOpen(false)
  }

  // ── Legal modals ───────────────────────────────────────────────────────
  const openLegal = (type) => {
    setLegalModal(type)
    sendEvent('legal_link_click', { link_type: type })
  }
  const closeLegal = () => setLegalModal(null)

  return (
    <div className="min-h-screen" style={{ background: '#0a0e1a' }}>
      <Header onCTA={() => openLeadForm('header', 'Записаться')} />
      <main>
        {/* 1. Hero */}
        <Hero onCTA={() => openLeadForm('hero', 'Получить бесплатный доступ')} />

        {/* 2. Бесплатные видеоуроки — 12 уроков */}
        <LessonsSection onCTA={() => openLeadForm('lessons', 'Получить бесплатный доступ')} />

        {/* 3. Что вы узнаете */}
        <CurriculumSection onCTA={() => openLeadForm('curriculum', 'Получить бесплатный доступ')} />

        {/* 4. Отзывы */}
        <TestimonialsSection />

        {/* 5. Блок Данияра Аманалиева */}
        <SpeakerHeroSection onCTA={() => openLeadForm('speaker', 'Получить бесплатный доступ')} />

        {/* 6. FAQ */}
        <FAQSection />

        {/* 8. Финальный CTA + форма */}
        <FinalCTA onLegal={openLegal} />
      </main>
      <Footer
        onCTA={() => openLeadForm('footer', 'Записаться на уроки')}
        onLegal={openLegal}
      />

      <Modal
        isOpen={modalOpen}
        onClose={closeLeadForm}
        title="Оставьте контакт — мы расскажем о программе и дадим доступ к вводным урокам"
      >
        <LeadForm
          onLegal={openLegal}
          sourceLocation={modalSource}
          onFormStart={() => { formStarted.current = true }}
        />
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
