'use client'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-chain-highlight to-red-600">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备构建去中心化未来？
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            加入 NBCoin (NBC) 生态系统，体验高性能、安全、可扩展的公链平台。
            开源透明，社区驱动，共同构建下一代区块链基础设施。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.open('https://docs.nbcoin.io', '_blank')}
              className="bg-white text-chain-highlight hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg cursor-pointer"
            >
              查看文档
            </button>
            <button 
              onClick={() => window.open('https://github.com/nbcoin', '_blank')}
              className="border-2 border-white text-white hover:bg-white hover:text-chain-highlight font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg cursor-pointer"
            >
              贡献代码
            </button>
          </div>
          
          <div className="mt-8 text-white/80">
            <p>开发者？ <a 
              href="https://docs.nbcoin.io/developers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors cursor-pointer"
            >开发者指南</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
