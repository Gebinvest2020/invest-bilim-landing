import { useState } from 'react'
import { Play, ChevronDown, ChevronUp, Lock, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const lessons = [
  { id: 1, title: 'Что такое инвестиции простыми словами', desc: 'Объясним, что это такое и почему перед первыми шагами важно понять базу.', gradient: 'linear-gradient(135deg, #1a3a6e 0%, #0d2137 60%, #0a0e1a 100%)', accent: '#3b82f6', icon: '📘' },
  { id: 2, title: 'С чего начать новичку', desc: 'Разберём, что изучить сначала, чтобы не действовать наугад.', gradient: 'linear-gradient(135deg, #1e4d3a 0%, #0d2b1f 60%, #0a0e1a 100%)', accent: '#34d399', icon: '🚀' },
  { id: 3, title: 'Почему не стоит спешить', desc: 'Покажем, почему быстрые решения часто приводят к ошибкам.', gradient: 'linear-gradient(135deg, #4a2f1a 0%, #2a1a0d 60%, #0a0e1a 100%)', accent: '#f59e0b', icon: '⏳' },
  { id: 4, title: 'Какие риски важно знать', desc: 'Объясним простыми словами, почему вложения всегда связаны с рисками.', gradient: 'linear-gradient(135deg, #4a1a2f 0%, #2a0d1a 60%, #0a0e1a 100%)', accent: '#f87171', icon: '⚠️' },
  { id: 5, title: 'Как не запутаться в терминах', desc: 'Разберём самые частые слова и понятия простым человеческим языком.', gradient: 'linear-gradient(135deg, #2d1a4a 0%, #1a0d2a 60%, #0a0e1a 100%)', accent: '#a78bfa', icon: '💬' },
  { id: 6, title: 'Ошибки начинающих', desc: 'Покажем, какие ошибки чаще всего делают новички и как их заранее замечать.', gradient: 'linear-gradient(135deg, #1a3a3a 0%, #0d2121 60%, #0a0e1a 100%)', accent: '#4ecdc4', icon: '🔍' },
  { id: 7, title: 'Как выбирать, чему доверять', desc: 'Объясним, как осторожно относиться к громким обещаниям и красивым словам.', gradient: 'linear-gradient(135deg, #3a2a1a 0%, #1f1610 60%, #0a0e1a 100%)', accent: '#c9a84c', icon: '🔎' },
  { id: 8, title: 'Как понять свой первый шаг', desc: 'Разберём, как подойти к обучению спокойно и без лишней спешки.', gradient: 'linear-gradient(135deg, #1a2a4a 0%, #0d1627 60%, #0a0e1a 100%)', accent: '#60a5fa', icon: '👣' },
  { id: 9, title: 'Что важно знать о рынке', desc: 'Объясним, почему рынок может меняться и почему это нужно учитывать.', gradient: 'linear-gradient(135deg, #1a4a2a 0%, #0d271a 60%, #0a0e1a 100%)', accent: '#6ee7b7', icon: '📊' },
  { id: 10, title: 'Как читать простую информацию', desc: 'Покажем, на какие базовые вещи обращать внимание при изучении темы.', gradient: 'linear-gradient(135deg, #3a1a4a 0%, #1f0d27 60%, #0a0e1a 100%)', accent: '#c084fc', icon: '📖' },
  { id: 11, title: 'Как учиться без перегруза', desc: 'Разберём, как идти по шагам и не пытаться понять всё за один день.', gradient: 'linear-gradient(135deg, #4a3a1a 0%, #27200d 60%, #0a0e1a 100%)', accent: '#fbbf24', icon: '🧘' },
  { id: 12, title: 'Что делать после вводных уроков', desc: 'Покажем, как продолжить обучение и какие темы стоит изучить дальше.', gradient: 'linear-gradient(135deg, #1a4a3a 0%, #0d2721 60%, #0a0e1a 100%)', accent: '#2dd4bf', icon: '🎯' },
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
      {/* Image / Gradient */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {!imgError ? (
          <img
            src={`/images/lesson-${lesson.id}.jpg`}
            alt={lesson.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
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

        {/* Overlay */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,14,26,0.8) 0%, transparent 55%)' }} />

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

        {/* Lock / Play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: hovered ? `${lesson.accent}28` : 'rgba(10,14,26,0.65)',
              border: hovered ? `1.5px solid ${lesson.accent}60` : '1.5px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
              transform: hovered ? 'scale(1.12)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            }}>
            <Lock size={14} className="text-white opacity-80" />
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
          Смотреть урок
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
            Программа обучения
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight" style={{ letterSpacing: '-0.025em' }}>
            После заявки вы получите доступ к{' '}
            <span className="gradient-text">12 видеоурокам</span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-base">
            Уроки идут по шагам: от простого объяснения темы до понимания первых действий,
            частых ошибок и важных моментов для новичка.
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
            Получить доступ ко всем урокам
            <span className="arrow-icon"><ArrowRight size={14} /></span>
          </button>

          <p className="text-xs" style={{ color: 'rgba(100,116,139,0.7)' }}>
            Нажав на любой урок, вы сможете оставить заявку на получение доступа
          </p>
        </div>
      </div>
    </section>
  )
}
