import { BookOpen, AlertTriangle, BarChart3, Brain, TrendingUp, MessageCircle } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const cards = [
  {
    icon: BookOpen,
    title: 'Только начинаете',
    desc: 'Слышали об инвестициях, но пока не знаете, с чего начать. Тема кажется сложной — эти уроки именно для вас.',
    color: '#1a56db',
  },
  {
    icon: MessageCircle,
    title: 'Хотите понять простым языком',
    desc: 'Хотите разобраться в теме без сложных слов, непонятных терминов и лишней путаницы.',
    color: '#c9a84c',
  },
  {
    icon: Brain,
    title: 'Не хотите запутаться в начале',
    desc: 'Хотите сначала понять основы, а уже потом двигаться дальше — спокойно, без спешки.',
    color: '#4ecdc4',
  },
  {
    icon: AlertTriangle,
    title: 'Хотите сначала разобраться',
    desc: 'Вам важно сначала получить базовое понимание, прежде чем делать первые шаги в этой теме.',
    color: '#a78bfa',
  },
  {
    icon: TrendingUp,
    title: 'Хотите понять, что к чему',
    desc: 'Хотите понять, что вообще такое инвестиции, какие бывают варианты и на что обращать внимание.',
    color: '#34d399',
  },
  {
    icon: BarChart3,
    title: 'Нет опыта — и это нормально',
    desc: 'Уроки сделаны так, чтобы всё было понятно даже тем, кто раньше никогда не сталкивался с этой темой.',
    color: '#f472b6',
  },
]

export default function AudienceSection() {
  const [sectionRef, visible] = useInView()
  return (
    <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #0d1220 0%, #0a0e1a 100%)' }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 fade-up ${visible ? 'is-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', color: '#e2c97e' }}>
            Для кого этот курс
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Для кого этот курс
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Этот курс подойдёт тем, кто хочет понять тему инвестиций с нуля,
            без сложных слов и лишней путаницы.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon
            const delays = ['', 'fade-up-d1', 'fade-up-d2', 'fade-up-d3', 'fade-up-d4', 'fade-up-d5']
            return (
              <div
                key={card.title}
                className={`fade-up ${delays[i]} ${visible ? 'is-visible' : ''} card-hover rounded-2xl p-6`}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${card.color}20`, border: `1px solid ${card.color}30` }}>
                  <Icon size={18} style={{ color: card.color }} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-base">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
