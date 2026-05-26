/**
 * Analytics utility — thin wrapper around window.gtag / dataLayer.
 * All calls are safe before gtag.js has loaded because they queue
 * into window.dataLayer and are processed once the script arrives.
 *
 * No personal data (name, phone, ip, email) is ever passed here.
 */

/**
 * Push a GA4 event.
 * Consent Mode v2 ensures no cookies/identifiers are set until
 * analytics_storage is 'granted'.
 */
export function sendEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}

/**
 * Update consent signals after the user makes a choice.
 * analytics_storage follows the analytics preference.
 * ad_storage / ad_user_data / ad_personalization follow the advertising
 * preference — they remain 'denied' unless the user explicitly grants it.
 */
export function updateConsent(analyticsGranted, advertisingGranted = false) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage:  analyticsGranted   ? 'granted' : 'denied',
      ad_storage:         advertisingGranted ? 'granted' : 'denied',
      ad_user_data:       advertisingGranted ? 'granted' : 'denied',
      ad_personalization: advertisingGranted ? 'granted' : 'denied',
    })
  }
}

/**
 * On app boot: restore consent from localStorage so that returning
 * visitors don't lose their previous choice. Must run within the
 * wait_for_update window (500 ms) set in the inline consent script.
 */
export function initConsent() {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem('cookie_consent')
    if (!raw) return
    const prefs = JSON.parse(raw)
    const analyticsGranted   = prefs.all === true || prefs.analytics   === true
    const advertisingGranted = prefs.all === true || prefs.advertising === true
    updateConsent(analyticsGranted, advertisingGranted)
  } catch {
    /* ignore JSON parse errors */
  }
}
