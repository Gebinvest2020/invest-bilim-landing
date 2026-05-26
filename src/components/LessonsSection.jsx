import { useState } from 'react'
import { Play, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const lessons = [
  // lesson-1: portrait 1091×1442 — показываем верхнюю часть
  { id: 1,  imgPos: 'center 30%',  title: 'С чего начинается инвестирование', desc: 'Узнайте, какие цели можно поставить и что важно определить до выбора направления.', gradient: 'linear-gradient(135deg, #1a3a6e 0%, #0d2137 60%, #0a0e1a 100%)', accent: '#3b82f6', icon: '📘' },
  // lesson-2..7: landscape ~3:2 1537×1023 — чуть выше центра
  { id: 2,  imgPos: 'center 25%',  title: 'Чем отличаются акции и облигации', desc: 'Разберите два известных варианта и поймите, что важно сравнить перед выбором.', gradient: 'linear-gradient(135deg, #1e4d3a 0%, #0d2b1f 60%, #0a0e1a 100%)', accent: '#34d399', icon: '🚀' },
  { id: 3,  imgPos: 'center 25%',  title: 'Какие направления можно изучить', desc: 'Посмотрите, какие варианты существуют и чем они могут отличаться между собой.', gradient: 'linear-gradient(135deg, #4a2f1a 0%, #2a1a0d 60%, #0a0e1a 100%)', accent: '#f59e0b', icon: '⏳' },
  { id: 4,  imgPos: 'center 25%',  title: 'Куда можно направлять средства', desc: 'Разберите разные направления и поймите, какие особенности важно учитывать.', gradient: 'linear-gradient(135deg, #4a1a2f 0%, #2a0d1a 60%, #0a0e1a 100%)', accent: '#f87171', icon: '⚠️' },
  { id: 5,  imgPos: 'center 25%',  title: 'От чего зависит результат вложений', desc: 'Узнайте, какие факторы могут влиять на результат и что стоит проверить заранее.', gradient: 'linear-gradient(135deg, #2d1a4a 0%, #1a0d2a 60%, #0a0e1a 100%)', accent: '#a78bfa', icon: '💬' },
  { id: 6,  imgPos: 'center 25%',  title: 'Как выбрать направление под свою цель', desc: 'Сравните варианты для накоплений, крупных покупок и долгосрочных планов.', gradient: 'linear-gradient(135deg, #1a3a3a 0%, #0d2121 60%, #0a0e1a 100%)', accent: '#4ecdc4', icon: '🔍' },
  { id: 7,  imgPos: 'center 25%',  title: 'Как составить личный план действий', desc: 'Определите цель, срок, доступную сумму и последовательность дальнейших шагов.', gradient: 'linear-gradient(135deg, #3a2a1a 0%, #1f1610 60%, #0a0e1a 100%)', accent: '#c9a84c', icon: '🔎' },
  // lesson-8: landscape, centre crop
  { id: 8,  imgPos: 'center 25%',  title: 'Как проверить информацию перед выбором', desc: 'Узнайте, где искать данные и какие детали важно сравнить.', gradient: 'linear-gradient(135deg, #1a2a4a 0%, #0d1627 60%, #0a0e1a 100%)', accent: '#60a5fa', icon: '👣' },
  // lesson-9,11: 1448×1086 (~4:3) — ближе к квадрату, центр
  { id: 9,  imgPos: 'center 30%',  title: 'Как избежать необдуманного решения', desc: 'Разберите частые ошибки и вопросы, которые стоит задать себе заранее.', gradient: 'linear-gradient(135deg, #1a4a2a 0%, #0d271a 60%, #0a0e1a 100%)', accent: '#6ee7b7', icon: '📊' },
  { id: 10, imgPos: 'center 25%',  title: 'Как изменение цен влияет на планы', desc: 'Поймите, почему стоимость денег со временем меняется и что важно учитывать.', gradient: 'linear-gradient(135deg, #3a1a4a 0%, #1f0d27 60%, #0a0e1a 100%)', accent: '#c084fc', icon: '📖' },
  { id: 11, imgPos: 'center 30%',  title: 'Как распределить сумму между целями', desc: 'Разберите, как учитывать ближайшие расходы и долгосрочные задачи.', gradient: 'linear-gradient(135deg, #4a3a1a 0%, #27200d 60%, #0a0e1a 100%)', accent: '#fbbf24', icon: '🧘' },
  { id: 12, imgPos: 'center 25%',  title: 'Что изучать после базовых уроков', desc: 'Получите последовательность тем, которые помогут двигаться дальше.', gradient: 'linear-gradient(135deg, #1a4a3a 0%, #0d2721 60%, #0a0e1a 100%)', accent: '#2dd4bf', icon: '🎯' },
]

const staggerDelays = ['', 'fade-up-d1', 'fade-up-d2', 'fade-up-d3', 'fade-up-d4', 'fade-up-d5']

function LessonCard({ lesson, onCTA, animDelay }) {
  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      onClick={onCTA}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fade-up ${animDelay} ${visible ? 'is-visible' : ''} group cursor-pointer rounded-2xl overflow-hidden flex flex-col`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: hovered ? `1px solid ${lesson.accent}35` : '1px solid rgba(255,255,255,0.07)',
        boxShadow: hovered ? `0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px ${lesson.accent}20` : '0 4px 20px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s ease',
      }}
    >
      {/* Image / Gradient — фиксированная высота для единого вида */}
      <div className="relative overflow-hidden" style={{ height: 192 }}>
        {!imgError ? (
          <img
            src={`/lessons/optimized/lesson-${lesson.id}.webp`}
            alt={`Урок ${lesson.id} программы Invest Bilim`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: lesson.imgPos }}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
            style={{ background: lesson.gradient }}
          >
            <div className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl select-none"
                style={{ opacity: hovered ? 0.55 : 0.35, transition: 'opacity 0.3s' }}>
                {lesson.icon}
              </span>
            </div>
          </div>
        )}

        {/* Overlay — плавный: читаемость badge сверху + текст снизу */}
        <div className="absolute inset-0" style={{
          background:
            'linear-gradient(to bottom, rgba(7,9,26,0.22) 0%, rgba(7,9,26,0.08) 35%, rgba(7,9,26,0.55) 70%, rgba(7,9,26,0.88) 100%)',
        }} />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-lg text-xs font-bold tracking-wider"
            style={{
              background: `${lesson.accent}22`,
              border: `1px solid ${lesson.accent}50`,
              color: lesson.accent,
              backdropFilter: 'blur(8px)',
            }}>
            УРОК {lesson.id}
          </span>
        </div>

        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
            style={{
              background: '#c9a84c',
              boxShadow: hovered
                ? '0 8px 28px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.35)'
                : '0 4px 18px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.3)',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <Play size={18} style={{ fill: '#0a1220', color: '#0a1220', marginLeft: 2 }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 pb-3">
        <h3 className="font-semibold text-sm leading-snug mb-2 line-clamp-2"
          style={{ color: hovered ? '#f8fafc' : '#e2e8f0', transition: 'color 0.2s' }}>
          {lesson.title}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.75)' }}>
          {lesson.desc}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold"
          style={{ color: lesson.accent }}>
          <Play size={10} style={{ fill: lesson.accent }} />
          Открыть урок
        </div>
      </div>
    </div>
  )
}

export default function LessonsSection({ onCTA }) {
  const [showAll, setShowAll] = useState(false)
  const [headerRef, headerVisible] = useInView()
  const visible = showAll ? lessons : lessons.slice(0, 6)

  return (
    <section
      id="lessons"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0d1220 100%)' }}
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse, #1a56db, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef}
          className={`text-center mb-14 max-w-3xl mx-auto fade-up ${headerVisible ? 'is-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: 'rgba(26,86,219,0.1)', border: '1px solid rgba(26,86,219,0.28)', color: '#93c5fd' }}>
            Видеоуроки
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight" style={{ letterSpacing: '-0.025em' }}>
            Выберите{' '}
            <span className="gradient-text">бесплатный урок</span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-base">
            Посмотрите темы и откройте материал, который хотите изучить первым.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {visible.map((lesson, idx) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              onCTA={onCTA}
              animDelay={staggerDelays[idx % 6] || ''}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="text-center flex flex-col items-center gap-4">
          {!showAll ? (
            <button onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: '#cbd5e1' }}>
              Показать всю программу
              <ChevronDown size={16} />
            </button>
          ) : (
            <button onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: '#cbd5e1' }}>
              Свернуть
              <ChevronUp size={16} />
            </button>
          )}

          <button onClick={onCTA}
            className="btn-gold btn-arrow inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold">
            <Play size={14} style={{ fill: '#0a0e1a' }} />
            Получить бесплатный доступ
            <span className="arrow-icon"><ArrowRight size={14} /></span>
          </button>

          <p className="text-xs" style={{ color: 'rgba(100,116,139,0.7)' }}>
            Выберите урок и откройте доступ к бесплатным материалам программы.
          </p>
        </div>
      </div>
    </section>
  )
}
