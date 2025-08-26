'use client'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-chain-primary via-chain-secondary to-chain-accent">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">高性能 · 可扩展</span>
            <br />
            <span className="text-chain-highlight">企业级区块链基础设施</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            NBCoin (NBC) 是一个基于 Layer 1 的高性能公链平台，采用先进的共识机制和分片技术，
            支持智能合约、跨链互操作和 DeFi 应用部署，为开发者提供完整的区块链基础设施。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.open('https://docs.nbcoin.io', '_blank')}
              className="btn-primary text-lg px-8 py-4 cursor-pointer"
            >
              开始构建
            </button>
            <button 
              onClick={() => document.getElementById('whitepaper')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-4 cursor-pointer"
            >
              了解更多
            </button>
          </div>
          
          {/* 关键指标 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-chain-accent/30">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chain-highlight mb-2">10,000+</div>
              <div className="text-gray-300">TPS 处理能力</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chain-highlight mb-2">开源</div>
              <div className="text-gray-300">透明可信</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chain-highlight mb-2">跨链</div>
              <div className="text-gray-300">互操作能力</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
