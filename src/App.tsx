import Header from './components/Header'
import Hero from './components/Hero'
import ClientBar from './components/ClientBar'
import Features from './components/Features'
import LatestUpdates from './components/LatestUpdates'
import Products from './components/Products'
import RetailBrands from './components/RetailBrands'
import Events from './components/Events'
import QuoteBanner from './components/QuoteBanner'
import ApacPartners, { PartnerLogos } from './components/ApacPartners'
import Team from './components/Team'
import FooterCTA from './components/FooterCTA'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="bg-white text-ink antialiased overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <div className="mx-auto max-w-wide lg:border-x border-frame">
          <ClientBar />
          <Features />
          <LatestUpdates />
          <Products />
          <RetailBrands />
          <Events />
          <QuoteBanner />
          <ApacPartners />
          <PartnerLogos />
          <Team />
          <FooterCTA />
          <SiteFooter />
        </div>
      </main>
    </div>
  )
}
