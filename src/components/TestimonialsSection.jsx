import { useState } from 'react'
import { Quote, ChevronDown, ChevronUp } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    text: 'Материалдар мага түшүнүктүү болду. Сабактардан кийин инвестиция темасын эмнеден баштап үйрөнүү керек экенин жакшыраак түшүндүм.',
    name: 'Айбек',
    city: 'Бишкек',
    initials: 'А',
    image: '/testimonials/optimized/aziz.webp',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.25)',
  },
  {
    text: 'Было интересно смотреть уроки 😊',
    name: 'Дилноза',
    city: 'Ош',
    initials: 'Д',
    image: '/testimonials/optimized/dilnoza.webp',
    color: '#c9a84c',
    bg: 'rgba(201,168,76,0.12)',
    border: 'rgba(201,168,76,0.25)',
  },
  {
    text: 'Всё понравилось, спасибо! 👍',
    name: 'Рустам',
    city: 'Джалал-Абад',
    initials: 'Р',
    image: '/testimonials/optimized/rustam.webp',
    color: '#4ecdc4',
    bg: 'rgba(78,205,196,0.12)',
    border: 'rgba(78,205,196,0.25)',
  },
  {
    text: 'Всё доступно объяснили ❤️',
    name: 'Мадина',
    city: 'Каракол',
    initials: 'М',
    image: '/testimonials/optimized/madina.webp',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.25)',
  },
  {
    text: 'Сабактардан кийин акциялар менен облигациялардын айырмасын жакшыраак түшүндүм. Эми кайсы темаларды андан ары үйрөнүү керек экенин билем.',
    name: 'Фарход',
    city: 'Нарын',
    initials: 'Ф',
    image: '/testimonials/optimized/farhod.webp',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.12)',
    border: 'rgba(52,211,153,0.25)',
  },
  {
    text: 'Мен көптөн бери инвестиция деген эмне экенин түшүнгүм келчү. Бул материалдардан кийин тема мен үчүн түшүнүктүүрөөк болуп калды.',
    name: 'Шахноза',
    city: 'Бишкек',
    initials: 'Ш',
    image: '/testimonials/optimized/shahnoza.webp',
    color: '#f87171',
    bg: 'rgba(248,113,113,0.12)',
    border: 'rgba(248,113,113,0.25)',
  },
  {
    text: 'Полезно было узнать про ошибки новичков. Теперь понимаю, что сначала нужно разобраться в теме, а не торопиться.',
    name: 'Бекзод',
    city: 'Токмок',
    initials: 'Б',
    image: '/testimonials/optimized/bekzod.webp',
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.12)',
    border: 'rgba(251,191,36,0.25)',
  },
  {
    text: 'Хороший курс, всё понятно ❤️',
    name: 'Наргиза',
    city: 'Ош',
    initials: 'Н',
    image: '/testimonials/optimized/nargiza.webp',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.12)',
    border: 'rgba(96,165,250,0.25)',
  },
  {
    text: 'Мне понравился спокойный подход. Всё объясняют понятно, без громких обещаний и давления.',
    name: 'Тимур',
    city: 'Бишкек',
    initials: 'Т',
    image: '/testimonials/optimized/timur.webp',
    color: '#2dd4bf',
    bg: 'rgba(45,212,191,0.12)',
    border: 'rgba(45,212,191,0.25)',
  },
  {
    text: 'Сабактардан кийин кайсы темаларды андан ары үйрөнүү керек экенин түшүнүү жеңилирээк болду. Оюм иретке келгендей сезилди.',
    name: 'Лола',
    city: 'Кара-Балта',
    initials: 'Л',
    image: '/testimonials/optimized/lola.webp',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.12)',
    border: 'rgba(244,114,182,0.25)',
  },
  {
    text: 'Материалдар ыңгайлуу форматта берилген. Маанилүү жагдайлар жакшы түшүндүрүлгөн — баары так жана ашыкча сөзсүз.',
    name: 'Камол',
    city: 'Баткен',
    initials: 'К',
    image: '/testimonials/optimized/kamol.webp',
    color: '#86efac',
    bg: 'rgba(134,239,172,0.12)',
    border: 'rgba(134,239,172,0.25)',
  },
  {
    text: 'Понравилась подача, смотрится легко ✨',
    name: 'Севара',
    city: 'Талас',
    initials: 'С',
    image: '/testimonials/optimized/sevara.webp',
    color: '#c4b5fd',
    bg: 'rgba(196,181,253,0.12)',
    border: 'rgba(196,181,253,0.25)',
  },
  {
    text: 'Понравилось, что сначала объясняют самые простые вещи. Не нужно сразу разбираться в сложных словах — можно спокойно идти по шагам.',
    name: 'Жасур',
    city: 'Бишкек',
    initials: 'Ж',
    image: '/testimonials/optimized/jasur.webp',
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.12)',
    border: 'rgba(56,189,248,0.25)',
  },
  {
    text: 'После заявки мне объяснили, как проходит обучение и что входит в программу. Так стало понятнее, с чего начать.',
    name: 'Гулноза',
    city: 'Джалал-Абад',
    initials: 'Г',
    image: '/testimonials/optimized/gulnoza.webp',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.12)',
    border: 'rgba(251,146,60,0.25)',
  },
  {
    text: 'Коротко и по делу. Спасибо!',
    name: 'Акмал',
    city: 'Ош',
    initials: 'А',
    image: '/testimonials/optimized/akmal.webp',
    color: '#4ade80',
    bg: 'rgba(74,222,128,0.12)',
    border: 'rgba(74,222,128,0.25)',
  },
  {
    text: 'Мне было важно, чтобы объясняли простым языком. Формат с видеоуроками и консультацией по обучению оказался удобным.',
    name: 'Нигора',
    city: 'Каракол',
    initials: 'Н',
    image: '/testimonials/optimized/nigora.webp',
    color: '#e879f9',
    bg: 'rgba(232,121,249,0.12)',
    border: 'rgba(232,121,249,0.25)',
  },
  {
    text: 'Мурда инвестиция темасы татаал көрүнчү. Алгачкы материалдардан кийин кайсы суроолорду андан ары изилдөө керек экенин жакшыраак түшүндүм.',
    name: 'Сардор',
    city: 'Бишкек',
    initials: 'С',
    image: '/testimonials/optimized/sardor.webp',
    color: '#a3e635',
    bg: 'rgba(163,230,53,0.12)',
    border: 'rgba(163,230,53,0.25)',
  },
  {
    text: 'Хороший формат для новичков 👍',
    name: 'Мадина',
    city: 'Нарын',
    initials: 'М',
    image: '/testimonials/optimized/madina1.webp',
    color: '#fb7185',
    bg: 'rgba(251,113,133,0.12)',
    border: 'rgba(251,113,133,0.25)',
  },
]

function TestimonialCard({ t, animDelay }) {
  const [ref, visible] = useInView()
  const [imgError, setImgError] = useState(false)

  return (
    <div
      ref={ref}
      className={`fade-up ${animDelay} ${visible ? 'is-visible' : ''} rounded-2xl p-5 flex flex-col gap-4 card-hover`}
      style={{
        background: t.bg,
        border: `1px solid ${t.border}`,
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      {/* Quote icon */}
      <Quote size={18} style={{ color: t.color, opacity: 0.8 }} />

      {/* Text */}
      <p className="text-sm text-slate-300 leading-relaxed flex-1">{t.text}</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-1" style={{ borderTop: `1px solid ${t.border}` }}>

        {/* Аватар — реальное фото, 56×56 px, круглое */}
        <div
          className="rounded-full overflow-hidden shrink-0"
          style={{
            width: 56,
            height: 56,
            border: `2px solid ${t.color}45`,
            boxShadow: `0 0 10px ${t.color}22, 0 2px 8px rgba(0,0,0,0.45)`,
            background: `${t.color}18`,
          }}
        >
          {t.image && !imgError ? (
            <img
              src={t.image}
              alt={t.name}
              width="56"
              height="56"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Fallback — инициал, если фото нет или не загрузилось */
            <div
              className="w-full h-full flex items-center justify-center text-sm font-bold"
              style={{ color: t.color }}
            >
              {t.initials}
            </div>
          )}
        </div>

        <div>
          <div className="text-sm font-semibold text-white">{t.name}</div>
          <div className="text-xs" style={{ color: 'rgba(148,163,184,0.7)' }}>{t.city}, Кыргызстан</div>
        </div>
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} viewBox="0 0 12 12" className="w-2.5 h-2.5" fill={t.color}>
              <path d="M6 0l1.5 3.5L11 4l-2.5 2.5.5 3.5L6 8.5 3 10l.5-3.5L1 4l3.5-.5L6 0z"/>
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? testimonials : testimonials.slice(0, 6)

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0d1220 100%)' }}
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(ellipse, #c9a84c, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.25)', color: '#c4b5fd' }}>
            Отзывы участников
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Что говорят люди из{' '}
            <span className="gradient-text">Кыргызстана</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Участники делятся впечатлениями об обучении — как изменилось их понимание темы и что показалось полезным.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {visible.map((t, i) => {
            const delays = ['', 'fade-up-d1', 'fade-up-d2', 'fade-up-d3', 'fade-up-d4', 'fade-up-d5']
            return <TestimonialCard key={i} t={t} animDelay={delays[i % 6]} />
          })}
        </div>

        {/* Show more/less */}
        <div className="flex flex-col items-center gap-4">
          {testimonials.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-white/10"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.05)',
                color: '#cbd5e1',
              }}
            >
              {showAll ? (
                <>Свернуть <ChevronUp size={16} /></>
              ) : (
                <>Показать больше отзывов <ChevronDown size={16} /></>
              )}
            </button>
          )}

          {/* Legal note */}
          <p className="text-center text-xs leading-relaxed max-w-2xl" style={{ color: 'rgba(100,116,139,0.8)' }}>
            Отзывы приведены в ознакомительном формате и не являются подтверждением финансового результата.
            Материалы носят образовательный характер.
          </p>
        </div>
      </div>
    </section>
  )
}
