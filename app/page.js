import React from 'react'
import Header from './components/ui/Header'
import HeroSection from './components/ui/HeroSection'
import Features from './components/ui/Features'
import Footer from './components/ui/Footer'

const page = () => {
  return (
    <div className='font-sans min-h-[100vh]'>
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  )
}

export default page