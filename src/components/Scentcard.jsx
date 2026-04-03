import { useState } from 'react'

export default function ScentCard({ scent }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: 'absolute', inset: 0, background: scent.bg,
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
        transition: 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
      }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(to right, ${scent.accent}, transparent)` }} />
      <span style={{ position: 'absolute', bottom: '40%', right: '5%', opacity: 0.06, fontSize: '8rem', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--gold)', pointerEvents: 'none', lineHeight: 1 }}>{scent.numeral}</span>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,22,18,0.95) 0%, rgba(26,22,18,0.2) 50%, transparent 100%)' }} />
      <span style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--gold)' }}>{scent.price}</span>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1.5rem' }}>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>{scent.family}</p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 300, color: 'var(--ivory)', marginBottom: '0.5rem' }}>{scent.name}</p>
        <p style={{
          fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--ash)', lineHeight: 1.8,
          opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}>
          Top: {scent.notes.top}<br />Heart: {scent.notes.heart}<br />Base: {scent.notes.base}
        </p>
      </div>
    </div>
  )
}