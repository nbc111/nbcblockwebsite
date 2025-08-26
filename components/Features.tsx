export default function Features() {
  const features = [
    {
      icon: "🚀",
      title: "开发者友好",
      description: "提供完整的开发工具链、SDK 和 API，支持多种编程语言，让开发者快速构建和部署智能合约。"
    },
    {
      icon: "🛡️",
      title: "稳定可靠",
      description: "99.9%的系统稳定性，采用先进的共识机制和容错技术，确保网络持续运行。"
    },
    {
      icon: "📈",
      title: "水平扩展",
      description: "采用分片技术和 Layer 2 解决方案，支持水平扩展，可根据业务需求动态调整网络容量和性能。"
    },
    {
      icon: "🔧",
      title: "易于维护",
      description: "提供完整的监控、日志和运维工具，让系统维护变得简单高效。"
    },
    {
      icon: "🌐",
      title: "跨链互操作",
      description: "支持多种区块链标准和协议，实现与其他公链的互操作性和资产转移，构建完整的区块链生态。"
    },
    {
      icon: "💼",
      title: "社区驱动",
      description: "开源透明，社区治理，开发者共同参与生态建设和决策。"
    }
  ]

  return (
    <section id="features" className="section-padding bg-chain-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            核心特性
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            专为高性能、安全和可扩展而设计的 Layer 1 公链平台，为开发者提供完整的区块链基础设施
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
