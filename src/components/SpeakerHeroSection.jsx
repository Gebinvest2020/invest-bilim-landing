import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const traits = [
  { text: 'Понятный язык — никакого профессионального жаргона', color: '#4ecdc4' },
  { text: 'Разбор важных моментов, ошибок и первых шагов', color: '#93c5fd' },
  { text: 'Образовательный формат без обещаний результата', color: '#a78bfa' },
]

export default function SpeakerHeroSection({ onCTA }) {
  const [ref, visible] = useInView()

  return (
    <section
      id="speaker"
      className="py-14 lg:py-20"
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0d1220 100%)' }}
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-up ${visible ? 'is-visible' : ''}`}
      >
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(26,86,219,0.1) 0%, rgba(10,14,26,0.95) 55%, rgba(201,168,76,0.06) 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">

            {/* ── Левая колонка: кто такой эксперт ── */}
            <div className="p-7 sm:p-8 lg:p-10 flex flex-col gap-5">
              {/* Аватар + имя */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div
                    className="w-[72px] h-[72px] rounded-full overflow-hidden"
                    style={{
                      border: '2px solid rgba(201,168,76,0.5)',
                      boxShadow: '0 0 0 4px rgba(201,168,76,0.08), 0 8px 24px rgba(0,0,0,0.5)',
                    }}
                  >
                    <img
                      src="/speaker/optimized/speaker-avatar.webp"
                      alt="Данияр Аманалиев"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 15%' }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Online-dot */}
                  <div
                    className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-emerald-400"
                    style={{ border: '2px solid #0a0e1a', boxShadow: '0 0 8px rgba(52,211,153,0.7)' }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">Данияр Аманалиев</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Предприниматель и автор образовательной программы
                  </p>
                </div>
              </div>

              {/* Короткое bio */}
              <p className="text-slate-400 text-sm leading-relaxed">
                Объясняет инвестиции простым языком — без давления, сложных терминов
                и обещаний дохода. Помогает новичкам понять базовые принципы и первые шаги.
              </p>

              {/* Бейдж */}
              <div
                className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.22)',
                  color: '#e2c97e',
                }}
              >
                Авторский видеокурс · Кыргызстан
              </div>
            </div>

            {/* ── Правая колонка: тезисы + CTA ── */}
            <div className="p-7 sm:p-8 lg:p-10 flex flex-col justify-center gap-4">
              {/* Тезисы */}
              {traits.map((trait, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={15}
                    className="shrink-0 mt-0.5"
                    style={{ color: trait.color }}
                  />
                  <span className="text-sm text-slate-300 leading-relaxed">{trait.text}</span>
                </div>
              ))}

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={onCTA}
                  className="btn-gold btn-arrow inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold"
                >
                  Записаться на вводный урок
                  <span className="arrow-icon">
                    <ArrowRight size={14} />
                  </span>
                </button>
                <p
                  className="text-xs mt-3"
                  style={{ color: 'rgba(100,116,139,0.6)' }}
                >
                  Материалы носят образовательный характер и не являются индивидуальной финансовой или инвестиционной рекомендацией.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
