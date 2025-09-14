'use client'

import { useTranslation } from '@/lib/i18n/useLocale'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-chain-primary via-chain-secondary to-chain-accent">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">{t('hero.title')}</span>
            <br />
            <span className="text-chain-highlight">{t('hero.subtitle')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                // 暂时屏蔽点击事件
                // 按钮样式保持不变
              }}
              className="btn-primary text-lg px-8 py-4 cursor-pointer"
            >
              {t('hero.startBuilding')}
            </button>
            <button 
              onClick={() => {
                // 暂时屏蔽点击事件
                // 按钮样式保持不变
              }}
              className="btn-secondary text-lg px-8 py-4 cursor-pointer"
            >
              {t('hero.learnMore')}
            </button>
          </div>
          
          {/* 关键指标 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-chain-accent/30">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chain-highlight mb-2">100,000+</div>
              <div className="text-gray-300">{t('hero.tpsCapability')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chain-highlight mb-2">{t('hero.openSource')}</div>
              <div className="text-gray-300">{t('hero.transparent')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chain-highlight mb-2">{t('hero.crossChain')}</div>
              <div className="text-gray-300">{t('hero.interoperability')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
