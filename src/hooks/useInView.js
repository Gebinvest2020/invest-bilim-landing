import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible].
 * Attaches an IntersectionObserver; once the element enters the viewport
 * `isVisible` flips to true and the observer disconnects (fires once).
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  // Capture options on mount so the effect doesn't re-run on every render
  const optionsRef = useRef(options)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...optionsRef.current }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
