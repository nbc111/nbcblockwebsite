'use client'

import { useState } from 'react'
import QRCodeModal from './QRCodeModal'
import LocaleSwitcher, { MobileLocaleSwitcher } from './LocaleSwitcher'
import { useTranslation } from '@/lib/i18n/useLocale'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)
  const { t } = useTranslation()
  
  const walletDownloadUrl = 'https://206.238.196.207:36345/down/dBBBKxD5n6rm.apk'
  
  const handleWalletDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    
    if (userAgent.includes('android')) {
      // Android 用户直接下载
      window.open(walletDownloadUrl, '_blank')
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      // iOS 用户显示提示（因为这是APK文件）
      alert(t('common.androidOnlyMessage'))
    } else {
      // 桌面用户显示二维码
      setIsQRModalOpen(true)
    }
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-chain-primary/95 backdrop-blur-sm border-b border-chain-accent/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-chain-highlight rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-white">NBCoin (NBC)</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">{t('navigation.features')}</a>
            <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">{t('navigation.benefits')}</a>
            <a href="#technology" className="text-gray-300 hover:text-white transition-colors">{t('navigation.technology')}</a>
            <a href="#whitepaper" className="text-gray-300 hover:text-white transition-colors">{t('navigation.whitepaper')}</a>
            <button 
              onClick={handleWalletDownload}
              className="text-chain-highlight hover:text-white transition-colors font-semibold flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 7h-3V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM5 4h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm11 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8h12v10zm2-2h-2v-2h2v2z"/>
              </svg>
              <span>{t('navigation.wallet')}</span>
            </button>
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LocaleSwitcher />
            <button 
              onClick={() => {
                window.open('https://github.com/nbc111', '_blank', 'noopener,noreferrer')
              }}
              className="btn-primary cursor-pointer"
            >
              {t('navigation.developers')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-chain-secondary border-t border-chain-accent/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">{t('navigation.features')}</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">{t('navigation.benefits')}</a>
              <a href="#technology" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">{t('navigation.technology')}</a>
              <a href="#whitepaper" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">{t('navigation.whitepaper')}</a>
              <button 
                onClick={handleWalletDownload}
                className="block w-full px-3 py-2 text-left text-chain-highlight hover:text-white transition-colors font-semibold flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 7h-3V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM5 4h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm11 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8h12v10zm2-2h-2v-2h2v2z"/>
                </svg>
                <span>{t('navigation.wallet')}</span>
              </button>
              <MobileLocaleSwitcher />
              <div className="pt-4">
                <button 
                  onClick={() => {
                    window.open('https://github.com/nbc111', '_blank', 'noopener,noreferrer')
                  }}
                  className="btn-primary w-full cursor-pointer"
                >
                  {t('navigation.developers')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* 二维码模态框 */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        downloadUrl={walletDownloadUrl}
        appName={t('navigation.wallet')}
      />
    </header>
  )
}
