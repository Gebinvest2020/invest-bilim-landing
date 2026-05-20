import { MessageSquare, ShieldCheck, TrendingUp, Users, ArrowRight } from 'lucide-react'

const points = [
  {
    icon: MessageSquare,
    title: 'Без сложных терминов',
    desc: 'Объясняем базовые понятия понятным языком — без профессионального жаргона и перегруза.',
    color: '#c9a84c',
  },
  {
    icon: ShieldCheck,
    title: 'Честно о рисках',
    desc: 'Рассказываем о важных аспектах и рисках, которые нужно понимать с самого начала.',
    color: '#4ecdc4',
  },
  {
    icon: TrendingUp,
    title: 'Без обещаний дохода',
    desc: 'Нет гарантий, нет давления, нет кликбейта. Только понятное образование и практичные примеры.',
    color: '#a78bfa',
  },
  {
    icon: Users,
    title: 'Поддержка на старте',
    desc: 'После заявки менеджер объяснит формат, ответит на вопросы по программе и поможет с первыми шагами.',
    color: '#34d399',
  },
]

export default function WhyLearnSection({ onCTA }) {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#0a0e1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-8 sm:p-10 lg:p-14 overflow-hidden relative"
          style={{
            background:
              'linear-gradient(135deg, rgba(26,86,219,0.12) 0%, rgba(10,14,26,0.8) 50%, rgba(201,168,76,0.08) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Decorative blur */}
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,86,219,0.12), transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.25)',
                color: '#e2c97e',
              }}
            >
              Почему формат подходит новичкам
            </div>

            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-5"
              style={{ letterSpacing: '-0.02em', maxWidth: '600px' }}
            >
              Обучение, которое{' '}
              <span className="gradient-text">создано для начинающих</span>
            </h2>

            <p className="text-slate-400 leading-relaxed text-base mb-10 max-w-2xl">
              Программа построена так, чтобы новичок мог разобраться в теме спокойно —
              без спешки, без давления и без ощущения, что ты чего-то не понимаешь.
            </p>

            {/* 4-point grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {points.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.title} className="flex flex-col gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${p.color}18`,
                        border: `1px solid ${p.color}28`,
                      }}
                    >
                      <Icon size={18} style={{ color: p.color }} />
                    </div>
                    <h4 className="font-semibold text-white text-sm leading-snug">{p.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <button
              onClick={onCTA}
              className="btn-gold btn-arrow inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold"
            >
              Узнать подробнее о программе
              <span className="arrow-icon">
                <ArrowRight size={15} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
