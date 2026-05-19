import { useState } from 'react'
import { Loader2 } from 'lucide-react'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwzh2NN5JaQawAXgbSzB8lwww5UdjJ17xQc7U9gXUnMSIwk1RU5bZEd4YJ697vb8yQXTw/exec'

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

async function getIP() {
  try {
    const res = await fetch('https://api.ipify.org?format=json')
    const data = await res.json()
    return data.ip || 'unknown'
  } catch {
    return 'unknown'
  }
}

export default function LeadForm({ onLegal }) {
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

    // 1. Получаем IP (если не удалось — 'unknown')
    const ip = await getIP()

    // 2. Отправляем заявку в Google Apps Script
    // mode: 'no-cors' — надёжный способ отправки в GAS без проблем с CORS.
    // Ответ будет непрозрачным, поэтому ориентируемся на catch для ошибок.
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone,
          ip,
        }),
      })
      // Редирект на страницу благодарности (Google Ads конверсия)
      window.location.href = '/thank-you.html'
    } catch {
      setLoading(false)
      setErrors({
        submit: 'Не удалось отправить заявку. Проверьте подключение и попробуйте ещё раз.',
      })
    }
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

      {/* Submit error */}
      {errors.submit && (
        <p className="text-xs text-center px-2 py-2 rounded-lg"
          style={{ color: '#f87171', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
          {errors.submit}
        </p>
      )}

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
        Участие во вводных уроках бесплатное. Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
        Материалы носят образовательный характер.
      </p>
    </form>
  )
}
