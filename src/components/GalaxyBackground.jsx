import { useEffect, useRef } from 'react'

// A seeded pattern keeps the sky stable across renders and React Strict Mode.
function makeStars(count, seed) {
  let value = seed
  const random = () => {
    value = (value * 16807) % 2147483647
    return (value - 1) / 2147483646
  }
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    x: random() * 100,
    y: random() * 100,
    size: random() * 1.8 + 0.6,
    opacity: random() * 0.55 + 0.15,
    duration: random() * 5 + 3,
    delay: random() * -12,
  }))
}

const distantStars = makeStars(125, 42)
const nearStars = makeStars(40, 1701)
const particles = makeStars(24, 2026)

export default function GalaxyBackground() {
  const skyRef = useRef(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationFrame
    const moveSky = (event) => {
      if (reducedMotion.matches) return
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        skyRef.current?.style.setProperty('--pointer-x', `${(event.clientX / window.innerWidth - 0.5) * 2}`)
        skyRef.current?.style.setProperty('--pointer-y', `${(event.clientY / window.innerHeight - 0.5) * 2}`)
      })
    }
    const resetSky = () => {
      cancelAnimationFrame(animationFrame)
      skyRef.current?.style.setProperty('--pointer-x', '0')
      skyRef.current?.style.setProperty('--pointer-y', '0')
    }
    window.addEventListener('pointermove', moveSky, { passive: true })
    document.documentElement.addEventListener('pointerleave', resetSky)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', moveSky)
      document.documentElement.removeEventListener('pointerleave', resetSky)
    }
  }, [])

  return (
    <div ref={skyRef} className="galaxy-background pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="nebula nebula-violet" />
      <div className="nebula nebula-blue" />
      <div className="galaxy-dust" />
      <div className="star-layer distant-stars">
        {distantStars.map((star) => <span key={star.id} className="star" style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size, '--star-opacity': star.opacity, animationDuration: `${star.duration}s`, animationDelay: `${star.delay}s` }} />)}
      </div>
      <div className="star-layer near-stars">
        {nearStars.map((star) => <span key={star.id} className="star bright-star" style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size, '--star-opacity': star.opacity, animationDuration: `${star.duration}s`, animationDelay: `${star.delay}s` }} />)}
        <span className="cross-star cross-star-one">✦</span>
        <span className="cross-star cross-star-two">✧</span>
        <span className="cross-star cross-star-three">✦</span>
      </div>
      <div className="particle-layer">
        {particles.map((particle) => <span key={particle.id} className="falling-particle" style={{ left: `${particle.x}%`, width: particle.size, height: particle.size, opacity: particle.opacity, animationDuration: `${particle.duration * 4}s`, animationDelay: `${particle.delay * 4}s`, '--drift': `${particle.x - 50}px` }} />)}
      </div>
      <div className="orbital-ring orbital-ring-one" />
      <div className="orbital-ring orbital-ring-two" />
      <div className="meteor meteor-one" />
      <div className="meteor meteor-two" />
      <div className="sky-vignette absolute inset-0" />
      <div className="sky-grain absolute inset-0" />
    </div>
  )
}
