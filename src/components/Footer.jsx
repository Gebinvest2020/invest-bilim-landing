import { TrendingUp, Mail, MapPin } from 'lucide-react'

export default function Footer({ onCTA, onLegal }) {
  const legalLinks = [
    { label: 'Политика конфиденциальности', key: 'privacy' },
    { label: 'Политика cookies', key: 'cookies' },
    { label: 'Пользовательское соглашение', key: 'terms' },
    { label: 'Дисклеймер', key: 'disclaimer' },
  ]

  const navLinks = [
    { href: '#lessons', label: 'Программа' },
    { href: '#speaker', label: 'Спикер' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#faq', label: 'FAQ' },
  ]

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#060a14', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1a56db, #0d2137)' }}>
                <TrendingUp size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-sm tracking-tight">
                Invest <span style={{ color: '#c9a84c' }}>Bilim</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-5" style={{ maxWidth: '220px' }}>
              Образовательная программа по основам инвестирования для начинающих в Кыргызстане.
            </p>
            <button
              onClick={onCTA}
              className="btn-gold px-4 py-2 rounded-lg text-xs font-bold"
            >
              Записаться на уроки
            </button>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Навигация
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Документы
            </h4>
            <div className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => onLegal(link.key)}
                  className="text-left text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Контакты
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin size={13} className="shrink-0 text-slate-600" />
                <span className="text-sm text-slate-500">Кыргызстан</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} className="shrink-0 text-slate-600" />
                <a
                  href="mailto:info@invest-bilim.com"
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                >
                  info@invest-bilim.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <p className="text-xs leading-relaxed text-center" style={{ color: 'rgba(100,116,139,0.65)' }}>
            Информация на сайте предоставлена исключительно в образовательных целях и не является
            индивидуальной инвестиционной рекомендацией, предложением купить или продать финансовые
            инструменты, гарантией доходности или призывом к совершению финансовых операций.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pb-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'rgba(100,116,139,0.5)' }}>
            © 2025 Invest Bilim. Все права защищены.
          </p>
          <p className="text-xs" style={{ color: 'rgba(100,116,139,0.5)' }}>
            Кыргызстан · Образовательный проект
          </p>
        </div>

      </div>
    </footer>
  )
}
