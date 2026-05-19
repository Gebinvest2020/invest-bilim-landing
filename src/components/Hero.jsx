import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react'

const stat = [
  { emoji: '📚', label: '12 уроков',         sub: 'программа по шагам' },
  { emoji: '💬', label: 'Простым языком',    sub: 'без сложных терминов' },
  { emoji: '🎁', label: 'Вводные уроки',     sub: 'бесплатный доступ' },
]

/* ─── Background SVG noise (data URI) ─────────────────────────────────── */
const noiseUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`

export default function Hero({ onCTA }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background: `
          radial-gradient(ellipse 80% 70% at 5%  45%, rgba(26,86,219,0.28)  0%, transparent 58%),
          radial-gradient(ellipse 60% 55% at 95% 70%, rgba(201,168,76,0.16)  0%, transparent 55%),
          radial-gradient(ellipse 50% 45% at 55% 5%,  rgba(14,165,233,0.11)  0%, transparent 50%),
          radial-gradient(ellipse 35% 30% at 75% 90%, rgba(78,205,196,0.08)  0%, transparent 50%),
          #04060f
        `,
      }}
    >
      {/* ── Grain ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.042, backgroundImage: noiseUrl, backgroundSize: '256px 256px' }}
      />

      {/* ── Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 85% 65% at 50% 50%, black 15%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 65% at 50% 50%, black 15%, transparent 100%)',
        }}
      />

      {/* ── Animated ambient blobs ── */}
      <div
        className="blob-1 absolute pointer-events-none"
        style={{
          top: '10%', left: '2%',
          width: 560, height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,86,219,0.24) 0%, transparent 68%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="blob-2 absolute pointer-events-none"
        style={{
          bottom: '10%', right: '2%',
          width: 440, height: 440,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.17) 0%, transparent 68%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="blob-3 absolute pointer-events-none"
        style={{
          top: '5%', right: '28%',
          width: 340, height: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.11) 0%, transparent 68%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ── Horizontal light sweep ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '38%', left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(26,86,219,0.25) 30%, rgba(201,168,76,0.15) 70%, transparent)',
        }}
      />

      {/* ─────────────────────────────────────────────────
          MAIN CONTENT
      ───────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-6">

          {/* ═══════════════════════════════
              LEFT — Heading + CTA
          ═══════════════════════════════ */}
          <div className="w-full lg:w-[56%] xl:w-[58%] flex flex-col">

            {/* Badge */}
            <div className="flex self-start mb-7 animate-fade-in-up hero-d0">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide"
                style={{
                  background: 'rgba(26,86,219,0.13)',
                  border: '1px solid rgba(26,86,219,0.35)',
                  color: '#93c5fd',
                  letterSpacing: '0.04em',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"
                  style={{ boxShadow: '0 0 8px #60a5fa', animation: 'pulseGreen 2s infinite' }}
                />
                АВТОРСКИЙ ВИДЕОКУРС · УЗБЕКИСТАН
              </span>
            </div>

            {/* Heading — LARGE */}
            <h1
              className="font-extrabold text-white mb-6 animate-fade-in-up hero-d1"
              style={{
                fontSize: 'clamp(2.9rem, 6vw, 5rem)',
                letterSpacing: '-0.038em',
                lineHeight: 1.07,
              }}
            >
              <span style={{ display: 'block' }}>Инвестиции</span>
              <span style={{ display: 'block', color: 'rgba(215,225,240,0.82)' }}>
                простыми словами:
              </span>
              <span className="gradient-text" style={{ display: 'block' }}>
                с чего начать&nbsp;новичку
              </span>
            </h1>

            {/* Divider line */}
            <div className="mb-6 animate-fade-in-up hero-d2">
              <div
                className="h-px w-20"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(201,168,76,0.8) 0%, rgba(201,168,76,0.2) 100%)',
                }}
              />
            </div>

            {/* Subtitle */}
            <p
              className="text-slate-400 mb-8 animate-fade-in-up hero-d3"
              style={{ fontSize: '1.075rem', lineHeight: 1.8, maxWidth: '480px' }}
            >
              Бесплатные вводные видеоуроки и консультация по программе для жителей Узбекистана — чтобы понять, что такое инвестиции, с чего начать и как не запутаться без сложных слов и давления.
            </p>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-2.5 mb-9 animate-fade-in-up hero-d4">
              {stat.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.046)',
                    border: '1px solid rgba(255,255,255,0.085)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <span className="text-[1.1rem] leading-none">{s.emoji}</span>
                  <div>
                    <div className="text-[13px] font-bold text-white leading-tight">
                      {s.label}
                    </div>
                    <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      {s.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 animate-fade-in-up hero-d5">
              <button
                onClick={onCTA}
                className="btn-gold btn-arrow pulse-gold-glow flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold"
                style={{ fontSize: '0.9rem' }}
              >
                Получить бесплатный доступ
                <span className="arrow-icon">
                  <ArrowRight size={17} />
                </span>
              </button>

              <button
                onClick={() => scrollTo('#lessons')}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.038)',
                  color: '#cbd5e1',
                  fontSize: '0.875rem',
                  backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, {
                    background: 'rgba(255,255,255,0.08)',
                    borderColor: 'rgba(255,255,255,0.2)',
                  })
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, {
                    background: 'rgba(255,255,255,0.038)',
                    borderColor: 'rgba(255,255,255,0.1)',
                  })
                }
              >
                <PlayCircle size={16} />
                Посмотреть программу
              </button>
            </div>

            {/* Disclaimer */}
            <div
              className="flex items-start gap-2.5 p-3.5 rounded-xl self-start animate-fade-in-up hero-d6"
              style={{
                background: 'rgba(78,205,196,0.05)',
                border: '1px solid rgba(78,205,196,0.14)',
              }}
            >
              <ShieldCheck size={14} className="mt-0.5 shrink-0" style={{ color: '#4ecdc4' }} />
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.7)' }}>
                Участие во вводных уроках бесплатное. Материалы носят образовательный характер.
              </p>
            </div>
          </div>

          {/* ═══════════════════════════════
              RIGHT — Speaker card (scene)
          ═══════════════════════════════ */}
          <div className="w-full lg:w-[44%] xl:w-[42%] flex justify-center lg:justify-end lg:pt-16 animate-card-reveal">

            {/* Outer wrapper: card + ambient glow */}
            <div className="relative" style={{ width: '100%', maxWidth: 340 }}>

              {/* ── Deep ambient glow behind card ── */}
              <div
                className="absolute rounded-3xl opacity-60 pointer-events-none"
                style={{
                  inset: '-40px',
                  zIndex: 0,
                  background:
                    'radial-gradient(ellipse at 50% 50%, rgba(26,86,219,0.5) 0%, rgba(201,168,76,0.2) 40%, transparent 70%)',
                  filter: 'blur(48px)',
                  animation: 'blob1 14s ease-in-out infinite',
                }}
              />

              {/* ══════════════════════════════
                  SPEAKER CARD
              ══════════════════════════════ */}
              <div
                className="relative z-10 rounded-2xl overflow-hidden"
                style={{
                  background:
                    'linear-gradient(140deg, rgba(26,86,219,0.6) 0%, rgba(201,168,76,0.42) 55%, rgba(14,165,233,0.35) 100%)',
                  padding: '1.5px',
                  boxShadow:
                    '0 0 0 1px rgba(255,255,255,0.06), 0 48px 96px rgba(0,0,0,0.7), 0 16px 32px rgba(26,86,219,0.15)',
                }}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ background: 'linear-gradient(165deg, #0b172e 0%, #070a17 100%)' }}
                >
                  {/* ── Course header area (photo zone) ── */}
                  <div
                    className="relative flex flex-col"
                    style={{ height: 262, overflow: 'hidden' }}
                  >
                    {/* Background pattern */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(135deg, #0d1f42 0%, #121a35 50%, #0a1228 100%)',
                      }}
                    />
                    {/* Radial light */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'radial-gradient(ellipse at 30% 50%, rgba(26,86,219,0.35) 0%, transparent 55%),' +
                          'radial-gradient(ellipse at 75% 40%, rgba(201,168,76,0.18) 0%, transparent 50%)',
                      }}
                    />
                    {/* Dot texture */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)',
                        backgroundSize: '18px 18px',
                        opacity: 0.18,
                      }}
                    />
                    {/* АВТОРСКИЙ ВИДЕОКУРС label */}
                    <div className="absolute top-4 left-5" style={{ zIndex: 5 }}>
                      <span
                        className="px-2.5 py-1 rounded-lg text-[9px] font-bold tracking-widest uppercase"
                        style={{
                          background: 'rgba(201,168,76,0.15)',
                          border: '1px solid rgba(201,168,76,0.3)',
                          color: '#e2c97e',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        Авторский видеокурс
                      </span>
                    </div>
                    {/* Sub-label top-right */}
                    <div className="absolute top-4 right-4 text-[10px] text-slate-500" style={{ zIndex: 5 }}>
                      12 уроков
                    </div>

                    {/* Avatar — fully contained, anchored to bottom of zone */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2"
                      style={{ bottom: 18, zIndex: 10 }}
                    >
                      {/* Conic spin ring */}
                      <div
                        className="absolute inset-[-6px] rounded-full"
                        style={{
                          background:
                            'conic-gradient(from 0deg, rgba(26,86,219,0.9), rgba(201,168,76,0.9), rgba(78,205,196,0.8), rgba(26,86,219,0.9))',
                          filter: 'blur(3px)',
                          opacity: 0.8,
                          animation: 'blob2 9s linear infinite',
                        }}
                      />
                      {/* Photo container */}
                      <div
                        className="relative w-[164px] h-[164px] rounded-full overflow-hidden"
                        style={{
                          border: '3px solid rgba(255,255,255,0.18)',
                          background: 'linear-gradient(135deg, #1a3060, #0d1f40)',
                          boxShadow: '0 0 0 4px rgba(26,86,219,0.25), 0 24px 56px rgba(0,0,0,0.75)',
                        }}
                      >
                        <picture className="w-full h-full block">
                          <source type="image/avif" srcSet="/images/murad-nazarov.avif" />
                          <img
                            src="/images/murad-nazarov.png"
                            alt="Мурад Назаров"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'center 15%' }}
                            fetchpriority="high"
                            decoding="async"
                          />
                        </picture>
                      </div>
                      {/* Online dot */}
                      <div
                        className="absolute bottom-1.5 right-1.5 w-[22px] h-[22px] rounded-full bg-emerald-400"
                        style={{
                          border: '3px solid #070a17',
                          boxShadow: '0 0 12px rgba(52,211,153,0.9)',
                        }}
                      />
                    </div>
                  </div>

                  {/* ── Card body ── */}
                  <div className="px-5 pt-9 pb-5 flex flex-col gap-3.5">

                    {/* Name */}
                    <div className="text-center">
                      <h3
                        className="text-[1.125rem] font-bold text-white"
                        style={{ letterSpacing: '-0.022em' }}
                      >
                        Мурад Назаров
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Автор и спикер образовательной программы
                      </p>
                    </div>

                    {/* Info chips */}
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {['Простой язык', 'Для новичков', '12 уроков'].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                          style={{
                            background: 'rgba(26,86,219,0.16)',
                            border: '1px solid rgba(26,86,219,0.28)',
                            color: '#93c5fd',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Quote */}
                    <div
                      className="rounded-xl px-4 py-3 text-center"
                      style={{
                        background: 'rgba(255,255,255,0.038)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <p
                        className="text-[11px] leading-relaxed italic"
                        style={{ color: 'rgba(148,163,184,0.78)' }}
                      >
                        «Уроки помогают понять тему инвестиций простым языком: что важно знать в начале, с чего лучше начать и как не запутаться в первых шагах»
                      </p>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={onCTA}
                      className="btn-arrow w-full rounded-xl px-4 py-2.5 text-[12px] font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                      style={{
                        background:
                          'linear-gradient(135deg,rgba(26,86,219,0.28),rgba(26,86,219,0.14))',
                        border: '1px solid rgba(26,86,219,0.42)',
                        color: '#93c5fd',
                      }}
                      onMouseEnter={(e) =>
                        Object.assign(e.currentTarget.style, {
                          background:
                            'linear-gradient(135deg,rgba(26,86,219,0.42),rgba(26,86,219,0.22))',
                          borderColor: 'rgba(26,86,219,0.7)',
                        })
                      }
                      onMouseLeave={(e) =>
                        Object.assign(e.currentTarget.style, {
                          background:
                            'linear-gradient(135deg,rgba(26,86,219,0.28),rgba(26,86,219,0.14))',
                          borderColor: 'rgba(26,86,219,0.42)',
                        })
                      }
                    >
                      Узнать, что входит в программу
                      <span className="arrow-icon">
                        <ArrowRight size={13} />
                      </span>
                    </button>
                  </div>

                  {/* ── Card footer ── */}
                  <div
                    className="px-5 py-3 flex items-center gap-2"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.055)' }}
                  >
                    <div
                      className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"
                      style={{
                        boxShadow: '0 0 8px rgba(52,211,153,0.7)',
                        animation: 'pulseGreen 2s infinite',
                      }}
                    />
                    <span className="text-[11px] text-slate-400">
                      Программа открыта для записи
                    </span>
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
            {/* end outer wrapper */}
          </div>

        </div>
      </div>
    </section>
  )
}
