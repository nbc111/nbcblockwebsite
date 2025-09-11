import type { Metadata } from 'next'
import './globals.css'
import { LocaleProvider } from '@/lib/i18n/useLocale'

export const metadata: Metadata = {
  title: 'NBCoin (NBC) - 稳定、快速、可扩展的公链平台',
  description: 'NBCoin (NBC) 是一个专为稳定、快速上线和后期扩展而设计的公链平台。提供高性能、安全可靠的区块链基础设施。',
  keywords: '公链,区块链,稳定,快速上线,可扩展,NBCoin,NBC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body className="bg-chain-primary text-white">
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
