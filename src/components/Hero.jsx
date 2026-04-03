export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '8rem 4rem 6rem', textAlign: 'center',
    }}>
      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-55%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(184,148,79,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
        animation: 'pulse 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(140,60,30,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
        animation: 'pulse 8s ease-in-out infinite reverse',
      }} />

      <p style={{
        fontSize: '0.6rem', letterSpacing: '0.55em', textTransform: 'uppercase',
        color: 'var(--gold)', marginBottom: '3rem',
        opacity: 0, animation: 'fadeUp 1s 0.3s forwards',
      }}>
        Maison de Parfum &nbsp;·&nbsp; Est. 2024
      </p>

      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(5rem, 12vw, 10rem)',
        fontWeight: 200, lineHeight: 0.85,
        color: 'var(--ivory)',
        opacity: 0, animation: 'fadeUp 1.2s 0.6s forwards',
      }}>
        Tragic
        <em style={{
          display: 'block', fontStyle: 'italic',
          color: 'var(--gold)', fontSize: '0.6em',
          fontWeight: 200, letterSpacing: '0.05em',
        }}>
          Scent
        </em>
      </h1>

      <div style={{
        width: '1px', height: 0,
        background: 'var(--gold)',
        margin: '3rem auto',
        animation: 'growLine 1s 1.2s forwards',
        opacity: 0,
      }} />

      <p style={{
        fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--ash)',
        fontStyle: 'italic', lineHeight: 2, margin: '0 auto 3rem', maxWidth: '380px',
        opacity: 0, animation: 'fadeUp 1s 1.4s forwards',
      }}>
        "Everything special about you came out of a bottle"
      </p>

      <a href="#catalog" className="hero-cta" style={{
        display: 'inline-block', padding: '1.1rem 3.5rem',
        border: '1px solid rgba(184,148,79,0.5)', color: 'var(--gold)',
        fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase',
        textDecoration: 'none', transition: 'color 0.5s',
        position: 'relative', overflow: 'hidden',
        opacity: 0, animation: 'fadeUp 1s 1.6s forwards',
      }}>
        <span style={{ position: 'relative', zIndex: 1 }}>Discover the Collection</span>
      </a>
    </section>
  )
}