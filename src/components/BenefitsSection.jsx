import { CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    title: 'Как работают базовые инвестиционные инструменты',
    desc: 'Поймёте логику работы финансовых инструментов и зачем они вообще существуют.',
  },
  {
    title: 'Чем отличаются акции, облигации, фонды',
    desc: 'Узнаете ключевые отличия основных инструментов, их особенности и для кого они подходят.',
  },
  {
    title: 'Какие риски важно учитывать',
    desc: 'Разберёте, какие риски бывают в инвестировании и как о них думать осознанно.',
  },
  {
    title: 'Как формируется личный подход к финансам',
    desc: 'Поймёте, что нет универсального решения — у каждого человека своя ситуация и свои цели.',
  },
  {
    title: 'Какие ошибки часто совершают новички',
    desc: 'Узнаете о типичных заблуждениях и поступках, которые мешают осознанному подходу к теме.',
  },
  {
    title: 'Как изучать инвестиции постепенно и осознанно',
    desc: 'Получите понимание, с чего начать обучение и как выстраивать его шаг за шагом.',
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#0a0e1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{ background: 'rgba(78,205,196,0.12)', border: '1px solid rgba(78,205,196,0.25)', color: '#4ecdc4' }}>
              Что вы узнаете
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.02em' }}>
              Что охватывает{' '}
              <span className="gradient-text">программа</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-base mb-8">
              Уроки помогут сформировать базовое понимание темы —
              без обещаний результата и без давления на принятие решений.
              Только образование и понимание.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['Образовательный формат', 'Простой язык', 'Без сложных терминов'].map((badge) => (
                <span key={badge} className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: benefits list */}
          <div className="flex flex-col gap-3">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/5"
                style={{ border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 size={18} style={{ color: '#4ecdc4' }} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
