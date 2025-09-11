'use client'

import { useTranslation } from '@/lib/i18n/useLocale'

export default function Features() {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: "🚀",
      title: t('features.rapidDevelopment'),
      description: t('features.rapidDevelopmentDesc')
    },
    {
      icon: "🛡️",
      title: t('features.stability'),
      description: t('features.stabilityDesc')
    },
    {
      icon: "📈",
      title: t('features.scalability'),
      description: t('features.scalabilityDesc')
    },
    {
      icon: "🔧",
      title: t('features.maintainability'),
      description: t('features.maintainabilityDesc')
    },
    {
      icon: "🌐",
      title: t('features.crossChain'),
      description: t('features.crossChainDesc')
    },
    {
      icon: "💼",
      title: t('features.communityDriven'),
      description: t('features.communityDrivenDesc')
    }
  ]

  return (
    <section id="features" className="section-padding bg-chain-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-chain-primary p-6 rounded-xl border border-chain-accent/20 hover:border-chain-highlight/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
