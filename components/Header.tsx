'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-chain-primary/95 backdrop-blur-sm border-b border-chain-accent/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-chain-highlight rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-white">NBCoin (NBC)</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">特性</a>
            <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">优势</a>
            <a href="#technology" className="text-gray-300 hover:text-white transition-colors">技术</a>
            <a href="#whitepaper" className="text-gray-300 hover:text-white transition-colors">白皮书</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => window.open('https://docs.nbcoin.io', '_blank')}
              className="btn-primary cursor-pointer"
            >
              开发者
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-chain-secondary border-t border-chain-accent/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">特性</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">优势</a>
              <a href="#technology" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">技术</a>
              <a href="#whitepaper" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">白皮书</a>
              <div className="pt-4">
                <button 
                  onClick={() => window.open('https://docs.nbcoin.io', '_blank')}
                  className="btn-primary w-full cursor-pointer"
                >
                  开发者
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
