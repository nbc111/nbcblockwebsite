import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import Technology from '@/components/Technology'
import Whitepaper from '@/components/Whitepaper'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Technology />
      <Whitepaper />
      <CTA />
      <Footer />
    </main>
  )
}
