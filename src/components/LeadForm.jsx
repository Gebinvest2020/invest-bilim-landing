import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

// Set to true to auto-check the consent checkbox
const AUTO_CHECK_CONSENT = true

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').replace(/^998/, '')
  let result = '+998'
  if (digits.length > 0) result += ' ' + digits.slice(0, 2)
  if (digits.length > 2) result += ' ' + digits.slice(2, 5)
  if (digits.length > 5) result += ' ' + digits.slice(5, 7)
  if (digits.length > 7) result += ' ' + digits.slice(7, 9)
  return result
}

export default function LeadForm({ onSuccess, onLegal }) {
  const [form, setForm] = useState({
    name: '',
    phone: '+998 ',
    consent: AUTO_CHECK_CONSENT,
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Введите ваше имя'
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 12) e.phone = 'Введите корректный номер: +998 XX XXX XX XX'
    if (!form.consent) e.consent = 'Необходимо согласие на обработку данных'
    return e
  }

  const handlePhone = (e) => {
    const formatted = formatPhone(e.target.value)
    setForm((f) => ({ ...f, phone: formatted }))
    if (errors.phone) setErrors((er) => ({ ...er, phone: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    // Replace this with your real API / backend call
    await new Promise((r) => setTimeout(r, 1000))
    console.log('Form submitted:', { name: form.name, phone: form.phone })
    setLoading(false)

    // Redirect to thank-you page for Google Ads conversion tracking
    window.location.href = '/thank-you.html'
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Name */}
      <div>
        <label className="block text-xs font-medium text-slate-400 mb-1.5">Ваше имя *</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => {
            setForm((f) => ({ ...f, name: e.target.value }))
            if (errors.name) setErrors((er) => ({ ...er, name: undefined }))
          }}
          placeholder="Например: Азиз"
          className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: errors.name ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.1)',
          }}
        />
        {errors.name && (
          <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-medium text-slate-400 mb-1.5">Номер телефона *</label>
        <input
          type="tel"
          value={form.phone}
          onChange={handlePhone}
          placeholder="+998 90 123 45 67"
          className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: errors.phone ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.1)',
          }}
        />
        {errors.phone && (
          <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.phone}</p>
        )}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative shrink-0 mt-0.5">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => {
                setForm((f) => ({ ...f, consent: e.target.checked }))
                if (errors.consent) setErrors((er) => ({ ...er, consent: undefined }))
              }}
              className="sr-only"
            />
            <div
              className="rounded flex items-center justify-center transition-all"
              style={{
                width: '18px', height: '18px',
                background: form.consent ? 'linear-gradient(135deg, #1a56db, #1e40af)' : 'rgba(255,255,255,0.05)',
                border: errors.consent
                  ? '1px solid rgba(239,68,68,0.6)'
                  : form.consent
                    ? '1px solid #1a56db'
                    : '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {form.consent && (
                <svg viewBox="0 0 12 10" className="w-3 h-3" fill="none">
                  <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-xs text-slate-400 leading-relaxed">
            Я согласен(на) с{' '}
            <button type="button" onClick={() => onLegal?.('privacy')}
              className="underline hover:text-white transition-colors" style={{ color: '#93c5fd' }}>
              Политикой конфиденциальности
            </button>
            {', '}
            <button type="button" onClick={() => onLegal?.('cookies')}
              className="underline hover:text-white transition-colors" style={{ color: '#93c5fd' }}>
              Политикой cookies
            </button>
            {' и обработкой персональных данных в соответствии с '}
            <button type="button" onClick={() => onLegal?.('terms')}
              className="underline hover:text-white transition-colors" style={{ color: '#93c5fd' }}>
              Пользовательским соглашением
            </button>
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs mt-1.5" style={{ color: '#f87171' }}>{errors.consent}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-gold flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold mt-1 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Отправляем...
          </>
        ) : (
          'Отправить заявку'
        )}
      </button>

      <p className="text-center text-xs text-slate-600 leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
        Материалы носят образовательный характер.
      </p>
    </form>
  )
}
