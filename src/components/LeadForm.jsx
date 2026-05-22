import { useState, useRef } from 'react'
import { Loader2 } from 'lucide-react'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwzh2NN5JaQawAXgbSzB8lwww5UdjJ17xQc7U9gXUnMSIwk1RU5bZEd4YJ69Zvb8yQXTw/exec'

const AUTO_CHECK_CONSENT = true
const PHONE_PREFIX = '+996'

// Форматирует ввод → '+996 555 123 456', максимум 9 цифр после кода страны
function formatPhone(value) {
  let local = value.replace(/\D/g, '')
  if (local.startsWith('996')) local = local.slice(3)
  local = local.slice(0, 9) // не более 9 цифр оператор+номер

  let result = PHONE_PREFIX
  if (local.length > 0) result += ' ' + local.slice(0, 3)
  if (local.length > 3) result += ' ' + local.slice(3, 6)
  if (local.length > 6) result += ' ' + local.slice(6, 9)
  return result
}

// Возвращает чистый номер для Google Таблицы: +996555123456
function cleanPhone(formatted) {
  return '+' + formatted.replace(/\D/g, '')
}

// Количество локальных цифр (без кода страны)
function localDigits(formatted) {
  return formatted.replace(/\D/g, '').replace(/^996/, '').length
}

// Получаем IP с таймаутом 3 сек, при любой ошибке возвращаем 'unknown'
async function getIP() {
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 3000)
    const res = await fetch('https://api.ipify.org?format=json', { signal: controller.signal })
    clearTimeout(timer)
    const data = await res.json()
    return data.ip || 'unknown'
  } catch {
    return 'unknown'
  }
}

export default function LeadForm({ onLegal, sourceLocation = 'unknown', onFormStart }) {
  const [form, setForm] = useState({
    name: '',
    phone: PHONE_PREFIX,
    consent: AUTO_CHECK_CONSENT,
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  // Notify parent once on first field interaction (for lead_form_close tracking)
  const hasNotifiedStart = useRef(false)
  const notifyFormStart = () => {
    if (!hasNotifiedStart.current) {
      hasNotifiedStart.current = true
      onFormStart?.()
    }
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Введите ваше имя'
    if (localDigits(form.phone) < 9) e.phone = 'Введите полный номер телефона'
    if (!form.consent) e.consent = 'Необходимо согласие на обработку данных'
    return e
  }

  const handlePhone = (e) => {
    notifyFormStart()
    const formatted = formatPhone(e.target.value)
    setForm((f) => ({ ...f, phone: formatted }))
    if (errors.phone) setErrors((er) => ({ ...er, phone: undefined }))
  }

  // Не даём удалить префикс +996
  const handlePhoneKeyDown = (e) => {
    const { selectionStart, selectionEnd } = e.currentTarget
    if (
      (e.key === 'Backspace' || e.key === 'Delete') &&
      selectionStart <= PHONE_PREFIX.length &&
      selectionEnd <= PHONE_PREFIX.length
    ) {
      e.preventDefault()
    }
  }

  // На мобильном — при фокусе ставим курсор в конец (не в начало)
  const handlePhoneFocus = (e) => {
    const len = e.target.value.length
    setTimeout(() => {
      try { e.target.setSelectionRange(len, len) } catch { /* ignore */ }
    }, 0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)

    // 1. IP (макс. 3 сек, при неудаче — 'unknown')
    const ip = await getIP()

    // 2. URLSearchParams + no-cors — стандартный способ отправки в GAS
    //    Телефон уходит чистым: +996555123456
    const body = new URLSearchParams({
      name:  form.name.trim(),
      phone: cleanPhone(form.phone),
      ip,
    })

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode:   'no-cors',
        body,
      })
    } catch {
      setLoading(false)
      setErrors({
        submit: 'Не удалось отправить заявку. Проверьте подключение и попробуйте ещё раз.',
      })
      return
    }

    // 3. Сохранить флаг успешной отправки для generate_lead на thank-you.html
    //    Только безопасные данные — никакого имени, телефона или IP.
    sessionStorage.setItem('invest_bilim_lead_submitted', 'true')
    sessionStorage.setItem('invest_bilim_lead_source', sourceLocation)

    // 4. Редирект на страницу благодарности
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
            notifyFormStart()
            setForm((f) => ({ ...f, name: e.target.value }))
            if (errors.name) setErrors((er) => ({ ...er, name: undefined }))
          }}
          placeholder="Например: Айбек"
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
        <label className="block text-xs font-medium text-slate-400 mb-1.5">
          Номер телефона *
          <span className="ml-1 font-normal" style={{ color: 'rgba(100,116,139,0.7)' }}>
            (+996 XXX XXX XXX)
          </span>
        </label>
        <input
          type="tel"
          inputMode="numeric"
          value={form.phone}
          onChange={handlePhone}
          onKeyDown={handlePhoneKeyDown}
          onFocus={handlePhoneFocus}
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
