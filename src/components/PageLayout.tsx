import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import ScrollToTop from '@/components/ScrollToTop'

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen lg:static relative">
        {/* Left Sidebar - Fixed on Desktop, Fixed overlay on Mobile */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 lg:ml-0 ml-0 pt-16 lg:pt-0">
          {/* Header */}
          <Header />

          {/* Page Content */}
          {children}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
