'use client'

import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'
import { useTranslation } from '@/lib/i18n/useLocale'

interface QRCodeModalProps {
  isOpen: boolean
  onClose: () => void
  downloadUrl: string
  appName: string
}

export default function QRCodeModal({ isOpen, onClose, downloadUrl, appName }: QRCodeModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const [qrGenerated, setQrGenerated] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  // 生成二维码
  useEffect(() => {
    if (isOpen && canvasRef.current && !qrGenerated) {
      QRCode.toCanvas(canvasRef.current, downloadUrl, {
        width: 240,
        margin: 2,
        color: {
          dark: '#1a1a2e',
          light: '#ffffff'
        },
        errorCorrectionLevel: 'M'
      }, (error) => {
        if (error) {
          console.error('QR Code generation error:', error)
        } else {
          setQrGenerated(true)
        }
      })
    }
  }, [isOpen, downloadUrl, qrGenerated])

  // 重置状态当模态框关闭时
  useEffect(() => {
    if (!isOpen) {
      setQrGenerated(false)
      setIsVisible(false)
    } else {
      // 延迟显示动画
      setTimeout(() => setIsVisible(true), 10)
    }
  }, [isOpen])

  // 处理ESC键关闭
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // 防止背景滚动
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // 处理背景点击关闭
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 99999,
        width: '100vw',
        height: '100vh'
      }}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-auto relative"
        style={{ 
          maxHeight: '90vh', 
          overflowY: 'auto',
          position: 'relative',
          zIndex: 100000
        }}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 z-10"
          aria-label={t('common.close')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 标题 */}
        <div className="text-center px-6 pt-6 pb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t('modal.downloadWallet')}</h3>
          <p className="text-sm text-gray-600">{t('modal.scanQRCode')}</p>
        </div>

        {/* 二维码 */}
        <div className="px-6 pb-4">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <canvas ref={canvasRef} className="block mx-auto" />
            <p className="text-xs text-gray-500 mt-2">{t('modal.scanToDownload')}</p>
          </div>
        </div>

        {/* 按钮组 */}
        <div className="px-6 pb-6 space-y-3">
          {/* 直接下载 APK 按钮 */}
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-chain-highlight hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{t('modal.directDownload')}</span>
          </a>
          
          {/* 访问钱包网站按钮 */}
          <a
            href="https://download.zkbwallets.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2 border border-gray-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>{t('modal.visitWebsite')}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
