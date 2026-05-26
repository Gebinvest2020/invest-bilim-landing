import { ArrowRight, ShieldCheck } from 'lucide-react'

const stat = [
  { emoji: '📚', label: '12 видеоуроков',  sub: 'доступны бесплатно' },
  { emoji: '📈', label: 'Сравните варианты', sub: 'акции и облигации' },
  { emoji: '🎯', label: 'План обучения',   sub: 'что изучать дальше' },
]

/* ─── Background SVG noise (data URI) ─────────────────────────────────── */
const noiseUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`

export default function Hero({ onCTA }) {

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-16"
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
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ opacity: 0.042, backgroundImage: noiseUrl, backgroundSize: '256px 256px' }}
      />

      {/* ── Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
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
        className="blob-1 absolute pointer-events-none z-[1]"
        style={{
          top: '10%', left: '2%',
          width: 560, height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,86,219,0.24) 0%, transparent 68%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="blob-2 absolute pointer-events-none z-[1]"
        style={{
          bottom: '10%', right: '2%',
          width: 440, height: 440,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.17) 0%, transparent 68%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="blob-3 absolute pointer-events-none z-[1]"
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
        className="absolute pointer-events-none z-[1]"
        style={{
          top: '38%', left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(26,86,219,0.25) 30%, rgba(201,168,76,0.15) 70%, transparent)',
        }}
      />

      {/* ══════════════════════════════════════════════════════
          MAIN LAYOUT — две колонки (текст | большое фото)
      ══════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div
          className="grid lg:grid-cols-[3fr_2fr] items-center"
          style={{ minHeight: 'calc(100vh - 4rem)' }}
        >

          {/* ═══════════════════════════════════════════
              ФОТО — в DOM первое (мобайл: сверху),
              на desktop переносится вправо через order-2
          ═══════════════════════════════════════════ */}
          <div
            className="relative order-2 h-[270px] lg:h-[640px]"
          >
            {/* ── Фотография (нижний слой) ── */}
            <img
              src="/speaker/optimized/hero-speaker.webp"
              alt="Данияр Аманалиев"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center 15%' }}
              fetchpriority="high"
              decoding="async"
            />

            {/* ── Оверлеи (z-10): интеграция в dark design без глушения лица ── */}

            {/* Виньетка: лицо открыто, тёмные только края */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                zIndex: 10,
                background:
                  'radial-gradient(ellipse 75% 75% at 58% 38%, transparent 30%, rgba(4,6,15,0.28) 65%, rgba(4,6,15,0.62) 100%)',
              }}
            />
            {/* Золотой ambient-тинт */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                zIndex: 10,
                background:
                  'radial-gradient(ellipse at 60% 32%, rgba(201,168,76,0.07) 0%, transparent 52%)',
              }}
            />

            {/* ── Направленные fade-переходы (z-20) ── */}

            {/* Левый: плавный переход в текстовую колонку (desktop) */}
            <div
              className="hidden lg:block absolute inset-y-0 left-0 pointer-events-none"
              style={{
                zIndex: 20,
                width: 150,
                background:
                  'linear-gradient(to right, #04060f 8%, rgba(4,6,15,0.55) 42%, transparent 100%)',
              }}
            />
            {/* Верхний: тонкий fade у верхнего края */}
            <div
              className="absolute inset-x-0 top-0 pointer-events-none"
              style={{
                zIndex: 20,
                height: '22%',
                background:
                  'linear-gradient(to bottom, rgba(4,6,15,0.85) 0%, rgba(4,6,15,0.35) 45%, transparent 100%)',
              }}
            />
            {/* Нижний: всегда виден (mobile + desktop) */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                zIndex: 20,
                height: '18%',
                background:
                  'linear-gradient(to top, rgba(4,6,15,0.70) 0%, transparent 100%)',
              }}
            />
            {/* Правый: лёгкая рамка (desktop) */}
            <div
              className="hidden lg:block absolute inset-y-0 right-0 pointer-events-none"
              style={{
                zIndex: 20,
                width: 48,
                background: 'linear-gradient(to left, rgba(4,6,15,0.35), transparent)',
              }}
            />

            {/* ── Плашка с именем (z-30) ── */}
            <div className="absolute bottom-4 right-3 lg:bottom-8 lg:right-6" style={{ zIndex: 30 }}>
              <div
                className="px-3 py-2 lg:px-4 lg:py-2.5 rounded-xl"
                style={{
                  background: 'rgba(4,6,15,0.82)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                }}
              >
                <div className="text-xs lg:text-sm font-bold text-white leading-tight">Данияр Аманалиев</div>
                <div className="text-[10px] lg:text-[11px] text-slate-400 mt-0.5 max-w-[150px] lg:max-w-[160px] leading-snug">Предприниматель и автор образовательной программы</div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════
              ТЕКСТ — в DOM второе (мобайл: снизу),
              на desktop занимает левую колонку order-1
          ═══════════════════════════════════════════ */}
          <div className="lg:order-1 flex flex-col justify-center px-4 sm:px-6 lg:pl-8 xl:pl-12 lg:pr-4 py-14 lg:py-10">

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
                БЕСПЛАТНЫЕ ВИДЕОУРОКИ • КЫРГЫЗСТАН
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-extrabold text-white mb-6 animate-fade-in-up hero-d1"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                letterSpacing: '-0.038em',
                lineHeight: 1.07,
              }}
            >
              <span style={{ display: 'block' }}>Бесплатные видеоуроки</span>
              <span className="gradient-text" style={{ display: 'block' }}>
                по инвестициям
              </span>
            </h1>

            {/* Divider */}
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
              style={{ fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '460px' }}
            >
              Узнайте, с чего начать изучение инвестиций и какие знания помогут
              принимать более обдуманные решения.
            </p>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-2.5 mb-7 animate-fade-in-up hero-d4">
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
                    <div className="text-[13px] font-bold text-white leading-tight">{s.label}</div>
                    <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
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
                Материалы носят образовательный характер.
              </p>
            </div>

          </div>
          {/* end text column */}

        </div>
      </div>
    </section>
  )
}
