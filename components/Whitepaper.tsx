'use client'

export default function Whitepaper() {
  const documents = [
    {
      title: "技术白皮书",
      description: "深入了解 NBCoin (NBC) 的技术架构、共识机制和核心特性",
      icon: "📋",
      link: "https://docs.nbcoin.io/whitepaper",
      type: "PDF"
    },
    {
      title: "技术文档",
      description: "开发者指南、API 文档和智能合约示例",
      icon: "📚",
      link: "https://docs.nbcoin.io",
      type: "在线文档"
    },
    {
      title: "路线图",
      description: "查看 NBCoin (NBC) 的发展规划和里程碑",
      icon: "🗺️",
      link: "https://nbcoin.io/roadmap",
      type: "网页"
    },
    {
      title: "演示视频",
      description: "观看平台功能演示和操作指南",
      icon: "🎥",
      link: "https://nbcoin.io/demo",
      type: "视频"
    }
  ]

  const milestones = [
    {
      quarter: "Q1 2024",
      title: "主网启动",
      description: "NBCoin 主网正式上线，支持基础交易功能"
    },
    {
      quarter: "Q2 2024", 
      title: "智能合约",
      description: "发布智能合约平台，支持 DApp 开发"
    },
    {
      quarter: "Q3 2024",
      title: "跨链桥接",
      description: "实现与其他主流公链的资产互通"
    },
    {
      quarter: "Q4 2024",
      title: "生态扩展",
      description: "构建完整的 DeFi 生态系统"
    }
  ]

  return (
    <section id="whitepaper" className="section-padding bg-chain-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            了解更多
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            深入了解 NBCoin (NBC) 的技术细节、发展规划和生态系统
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
            发展路线图
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            清晰的规划确保 NBCoin (NBC) 稳步发展，为用户提供可靠的服务
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
            加入我们的社区
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
