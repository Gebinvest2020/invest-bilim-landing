import LeadForm from './LeadForm'

export default function FinalCTA({ onLegal }) {
  return (
    <section className="py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #0d1220 0%, #0a0e1a 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', color: '#e2c97e' }}>
              Начните обучение
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Начните с понятного{' '}
              <span className="gradient-text">объяснения основ</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-base mb-8">
              Оставьте заявку, чтобы получить бесплатный доступ к вводным урокам и консультацию по программе от команды проекта.
            </p>

            {/* Bullet points */}
            <div className="flex flex-col gap-3">
              {[
                'Бесплатный доступ к вводным материалам',
                'Простой язык, понятные примеры',
                'Акцент на рисках и финансовой грамотности',
                'Без обещаний дохода — только образование',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#c9a84c' }} />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl p-6 sm:p-8"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
            <h3 className="text-lg font-semibold text-white mb-1">Получить бесплатный доступ</h3>
            <p className="text-sm text-slate-500 mb-5">Оставьте заявку — мы свяжемся с вами</p>
            <LeadForm onLegal={onLegal} />
          </div>
        </div>
      </div>
    </section>
  )
}
