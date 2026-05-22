import { ClipboardEdit, Phone, PlayCircle, GraduationCap, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: ClipboardEdit,
    step: '01',
    title: 'Оставляете заявку',
    desc: 'Заполните короткую форму с именем и телефоном на нашем сайте.',
    color: '#1a56db',
  },
  {
    icon: Phone,
    step: '02',
    title: 'Мы связываемся с вами',
    desc: 'Менеджер проекта свяжется с вами и расскажет, как проходит обучение и как получить доступ к материалам.',
    color: '#c9a84c',
  },
  {
    icon: PlayCircle,
    step: '03',
    title: 'Получаете доступ к программе',
    desc: 'После подтверждения вы получаете доступ к видеоурокам от Данияра Аманалиева и вводную консультацию по формату программы.',
    color: '#4ecdc4',
  },
  {
    icon: GraduationCap,
    step: '04',
    title: 'Изучаете уроки с поддержкой по программе',
    desc: 'Смотрите материалы в удобное время, а консультант помогает разобраться с форматом обучения и следующими шагами.',
    color: '#a78bfa',
  },
]

export default function HowItWorksSection({ onCTA }) {
  return (
    <section id="how_it_works" className="py-20 lg:py-28" style={{ background: '#0a0e1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ background: 'rgba(78,205,196,0.12)', border: '1px solid rgba(78,205,196,0.25)', color: '#4ecdc4' }}>
            Как всё устроено
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Как проходит{' '}
            <span className="gradient-text">обучение</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Всё просто и без лишних шагов. От заявки до начала обучения — четыре простых шага.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="relative">
                {/* Connector line (desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-10px)] w-5 z-10">
                    <ArrowRight size={16} className="text-slate-700" />
                  </div>
                )}

                <div className="card-hover rounded-2xl p-6 h-full"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${step.color}18`, border: `1px solid ${step.color}28` }}>
                      <Icon size={18} style={{ color: step.color }} />
                    </div>
                    <span className="text-2xl font-bold" style={{ color: 'rgba(255,255,255,0.06)' }}>
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onCTA}
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white"
          >
            Записаться на уроки
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  )
}
