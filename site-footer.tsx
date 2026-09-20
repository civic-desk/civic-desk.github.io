'use client'

import { ShieldCheck, X } from 'lucide-react'
import { useEffect, useState } from 'react'

type LegalKey = 'privacy' | 'terms'

const legalContent: Record<LegalKey, { title: string; body: React.ReactNode }> = {
  privacy: {
    title: 'Privacy Policy',
    body: (
      <>
        <p>
          <strong className="text-foreground">Last updated: September 2026</strong>
        </p>
        <p>
          CivicDesk by Stratustal (&quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy. This
          policy explains how we handle your information when you use our app.
        </p>
        <p>
          <strong className="text-foreground">1. Information We Collect.</strong> We collect the
          documents you choose to scan, along with basic account details such as your email address.
          Documents are processed on-device where possible.
        </p>
        <p>
          <strong className="text-foreground">2. How We Use Your Data.</strong> Your documents are
          used solely to provide scanning, summarization, and storage features. We never sell your
          personal data to third parties.
        </p>
        <p>
          <strong className="text-foreground">3. Storage &amp; Security.</strong> Documents synced to
          the cloud are encrypted end-to-end. You may delete your data at any time from within the
          app.
        </p>
        <p>
          <strong className="text-foreground">4. Third-Party Services.</strong> We use trusted
          providers for cloud storage and AI processing, who are bound by strict confidentiality
          obligations.
        </p>
      </>
    ),
  },
  terms: {
    title: 'Terms of Service',
    body: (
      <>
        <p>
          <strong className="text-foreground">Last updated: September 2026</strong>
        </p>
        <p>
          By accessing or using CivicDesk, you agree to be bound by these Terms of Service. If you
          do not agree, please do not use the app.
        </p>
        <p>
          <strong className="text-foreground">1. Use of Service.</strong> CivicDesk provides tools
          to scan, summarize, and store documents. You agree to use the service only for lawful
          purposes and in compliance with all applicable laws.
        </p>
        <p>
          <strong className="text-foreground">2. Your Content.</strong> You retain all ownership of
          the documents you upload. You are responsible for ensuring you have the right to process
          any documents you scan.
        </p>
        <p>
          <strong className="text-foreground">3. AI Summaries.</strong> AI-generated summaries are
          provided for convenience and may contain errors. They do not constitute legal advice and
          should not be relied upon as such.
        </p>
        <p>
          <strong className="text-foreground">4. Availability.</strong> We strive for reliable
          service but do not guarantee uninterrupted access. Features may change over time.
        </p>
        <p>
          <strong className="text-foreground">5. Limitation of Liability.</strong> CivicDesk is
          provided &quot;as is&quot; without warranties of any kind. We are not liable for any
          damages arising from your use of the service.
        </p>
      </>
    ),
  },
}

export function SiteFooter() {
  const [openKey, setOpenKey] = useState<LegalKey | null>(null)

  useEffect(() => {
    if (!openKey) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenKey(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [openKey])

  const active = openKey ? legalContent[openKey] : null

  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="size-4" aria-hidden="true" />
          </span>
          <span className="font-display font-bold text-foreground">CivicDesk by Statustal</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; 2026 CivicDesk. All rights reserved.
        </p>
        <nav className="flex items-center gap-6" aria-label="Legal">
          <button
            type="button"
            onClick={() => setOpenKey('privacy')}
            className="glass-button rounded px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => setOpenKey('terms')}
            className="glass-button rounded px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Terms of Service
          </button>
        </nav>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
        >
          <div
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setOpenKey(null)}
            aria-hidden="true"
          />
          <div className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-4">
              <h2
                id="legal-modal-title"
                className="font-display text-xl font-bold text-foreground"
              >
                {active.title}
              </h2>
              <button
                type="button"
                onClick={() => setOpenKey(null)}
                aria-label="Close dialog"
                className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-4 overflow-y-auto px-6 py-5 text-sm leading-relaxed text-muted-foreground">
              {active.body}
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  )
}
