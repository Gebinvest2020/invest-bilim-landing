import { useState, useEffect } from 'react'
import { Menu, X, TrendingUp } from 'lucide-react'

export default function Header({ onCTA }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { href: '#lessons', label: 'Программа' },
    { href: '#speaker', label: 'Спикер' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#faq', label: 'FAQ' },
  ]

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(6, 10, 20, 0.92)' : 'rgba(6, 10, 20, 0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #1a56db 0%, #0d2137 100%)' }}
            >
              <TrendingUp size={15} className="text-white" />
            </div>
            <span className="font-bold text-white text-sm tracking-tight">
              Invest <span style={{ color: '#c9a84c' }}>Bilim</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onCTA}
              className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold text-white"
            >
              Записаться
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white p-1 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t" style={{ background: 'rgba(6,10,20,0.97)', borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left py-3 px-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { onCTA(); setMenuOpen(false) }}
              className="btn-gold mt-3 py-3 rounded-xl text-sm font-bold text-center"
            >
              Записаться на уроки
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
