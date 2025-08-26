'use client'

export default function Technology() {
  const techFeatures = [
    {
      title: "共识机制",
      description: "采用改进的PoS共识算法，确保网络安全性和交易确认速度",
      icon: "🔐"
    },
    {
      title: "智能合约",
      description: "支持多种编程语言，提供安全的智能合约执行环境",
      icon: "📜"
    },
    {
      title: "跨链桥接",
      description: "内置跨链桥接功能，实现多链资产互通",
      icon: "🌉"
    },
    {
      title: "隐私保护",
      description: "零知识证明技术，保护用户交易隐私",
      icon: "🕵️"
    }
  ]

  return (
    <section id="technology" className="section-padding bg-chain-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            技术架构
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            基于先进的区块链技术构建，采用分层架构设计，确保性能、安全性和可扩展性的完美平衡
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 技术架构图 */}
          <div className="bg-chain-primary p-8 rounded-xl border border-chain-accent/20">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-chain-highlight mb-2">应用层</div>
                <div className="text-gray-300">DApps, 智能合约, API</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-2 h-8 bg-chain-highlight"></div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-chain-highlight mb-2">共识层</div>
                <div className="text-gray-300">PoS, 验证节点, 区块生成</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-2 h-8 bg-chain-highlight"></div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-chain-highlight mb-2">网络层</div>
                <div className="text-gray-300">P2P网络, 节点发现, 数据传输</div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-2 h-8 bg-chain-highlight"></div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-chain-highlight mb-2">数据层</div>
                <div className="text-gray-300">区块链, 状态存储, 默克尔树</div>
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
            <div className="text-3xl font-bold text-chain-highlight mb-2">10,000+</div>
            <div className="text-gray-300">TPS</div>
          </div>
          <div className="bg-chain-primary p-6 rounded-xl text-center border border-chain-accent/20">
            <div className="text-3xl font-bold text-chain-highlight mb-2">&lt; 3秒</div>
            <div className="text-gray-300">确认时间</div>
          </div>
          <div className="bg-chain-primary p-6 rounded-xl text-center border border-chain-accent/20">
            <div className="text-3xl font-bold text-chain-highlight mb-2">高</div>
            <div className="text-gray-300">可用性</div>
          </div>
          <div className="bg-chain-primary p-6 rounded-xl text-center border border-chain-accent/20">
            <div className="text-3xl font-bold text-chain-highlight mb-2">分片</div>
            <div className="text-gray-300">扩展性</div>
          </div>
        </div>
      </div>
    </section>
  )
}
