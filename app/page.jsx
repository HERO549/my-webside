import Header from '@/components/header.jsx'
import Hero from '@/components/hero.jsx'
import Features from '@/components/features.jsx'
import PressPlay from '@/components/press-play.jsx'
import Believe from '@/components/believe.jsx'
import Resources from '@/components/resources.jsx'
import Platform from '@/components/platform.jsx'
import Testimonials from '@/components/testimonials.jsx'
import Footer from '@/components/footer.jsx'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <PressPlay />
      <Believe />
      <Resources />
      <Platform />
      <Testimonials />
      <Footer />
    </main>
  )
}
