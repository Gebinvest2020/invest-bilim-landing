import {
  BookOpen,
  BarChart3,
  AlertTriangle,
  Search,
  GraduationCap,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { useInView } from '../hooks/useInView'

const cards = [
  {
    icon: BookOpen,
    emoji: '📚',
    title: 'Сэкономите время на старте',
    desc: 'Поймёте, какие темы изучить сначала, а какие пока не нужны.',
    color: '#1a56db',
  },
  {
    icon: Layers,
    emoji: '📊',
    title: 'Не выбирайте вслепую',
    desc: 'Поймёте разницу между акциями и облигациями, прежде чем изучать один из вариантов глубже.',
    color: '#34d399',
  },
  {
    icon: BarChart3,
    emoji: '🔎',
    title: 'Проверяйте перед выбором',
    desc: 'Поймёте, на какие данные смотреть, прежде чем рассматривать вложение.',
    color: '#c9a84c',
  },
  {
    icon: AlertTriangle,
    emoji: '⚠️',
    title: 'Спросите о важном',
    desc: 'Поймёте, какие вопросы стоит задать перед изучением выбранного направления.',
    color: '#f87171',
  },
  {
    icon: Search,
    emoji: '🔍',
    title: 'Не остановитесь на первом уроке',
    desc: 'Получите понятный порядок тем, чтобы продолжить обучение без хаоса.',
    color: '#a78bfa',
  },
  {
    icon: GraduationCap,
    emoji: '🎯',
    title: 'Не останетесь с вопросами',
    desc: 'При необходимости сможете получить помощь специалиста по материалам программы.',
    color: '#4ecdc4',
  },
]

const delays = ['', 'fade-up-d1', 'fade-up-d2', 'fade-up-d3', 'fade-up-d4', 'fade-up-d5']

export default function CurriculumSection({ onCTA }) {
  const [ref, visible] = useInView()

  return (
    <section
      id="curriculum"
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
            О программе
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.025em' }}
          >
            Разберитесь в инвестициях и принимайте{' '}
            <span className="gradient-text">решения осознаннее</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed text-base">
            Перестаньте теряться в информации: поймите, что сравнивать, что проверять и что изучать дальше.
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
            Получить бесплатный доступ
            <span className="arrow-icon">
              <ArrowRight size={15} />
            </span>
          </button>
        </div>

      </div>
    </section>
  )
}
