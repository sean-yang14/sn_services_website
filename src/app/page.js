import Image from 'next/image'
import Hero from '@/components/home/hero'
import Process from '@/components/home/process'
import Logos from '@/components/home/logos'
import Testimonials from '@/components/home/testimonials'
import Cta from '@/components/home/cta'
import Footer from '@/components/layout/footer'
import Services from '@/components/home/services'
import Navbar from '@/components/layout/navbar'
import Pricing from '@/components/home/pricing'
import Exclusive from '@/components/home/exclusive'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Navbar page='main'/>
      <main className='font-serif'>
        <Hero />
        <Exclusive />
        <Testimonials />
        <Services />
        <Logos />
        <Process />
        <Pricing />
        <Cta />
      </main>
      <footer className='font-serif'>
        <Footer />
      </footer>
    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //  <Hero />
    // </main>
  )
}
