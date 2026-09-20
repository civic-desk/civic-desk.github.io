import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_75%_20%,oklch(0.42_0.12_195_/_18%),transparent_35%),radial-gradient(circle_at_15%_30%,oklch(0.35_0.14_255_/_20%),transparent_38%)]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Copy */}
        <div className="flex flex-col items-start">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            AI-powered document intelligence
          </span>
          <h1 className="text-balance font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your Personal Document Command Center.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Scan, summarize, and secure multi-page legal documents and receipts
            using advanced AI, right from your phone.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              className="glass-button gap-2"
              nativeButton={false}
              render={<a href="https://civic-buddy-desk.vercel.app" />}
            >
              Launch in Browser
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-button gap-2"
              nativeButton={false}
              render={<a href="https://civic-desk.github.io/civic-desk/Civic%20Desk.apk" />}
            >
              <Download className="size-4" aria-hidden="true" />
              Download Android APK
            </Button>
          </div>
        </div>

        {/* Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 mx-auto h-full w-3/4 rounded-full bg-accent/20 blur-3xl"
          />
          <img
            src="/civic-desk-mockup.png"
            alt="CivicDesk mobile app scanning a legal document and showing an AI-generated summary"
            className="w-full max-w-sm drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
