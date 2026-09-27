export default function OrbitMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <ellipse cx="20" cy="20" rx="18" ry="9" transform="rotate(-42 20 20)" stroke="currentColor" strokeWidth="1" opacity="0.65" />
      <path d="M20 9l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8Z" fill="currentColor" />
      <circle cx="32" cy="8" r="2" fill="currentColor" />
    </svg>
  )
}
