import { useState } from 'react'

export default function Contact() {
  const [hovered, setHovered] = useState(false)
  return (
    <section id="contact" style={{ padding: '7rem 3rem', background: 'var(--charcoal)' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Contact</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--ivory)', marginBottom: '1rem' }}>Find Your Scent</h2>
        <p style={{ color: 'var(--ash)', fontSize: '0.85rem', letterSpacing: '0.05em', margin: '1.5rem 0' }}>
          Inquire about orders, custom sets, or personal consultations.
        </p>
        <a href="tel:09562302108" style={{
          display: 'inline-block', fontFamily: "'Cormorant Garamond', serif",
          fontSize: '2rem', fontWeight: 300, color: 'var(--gold)', textDecoration: 'none',
          letterSpacing: '0.1em', paddingBottom: '0.25rem', transition: 'border-color 0.3s',
          borderBottom: hovered ? '1px solid var(--gold)' : '1px solid rgba(196,164,107,0.3)',
        }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          0956 230 2108
        </a>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--ash)', marginTop: '1.5rem' }}>
          Call or text — we respond within the hour
        </p>
      </div>
    </section>
  )
}