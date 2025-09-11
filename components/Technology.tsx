'use client'

import { useTranslation } from '@/lib/i18n/useLocale'

export default function Technology() {
  const { t } = useTranslation()
  const techFeatures = [
    {
      title: t('technology.consensus'),
      description: t('technology.consensusDesc'),
      icon: "🔐"
    },
    {
      title: t('technology.smartContracts'),
      description: t('technology.smartContractsDesc'),
      icon: "📜"
    },
    {
      title: t('technology.crossChain'),
      description: t('technology.crossChainDesc'),
      icon: "🌉"
    },
    {
      title: t('technology.privacy'),
      description: t('technology.privacyDesc'),
      icon: "🕵️"
    }
  ]

  return (
    <section id="technology" className="section-padding bg-chain-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('technology.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('technology.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 技术架构图 */}
          <div className="bg-chain-primary p-8 rounded-xl border border-chain-accent/20">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-chain-highlight mb-2">{t('technology.applicationLayer')}</div>
                <div className="text-gray-300">{t('technology.applicationLayerDesc')}</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-2 h-8 bg-chain-highlight"></div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-chain-highlight mb-2">{t('technology.consensusLayer')}</div>
                <div className="text-gray-300">{t('technology.consensusLayerDesc')}</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-2 h-8 bg-chain-highlight"></div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-chain-highlight mb-2">{t('technology.networkLayer')}</div>
                <div className="text-gray-300">{t('technology.networkLayerDesc')}</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-2 h-8 bg-chain-highlight"></div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-chain-highlight mb-2">{t('technology.dataLayer')}</div>
                <div className="text-gray-300">{t('technology.dataLayerDesc')}</div>
              </div>
            </div>
          </div>

          {/* 技术特性 */}
          <div className="space-y-6">
            {techFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 性能指标 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-chain-primary p-6 rounded-xl text-center border border-chain-accent/20">
            <div className="text-3xl font-bold text-chain-highlight mb-2">100,000+</div>
            <div className="text-gray-300">{t('technology.tps')}</div>
          </div>
          <div className="bg-chain-primary p-6 rounded-xl text-center border border-chain-accent/20">
            <div className="text-3xl font-bold text-chain-highlight mb-2">&lt; 3{t('technology.seconds')}</div>
            <div className="text-gray-300">{t('technology.confirmationTime')}</div>
          </div>
          <div className="bg-chain-primary p-6 rounded-xl text-center border border-chain-accent/20">
            <div className="text-3xl font-bold text-chain-highlight mb-2">{t('technology.high')}</div>
            <div className="text-gray-300">{t('technology.availability')}</div>
          </div>
          <div className="bg-chain-primary p-6 rounded-xl text-center border border-chain-accent/20">
            <div className="text-3xl font-bold text-chain-highlight mb-2">{t('technology.sharding')}</div>
            <div className="text-gray-300">{t('technology.scalability')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
