import { CheckCircle2, Star } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const traits = [
  { text: 'Понятное объяснение для новичков без профессионального жаргона' },
  { text: 'Акцент на рисках и финансовой грамотности' },
  { text: 'Образовательный подход без обещаний дохода' },
  { text: 'Практичные примеры, актуальные для жителей Узбекистана' },
]

export default function SpeakerSection() {
  const [ref, visible] = useInView()
  return (
    <section id="speaker" className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #0d1220 0%, #0a0e1a 100%)' }}>
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-up ${visible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Card */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xs">
              {/* Main card */}
              <div className="rounded-3xl overflow-hidden p-0.5"
                style={{ background: 'linear-gradient(135deg, rgba(26,86,219,0.5), rgba(201,168,76,0.3))' }}>
                <div className="rounded-3xl overflow-hidden"
                  style={{ background: 'linear-gradient(160deg, #0f1a2e 0%, #0a0e1a 100%)' }}>
                  <div className="p-8 flex flex-col items-center text-center gap-5">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden"
                        style={{ border: '3px solid rgba(201,168,76,0.4)', background: 'linear-gradient(135deg, #1a3060, #0d1f40)' }}>
                        <div className="w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 80 80" className="w-24 h-24" fill="none">
                            <circle cx="40" cy="28" r="20" fill="rgba(148,163,184,0.25)" />
                            <ellipse cx="40" cy="72" rx="30" ry="22" fill="rgba(148,163,184,0.15)" />
                          </svg>
                        </div>
                      </div>
                      {/* Status dot */}
                      <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-400"
                        style={{ border: '2px solid #0a0e1a' }} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">Мурад Назаров</h3>
                      <p className="text-sm text-slate-400 mt-1">Спикер образовательной программы</p>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} style={{ color: '#c9a84c', fill: '#c9a84c' }} />
                      ))}
                    </div>

                    {/* Placeholder note */}
                    <div className="w-full px-3 py-2.5 rounded-xl text-center text-xs text-slate-500"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      [Добавить подтверждённую информацию о спикере]
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -right-4 -bottom-4 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(10,14,26,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                <div className="text-xs text-slate-400">Формат обучения</div>
                <div className="text-sm font-semibold text-white mt-0.5">Видеоуроки</div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', color: '#e2c97e' }}>
              Спикер программы
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5" style={{ letterSpacing: '-0.02em' }}>
              Мурад Назаров —{' '}
              <span className="gradient-text">спикер программы</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8 text-base">
              Мурад Назаров объясняет основы инвестирования простым языком
              и помогает новичкам разобраться в базовых финансовых понятиях
              без сложных терминов.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {traits.map((trait, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: '#4ecdc4' }} />
                  <span className="text-sm text-slate-300">{trait.text}</span>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="p-4 rounded-xl text-xs text-slate-500 leading-relaxed"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              Программа носит образовательный характер. Спикер не является лицензированным
              финансовым консультантом и не предоставляет индивидуальных инвестиционных рекомендаций.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
