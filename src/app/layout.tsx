import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '崔勇实验室个人主页',
  description: '清华大学崔勇教授的个人主页',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
