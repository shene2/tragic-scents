export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '8rem 4rem',
      background: 'linear-gradient(to bottom, var(--obsidian), #0a0806)',
    }}>
      <div className="reveal" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>Contact</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 200,
          color: 'var(--ivory)', margin: '2rem 0',
        }}>Find Your Scent</h2>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--ash)', margin: '1.5rem 0' }}>
          Inquire about orders, bespoke sets, or personal consultations.
        </p>
        <a href="tel:09562302108" style={{
          display: 'inline-block',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '2.5rem', fontWeight: 200, color: 'var(--gold)',
          textDecoration: 'none', letterSpacing: '0.15em',
          position: 'relative', paddingBottom: '4px',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          0956 230 2108
        </a>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--ash)', marginTop: '1.5rem' }}>
          Call or text — we respond within the hour
        </p>
      </div>
    </section>
  )
}