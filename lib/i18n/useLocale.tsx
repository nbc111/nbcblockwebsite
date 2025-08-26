'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import { i18nConfig, localeDetection, localeRouting } from './config'
import { getText } from './translations'

// 语言上下文类型
interface LocaleContextType {
  locale: string
  setLocale: (locale: string) => void
  t: (key: string) => string
  isReady: boolean
}

// 创建语言上下文
const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

// 语言提供者组件
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState(i18nConfig.defaultLocale)
  const [isReady, setIsReady] = useState(false)

  // 设置语言
  const setLocale = (newLocale: string) => {
    if (i18nConfig.locales.includes(newLocale)) {
      setLocaleState(newLocale)
      
      // 保存到 cookie
      if (localeRouting.useCookie) {
        document.cookie = `${localeRouting.cookieName}=${newLocale}; path=/; max-age=31536000`
      }
      
      // 保存到 localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('nbcoin-locale', newLocale)
      }
    }
  }

  // 翻译函数
  const t = (key: string): string => {
    return getText(locale, key)
  }

  // 初始化语言设置
  useEffect(() => {
    const initializeLocale = () => {
      let detectedLocale = i18nConfig.defaultLocale

      // 1. 检查 cookie
      if (localeRouting.useCookie) {
        const cookieValue = document.cookie
          .split('; ')
          .find(row => row.startsWith(`${localeRouting.cookieName}=`))
        if (cookieValue) {
          const cookieLocale = cookieValue.split('=')[1]
          if (i18nConfig.locales.includes(cookieLocale)) {
            detectedLocale = cookieLocale
          }
        }
      }

      // 2. 检查 localStorage
      if (typeof window !== 'undefined') {
        const storedLocale = localStorage.getItem('nbcoin-locale')
        if (storedLocale && i18nConfig.locales.includes(storedLocale)) {
          detectedLocale = storedLocale
        }
      }

      // 3. 自动检测用户语言（如果启用）
      if (localeDetection.autoDetect && typeof window !== 'undefined') {
        const browserLocale = navigator.language
        const shortLocale = browserLocale.split('-')[0]
        
        // 映射浏览器语言到支持的语言
        const localeMap: Record<string, string> = {
          'zh': 'zh-CN',
          'en': 'en-US'
        }
        
        if (localeMap[shortLocale] && i18nConfig.locales.includes(localeMap[shortLocale])) {
          detectedLocale = localeMap[shortLocale]
        }
      }

      setLocaleState(detectedLocale)
      setIsReady(true)
    }

    initializeLocale()
  }, [])

  const value: LocaleContextType = {
    locale,
    setLocale,
    t,
    isReady
  }

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

// 使用语言 Hook
export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}

// 简化的翻译 Hook（当前阶段使用）
export function useTranslation() {
  const { t, locale, setLocale } = useLocale()
  
  return {
    t,
    locale,
    setLocale,
    isZh: locale === 'zh-CN',
    isEn: locale === 'en-US'
  }
}
