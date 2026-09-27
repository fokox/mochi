import { useState } from 'react'

export default function StatusCard() {
  const [portraitUnavailable, setPortraitUnavailable] = useState(false)

  return (
    <article className="status-card relative w-full max-w-[660px] text-center" aria-label="Alex Morgan's daily status">
      <div className="card-frame absolute inset-0" aria-hidden="true"><div className="card-surface absolute inset-[2px]" /></div>

      <div className="profile-picture absolute left-1/2 top-0 z-20 flex h-[108px] w-[108px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
        {portraitUnavailable ? (
          <svg viewBox="0 0 64 64" className="h-full w-full rounded-full bg-[#252039] p-5 text-violet-200" aria-label="Default user profile picture" role="img">
            <circle cx="32" cy="22" r="11" fill="currentColor" />
            <path d="M9 59c0-14 10-23 23-23s23 9 23 23" fill="currentColor" />
          </svg>
        ) : (
          <img className="h-full w-full rounded-full object-cover" src="https://i.pravatar.cc/240?img=12" alt="Alex Morgan's profile picture" width="108" height="108" onError={() => setPortraitUnavailable(true)} />
        )}
        <span className="profile-spark absolute -bottom-0.5 right-0.5 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-[#13121f] bg-[#b9a0eb] text-[17px] text-[#282039]" aria-hidden="true">✦</span>
      </div>

      <span className="quote-mark quote-opening absolute" aria-hidden="true">“</span>
      <span className="quote-mark quote-closing absolute" aria-hidden="true">”</span>

      <div className="card-content relative z-10 px-7 pb-8 pt-[75px] sm:px-16 sm:pb-9">
        <h2 className="text-[17px] font-medium tracking-[-0.3px] text-slate-100">Alex Morgan</h2>
        <p className="mt-1.5 text-[11px] tracking-[0.05em] text-slate-500">@alexinorbit</p>

        <div className="mood-pill mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-violet-300/10 bg-violet-300/[0.045] px-3 py-1.5 text-[9px] font-medium tracking-[0.12em] text-violet-200/80">
          <span className="h-1 w-1 rounded-full bg-violet-300" />
          IN A REFLECTIVE MOOD
        </div>

        <p className="status-paragraph mx-auto mt-6 max-w-[515px] text-[#e4e0ed]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
        </p>

        <div className="card-divider mx-auto mb-5 mt-7 h-px max-w-[420px]" />
        <div className="flex items-center justify-center gap-2 text-[9px] font-medium tracking-[0.15em] text-slate-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="4" y="5" width="16" height="16" rx="3" /><path d="M8 3v4m8-4v4M4 11h16" /></svg>
          SUNDAY, SEPTEMBER 27, 2026
          <span className="mx-1 text-slate-600">·</span>
          TODAY'S STATUS
        </div>
      </div>
    </article>
  )
}
