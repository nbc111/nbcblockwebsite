'use client'

import { useTranslation } from '@/lib/i18n/useLocale'
import { i18nConfig } from '@/lib/i18n/config'

export default function LocaleSwitcher() {
  const { locale, setLocale } = useTranslation()

  // 当前阶段隐藏语言切换器
  if (!i18nConfig.localeSwitcher.show) {
    return null
  }

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale)
  }

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-300">语言:</span>
        <select
          value={locale}
          onChange={(e) => handleLocaleChange(e.target.value)}
          className="bg-transparent text-white border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:border-chain-highlight"
        >
          {i18nConfig.locales.map((loc) => (
            <option key={loc} value={loc} className="bg-chain-primary text-white">
              {i18nConfig.localeNames[loc as keyof typeof i18nConfig.localeNames]}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

// 移动端语言切换器
export function MobileLocaleSwitcher() {
  const { locale, setLocale } = useTranslation()

  // 当前阶段隐藏
  if (!i18nConfig.localeSwitcher.show) {
    return null
  }

  return (
    <div className="px-3 py-2 border-t border-chain-accent/20">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-300">语言</span>
        <select
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
          className="bg-transparent text-white border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:border-chain-highlight"
        >
          {i18nConfig.locales.map((loc) => (
            <option key={loc} value={loc} className="bg-chain-primary text-white">
              {i18nConfig.localeNames[loc as keyof typeof i18nConfig.localeNames]}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
