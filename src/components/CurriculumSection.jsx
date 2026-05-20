import {
  BookOpen,
  Rocket,
  BarChart3,
  AlertTriangle,
  Search,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import { useInView } from '../hooks/useInView'

const cards = [
  {
    icon: BookOpen,
    emoji: '📚',
    title: 'Основы инвестирования',
    desc: 'Что это такое, как работает и почему важно понять базу перед любыми первыми шагами.',
    color: '#1a56db',
  },
  {
    icon: Rocket,
    emoji: '🚀',
    title: 'С чего начать новичку',
    desc: 'Что изучить в первую очередь, чтобы не действовать наугад и не запутаться в начале.',
    color: '#34d399',
  },
  {
    icon: BarChart3,
    emoji: '📊',
    title: 'Акции, облигации, фонды',
    desc: 'Ключевые отличия основных инструментов — простым языком, без сложных терминов.',
    color: '#c9a84c',
  },
  {
    icon: AlertTriangle,
    emoji: '⚠️',
    title: 'Риски — честно о главном',
    desc: 'Что нужно знать о возможных рисках и почему об этом важно думать с самого начала.',
    color: '#f87171',
  },
  {
    icon: Search,
    emoji: '🔍',
    title: 'Типичные ошибки начинающих',
    desc: 'Какие заблуждения мешают осознанному старту и как их замечать заранее.',
    color: '#a78bfa',
  },
  {
    icon: GraduationCap,
    emoji: '🎯',
    title: 'Как выстраивать обучение',
    desc: 'Как идти по шагам, не перегружать себя и планомерно углублять понимание темы.',
    color: '#4ecdc4',
  },
]

const delays = ['', 'fade-up-d1', 'fade-up-d2', 'fade-up-d3', 'fade-up-d4', 'fade-up-d5']

export default function CurriculumSection({ onCTA }) {
  const [ref, visible] = useInView()

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0d1220 100%)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none opacity-[0.04]"
        style={{
          background: 'radial-gradient(ellipse, #1a56db, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-14 fade-up ${visible ? 'is-visible' : ''}`}>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
            style={{
              background: 'rgba(78,205,196,0.12)',
              border: '1px solid rgba(78,205,196,0.25)',
              color: '#4ecdc4',
            }}
          >
            Программа обучения
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.025em' }}
          >
            Что вы{' '}
            <span className="gradient-text">разберёте на обучении</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed text-base">
            Уроки идут от простого к сложному. Всё объяснено понятным языком — без жаргона и без давления.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className={`fade-up ${delays[i]} ${visible ? 'is-visible' : ''} card-hover rounded-2xl p-6`}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${card.color}20`,
                      border: `1px solid ${card.color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: card.color }} />
                  </div>
                  <span className="text-xl select-none">{card.emoji}</span>
                </div>
                <h3 className="font-semibold text-white mb-2 text-base">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onCTA}
            className="btn-gold btn-arrow inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold"
          >
            Получить программу обучения
            <span className="arrow-icon">
              <ArrowRight size={15} />
            </span>
          </button>
          <p className="text-xs mt-3" style={{ color: 'rgba(100,116,139,0.7)' }}>
            Оставьте заявку — мы расскажем о формате и дадим доступ к вводным урокам
          </p>
        </div>

      </div>
    </section>
  )
}
