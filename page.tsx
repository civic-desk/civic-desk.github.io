import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background bg-[radial-gradient(circle_at_50%_-10%,oklch(0.35_0.12_255_/_24%),transparent_42%)]">
      <SiteNav />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
