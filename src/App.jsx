import GalaxyBackground from './components/GalaxyBackground.jsx'
import StatusCard from './components/StatusCard.jsx'
import OrbitMark from './components/OrbitMark.jsx'

export default function App() {
  return (
    <main className="status-page relative isolate flex min-h-svh flex-col overflow-hidden text-white">
      <GalaxyBackground />

      <header className="page-header relative z-10 flex items-center justify-between px-6 py-7 sm:px-12 sm:py-9 lg:px-16">
        <a href="/" className="brand flex items-center gap-2.5" aria-label="Orbit home">
          <OrbitMark className="h-8 w-8 text-violet-300" />
          <span className="text-[25px] font-medium tracking-[-1.2px]">orbit<span className="text-violet-300">.</span></span>
        </a>
        <span className="quiet-note flex items-center gap-2.5 text-xs tracking-wide text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_#bca3ff]" />
          a little space to just be
        </span>
      </header>

      <div className="page-content relative z-10 flex flex-1 flex-col items-center px-5">
        <div className="intro text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-medium tracking-[0.25em] text-violet-200/70">
            <span className="intro-line" />
            MY LITTLE CORNER OF THE UNIVERSE
            <span className="intro-line" />
          </div>
          <h1 className="page-title">A thought for <em>today.</em></h1>
          <p className="mt-4 text-sm tracking-[0.01em] text-slate-400">A passing feeling, a quiet moment, a few words.</p>
        </div>

        <StatusCard />

        <div className="afterthought flex items-center gap-3 text-[11px] tracking-[0.05em] text-slate-500">
          <span className="h-px w-7 bg-slate-600/50" />
          Somewhere between the stars and the everyday.
          <span className="h-px w-7 bg-slate-600/50" />
        </div>
      </div>

      <footer className="relative z-10 flex flex-col items-center justify-between gap-4 px-6 py-6 text-[10px] tracking-[0.06em] text-slate-500 sm:flex-row sm:px-12 lg:px-16">
        <span>ONE DAY. ONE THOUGHT. YOUR OWN ORBIT.</span>
        <span className="flex items-center gap-2">Made of moments <span className="text-violet-300/70">✧</span> and a little stardust</span>
      </footer>
    </main>
  )
}
