import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const faqs = [
  {
    q: 'Это инвестиционная рекомендация?',
    a: 'Нет. Все материалы программы носят исключительно образовательный характер и не являются индивидуальной инвестиционной рекомендацией. Мы не советуем, куда вкладывать деньги.',
  },
  {
    q: 'Подойдёт ли обучение новичкам?',
    a: 'Да. Уроки специально разработаны для людей, которые только начинают разбираться в теме и не имеют опыта в инвестировании.',
  },
  {
    q: 'Нужно ли иметь опыт или специальные знания?',
    a: 'Нет. Все материалы объясняются простым языком. Мы начинаем с самых базовых понятий и двигаемся постепенно.',
  },
  {
    q: 'Будут ли обещания дохода или прибыли?',
    a: 'Нет. Мы не обещаем доход, не гарантируем финансовый результат и не призываем к совершению сделок. Цель программы — образование и базовое понимание темы.',
  },
  {
    q: 'Как получить доступ к урокам?',
    a: 'Оставьте заявку на сайте, указав имя и телефон. Менеджер проекта свяжется с вами и расскажет, как получить доступ к материалам.',
  },
  {
    q: 'В каком формате проходит обучение?',
    a: 'Программа включает видеоуроки от Мурада Назарова и вводную консультацию по формату обучения от команды проекта. Смотрите материалы в своём темпе, без дедлайнов.',
  },
]

function FaqItem({ item, index, open, onToggle }) {
  const isOpen = open === index

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        border: isOpen
          ? '1px solid rgba(201,168,76,0.2)'
          : '1px solid rgba(255,255,255,0.07)',
        background: isOpen
          ? 'rgba(201,168,76,0.04)'
          : 'rgba(255,255,255,0.03)',
      }}
    >
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 group"
        onClick={() => onToggle(index)}
      >
        <span
          className="text-sm font-semibold transition-colors duration-200"
          style={{ color: isOpen ? '#e2c97e' : '#f1f5f9' }}
        >
          {item.q}
        </span>
        <div
          className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.06)',
            border: isOpen ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {isOpen
            ? <Minus size={13} style={{ color: '#e2c97e' }} />
            : <Plus size={13} className="text-slate-400" />}
        </div>
      </button>

      {/* Smooth accordion using max-height transition */}
      <div
        style={{
          maxHeight: isOpen ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="px-5 pb-5 pt-1">
          <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [open, setOpen] = useState(0)
  const [sectionRef, visible] = useInView()

  const handleToggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#0a0e1a' }}>
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse, #1a56db, transparent 70%)', filter: 'blur(80px)' }} />

      <div ref={sectionRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-up ${visible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.22)', color: '#e2c97e' }}>
              Частые вопросы
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.025em' }}>
              FAQ
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              Ответы на наиболее частые вопросы об образовательной программе.
              Если вы не нашли ответ — свяжитесь с нами.
            </p>
            {/* Decorative line */}
            <div className="h-px w-12 rounded-full"
              style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
          </div>

          {/* Accordion */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            {faqs.map((item, i) => (
              <FaqItem key={i} item={item} index={i} open={open} onToggle={handleToggle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
