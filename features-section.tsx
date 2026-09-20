import { Lock, FileStack, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Lock,
    title: 'Local-First Security',
    description:
      'Your documents are processed on-device for maximum privacy, then encrypted end-to-end with Supabase before they ever touch the cloud.',
  },
  {
    icon: FileStack,
    title: 'Sequential AI Scanning',
    description:
      'Handle complex multi-page files with confidence. CivicDesk processes each page in sequence, so large documents summarize cleanly without crashing.',
  },
  {
    icon: Smartphone,
    title: 'PIN Protected App Access',
    description:
      'A secure on device PIN makes sure no one without knowing your PIN can access your sensitive information on CivicDesk',
  },
]

export function FeaturesSection() {
  return (
    <section className="border-t border-white/10 bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Built for trust, speed, and control.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to capture and understand your most important
            documents, without compromising on privacy.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-surface rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
