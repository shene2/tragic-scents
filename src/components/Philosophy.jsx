const GoldLine = () => (
  <div style={{
    width: '1px', height: '60px',
    background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
    margin: '3rem auto', opacity: 0.5,
  }} />
)

export default function Philosophy() {
  return (
    <section id="philosophy" style={{
      padding: '10rem 4rem', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
        fontSize: '20vw', fontWeight: 200,
        color: 'rgba(184,148,79,0.03)',
        whiteSpace: 'nowrap', pointerEvents: 'none', letterSpacing: '0.1em',
      }}>SCENT</div>

      <div className="reveal" style={{ maxWidth: '750px', margin: '0 auto', position: 'relative' }}>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--gold)' }}>Manifesto</p>
        <GoldLine />
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 200,
          color: 'var(--ivory)', margin: '2rem 0', lineHeight: 1,
        }}>Why Tragic?</h2>
        <p style={{ fontSize: '1rem', lineHeight: 2.4, color: 'var(--ash)', fontStyle: 'italic' }}>
          Because the most beautiful things are always{' '}
          <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>tinged with loss</em>.
          Because the scents that linger longest are those attached to people and moments we can never fully return to.
        </p>
        <br />
        <p style={{ fontSize: '1rem', lineHeight: 2.4, color: 'var(--ash)', fontStyle: 'italic' }}>
          Tragic Scent does not sell{' '}
          <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>happiness</em> — it sells{' '}
          <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>depth</em>.
          It sells the memory of a person who has already left the room.
        </p>
        <GoldLine />
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(184,148,79,0.4)' }}>
          Premium · Long-lasting · Artisan Crafted
        </p>
      </div>
    </section>
  )
}