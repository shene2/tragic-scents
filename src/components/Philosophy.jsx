export default function Philosophy() {
  const divider = <div style={{ width: '60px', height: '1px', background: 'var(--gold)', margin: '2rem auto', opacity: 0.5 }} />
  return (
    <section id="philosophy" style={{ padding: '7rem 3rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Our Philosophy</p>
        {divider}
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--ivory)', marginBottom: '2rem' }}>Why Tragic?</h2>
        <p style={{ fontSize: '1rem', lineHeight: 2.2, color: 'var(--ash)', fontStyle: 'italic' }}>
          Because the most beautiful things are always <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>tinged with loss</em>. Because the scents that linger longest are those attached to people and moments we can never fully return to. Tragic Scent does not sell <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>happiness</em> — it sells <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>depth</em>.
        </p>
        {divider}
        <p style={{ fontSize: '0.75rem', color: 'var(--ash)', letterSpacing: '0.1em', marginTop: '2rem' }}>
          Premium Eau de Parfum &nbsp;·&nbsp; Long-lasting &nbsp;·&nbsp; Artisan Crafted
        </p>
      </div>
    </section>
  )
}