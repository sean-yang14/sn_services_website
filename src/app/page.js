import Image from 'next/image'
import Hero from '@/components/home/hero'
import Process from '@/components/home/process'
import Logos from '@/components/home/logos'
import Testimonials from '@/components/home/testimonials'
import Cta from '@/components/home/cta'
import Footer from '@/components/layout/footer'
import Services from '@/components/home/services'

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <Logos />
      <Services />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //  <Hero />
    // </main>
  )
}
