'use client'

import { useTranslation } from '@/lib/i18n/useLocale'

export default function CTA() {
  const { t } = useTranslation()
  return (
    <section className="section-padding bg-gradient-to-r from-chain-highlight to-red-600">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t('cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.open('https://docs.nbcoin.io', '_blank')}
              className="bg-white text-chain-highlight hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg cursor-pointer"
            >
              {t('cta.viewDocs')}
            </button>
            <button 
              onClick={() => window.open('https://github.com/nbcoin', '_blank')}
              className="border-2 border-white text-white hover:bg-white hover:text-chain-highlight font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg cursor-pointer"
            >
              {t('cta.contributeCode')}
            </button>
          </div>
          
          <div className="mt-8 text-white/80">
            <p>{t('cta.developerQuestion')} <a 
              href="https://docs.nbcoin.io/developers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors cursor-pointer"
            >{t('cta.developerGuide')}</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
