const Section = ({ title, children }) => (
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
    <div className="text-sm text-slate-400 leading-relaxed space-y-2">{children}</div>
  </div>
)

export default function CookiePolicy() {
  return (
    <div className="text-sm text-slate-400">
      <p className="text-xs text-slate-600 mb-6">Последнее обновление: 2025 г.</p>

      <Section title="1. Что такое cookies">
        <p>
          Cookies — это небольшие текстовые файлы, которые сохраняются в вашем браузере при посещении
          сайта. Они помогают сайту работать корректно, запоминать ваши предпочтения и собирать
          статистику посещений.
        </p>
      </Section>

      <Section title="2. Технические (необходимые) cookies">
        <p>
          Эти cookies обязательны для работы сайта. Они обеспечивают корректную навигацию,
          работу форм и сохранение ваших предпочтений по cookies. Без них сайт не может
          нормально функционировать.
        </p>
      </Section>

      <Section title="3. Аналитические cookies">
        <p>
          Мы используем аналитические cookies (например, Google Analytics) для анализа посещаемости
          и поведения пользователей. Данные собираются в обезличенном виде и помогают нам улучшать
          качество сайта.
        </p>
      </Section>

      <Section title="4. Рекламные cookies">
        <p>
          Рекламные cookies могут использоваться для показа релевантной рекламы (например, через
          Google Ads). Вы можете отказаться от этих cookies в настройках.
        </p>
      </Section>

      <Section title="5. Как управлять cookies">
        <p>
          Вы можете управлять настройками cookies через:
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Баннер cookies на нашем сайте при первом посещении</li>
          <li>Настройки вашего браузера (Chrome, Firefox, Safari, Edge)</li>
          <li>Дополнительные инструменты отказа от аналитики (Google Analytics Opt-out)</li>
        </ul>
        <p>
          Обратите внимание: отключение необходимых cookies может нарушить работу сайта.
        </p>
      </Section>

      <Section title="6. Срок хранения">
        <p>
          Технические cookies хранятся в течение сессии или до 1 года.
          Аналитические cookies — до 2 лет в соответствии с политикой провайдеров аналитики.
        </p>
      </Section>
    </div>
  )
}
