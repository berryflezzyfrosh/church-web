import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../UI/ScrollToTop'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-hidden">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout