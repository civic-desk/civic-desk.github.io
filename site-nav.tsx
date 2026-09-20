import { ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/55 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2" aria-label="CivicDesk home">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
            CivicDesk -Stratustal
          </span>
        </a>
      </div>
    </header>
  )
}
