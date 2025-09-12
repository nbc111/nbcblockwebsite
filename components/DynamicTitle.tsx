'use client'

import { useTranslation } from '@/lib/i18n/useLocale'
import { useEffect } from 'react'

export default function DynamicTitle() {
  const { t } = useTranslation()

  useEffect(() => {
    // 更新页面标题
    document.title = t('pageTitle.title')
    
    // 更新 meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('pageTitle.description'))
    }
    
    // 更新 meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('pageTitle.keywords'))
    }
  }, [t])

  return null
}
