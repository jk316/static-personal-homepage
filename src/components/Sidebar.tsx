'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: '个人简介', path: '/' },
    { name: '图论教材', path: '/graph' },
    { name: '获奖情况', path: '/awards' },
    { name: '学术兼职', path: '/services' },
    { name: '科研项目', path: '/projects' },
    { name: '学术论文', path: '/papers' },
    { name: '教学工作', path: '/teaching' },
    { name: '技术标准', path: '/standards' },
  ]

  const logoLinks = [
    { name: 'OJ', url: 'http://oj.cuiyong.net/', color: 'bg-blue-500' },
    { name: '清华大学', url: 'http://www.tsinghua.edu.cn/', color: 'bg-purple-600' },
    { name: 'IETF', url: 'http://www.ietf.org/', color: 'bg-green-600' },
    { name: 'CCSA', url: 'http://www.ccsa.org.cn/', color: 'bg-red-500' },
    { name: 'CS', url: 'http://www.cs.tsinghua.edu.cn/', color: 'bg-blue-600' },
    { name: 'CCF', url: 'http://www.ccf.org.cn', color: 'bg-orange-500' },
  ]

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-purple-700 text-white p-2 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-[280px] lg:w-[180px] min-w-[180px]
          border-r border-gray-400 bg-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Language Toggle */}
        <div className="h-[45px] flex items-center justify-center border-b border-gray-400">
          <span className="text-[10pt] text-gray-600">
            <a
              href="#"
              className="hover:text-blue-600 hover:underline font-semibold transition-all duration-200 ease-in-out"
            >
              中文版
            </a>{' '}
            |{' '}
            <a
              href="#"
              className="hover:text-blue-600 hover:underline font-semibold text-gray-600 transition-all duration-200 ease-in-out"
            >
              English
            </a>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-4 px-2 overflow-y-auto">
          {navItems.map((item, index) => (
            <div key={item.path} className="mb-[10px]">
              <Link
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-center text-[10pt] font-semibold transition-all duration-200 ease-in-out ${
                  pathname === item.path
                    ? 'text-orange-400'
                    : 'text-gray-700 hover:underline hover:font-bold hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Logo Links */}
        <div className="pb-[450px] lg:pb-[450px]">
          {logoLinks.map((link, index) => (
            <div key={index} className="h-[66px] flex items-center justify-center">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className={`w-[129px] h-[44px] ${link.color} flex items-center justify-center text-white text-sm font-medium rounded transition-all duration-200 ease-in-out hover:opacity-90 hover:scale-105 hover:shadow-lg`}
                >
                  {link.name}
                </div>
              </a>
            </div>
          ))}
        </div>
      </aside>
    </>
  )
}
