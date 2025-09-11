'use client'

import { useTranslation } from '@/lib/i18n/useLocale'

export default function Whitepaper() {
  const { t } = useTranslation()
  const documents = [
    {
      title: t('whitepaper.whitepaper'),
      description: t('whitepaper.whitepaperDesc'),
      icon: "📋",
      link: "/whitepaper.pdf?v=" + Date.now(),
      type: t('whitepaper.pdf')
    },
    {
      title: t('whitepaper.technicalDocs'),
      description: t('whitepaper.technicalDocsDesc'),
      icon: "📚",
      link: "https://docs.nbcoin.io",
      type: t('whitepaper.onlineDocs')
    },
    {
      title: t('whitepaper.roadmap'),
      description: t('whitepaper.roadmapDesc'),
      icon: "🗺️",
      link: "https://nbcoin.io/roadmap",
      type: t('whitepaper.webpage')
    },
    {
      title: t('whitepaper.demoVideo'),
      description: t('whitepaper.demoVideoDesc'),
      icon: "🎥",
      link: "https://nbcoin.io/demo",
      type: t('whitepaper.video')
    }
  ]

  const milestones = [
    {
      quarter: "Q1 2025",
      title: t('whitepaper.mainnetLaunch'),
      description: t('whitepaper.mainnetLaunchDesc')
    },
    {
      quarter: "Q2 2025", 
      title: t('whitepaper.smartContracts'),
      description: t('whitepaper.smartContractsDesc')
    },
    {
      quarter: "Q3 2025",
      title: t('whitepaper.crossChain'),
      description: t('whitepaper.crossChainDesc')
    },
    {
      quarter: "Q4 2025",
      title: t('whitepaper.ecosystemExpansion'),
      description: t('whitepaper.ecosystemExpansionDesc')
    }
  ]

  return (
    <section id="whitepaper" className="section-padding bg-chain-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('whitepaper.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('whitepaper.description')}
          </p>
        </div>

        {/* 文档资源 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-chain-secondary p-6 rounded-xl border border-chain-accent/20 hover:border-chain-highlight/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              onClick={() => window.open(doc.link, '_blank')}
            >
              <div className="text-4xl mb-4">{doc.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {doc.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {doc.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-chain-highlight text-sm font-medium">
                  {doc.type}
                </span>
                <svg className="w-5 h-5 text-chain-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* 发展路线图 */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('whitepaper.roadmapTitle')}
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('whitepaper.roadmapDescription')}
          </p>
        </div>

        <div className="relative">
          {/* 连接线 */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-chain-accent/30 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative text-center">
                {/* 时间线节点 */}
                <div className="w-4 h-4 bg-chain-highlight rounded-full mx-auto mb-4 relative z-10"></div>
                
                <div className="bg-chain-secondary p-6 rounded-xl border border-chain-accent/20">
                  <div className="text-chain-highlight font-bold text-lg mb-2">
                    {milestone.quarter}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 社区链接 */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            {t('whitepaper.joinCommunity')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/nbcoin_official"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chain-highlight hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center space-x-2"
            >
              <span>📱</span>
              <span>Telegram</span>
            </a>
            <a
              href="https://twitter.com/nbcoin_official"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chain-highlight hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center space-x-2"
            >
              <span>🐦</span>
              <span>Twitter</span>
            </a>
            <a
              href="https://discord.gg/nbcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chain-highlight hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center space-x-2"
            >
              <span>🎮</span>
              <span>Discord</span>
            </a>
            <a
              href="https://github.com/nbcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chain-highlight hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center space-x-2"
            >
              <span>💻</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
