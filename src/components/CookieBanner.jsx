import { useState } from 'react'
import { Cookie, Settings } from 'lucide-react'
import { updateConsent } from '../analytics/gtag'

export default function CookieBanner({ onOpenPolicy }) {
  // Initialise from localStorage synchronously to avoid cascading effect renders
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookie_consent'))
  const [showSettings, setShowSettings] = useState(false)
  const [prefs, setPrefs] = useState({ analytics: true, advertising: false })

  const accept = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({ all: true }))
    updateConsent(true)
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({ necessary: true }))
    updateConsent(false)
    setVisible(false)
  }

  const savePrefs = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({ ...prefs, necessary: true }))
    updateConsent(prefs.analytics === true)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-5">
      <div className="max-w-3xl mx-auto rounded-2xl p-5"
        style={{
          background: 'rgba(10,18,34,0.99)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.4)',
        }}>
        {!showSettings ? (
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <Cookie size={20} className="shrink-0 mt-0.5" style={{ color: '#c9a84c' }} />
            <div className="flex-1">
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Мы используем cookies для корректной работы сайта, аналитики и улучшения
                пользовательского опыта.{' '}
                <button onClick={onOpenPolicy} className="underline hover:text-white transition-colors"
                  style={{ color: '#93c5fd' }}>
                  Политика cookies
                </button>
              </p>
              <div className="flex flex-wrap gap-2">
                <button onClick={accept}
                  className="btn-gold px-4 py-2 rounded-lg text-xs font-bold">
                  Принять
                </button>
                <button onClick={() => setShowSettings(true)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}>
                  <Settings size={12} />
                  Настроить
                </button>
                <button onClick={reject}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors">
                  Отклонить необязательные
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Настройка cookies</h4>
            <div className="flex flex-col gap-3 mb-4">
              {[
                { key: 'necessary', label: 'Необходимые', desc: 'Обязательны для работы сайта', forced: true },
                { key: 'analytics', label: 'Аналитические', desc: 'Помогают улучшить сайт' },
                { key: 'advertising', label: 'Рекламные', desc: 'Используются для показа рекламы' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                  <div
                    onClick={() => !item.forced && setPrefs((p) => ({ ...p, [item.key]: !p[item.key] }))}
                    className={`w-9 h-5 rounded-full transition-all relative ${item.forced ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    style={{ background: (item.forced || prefs[item.key]) ? '#1a56db' : 'rgba(255,255,255,0.1)' }}
                  >
                    <div className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all"
                      style={{ left: (item.forced || prefs[item.key]) ? 'calc(100% - 18px)' : '2px' }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={savePrefs} className="btn-primary px-4 py-2 rounded-lg text-xs font-semibold text-white">
                Сохранить настройки
              </button>
              <button onClick={() => setShowSettings(false)}
                className="px-4 py-2 rounded-lg text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Назад
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
