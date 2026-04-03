export default function ScentCard({ scent, delay = 0 }) {
  return (
    <div className="scent-card reveal" style={{
      position: 'relative', aspectRatio: '2/3',
      overflow: 'hidden', cursor: 'none',
      background: 'var(--obsidian)',
      transitionDelay: `${delay}s`,
    }}>
      <div className="card-inner" style={{ position: 'absolute', inset: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: scent.bg }} />
      </div>

      <div className="card-accent-line" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(to right, ${scent.accent}, transparent)`,
      }} />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,8,6,0.97) 0%, rgba(10,8,6,0.3) 55%, transparent 100%)',
      }} />

      <span style={{
        position: 'absolute', top: '1.5rem', left: '1.5rem',
        fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
        fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(184,148,79,0.4)',
      }}>{scent.numeral}</span>

      <span style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem',
        fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(184,148,79,0.6)',
      }}>{scent.price}</span>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1.8rem' }}>
        <p style={{ fontSize: '0.5rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.6rem', opacity: 0.8 }}>
          {scent.family}
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 200, color: 'var(--ivory)', marginBottom: '0.8rem', lineHeight: 1.1 }}>
          {scent.name}
        </p>
        <div className="card-line" style={{ height: '1px', background: 'var(--gold)', marginBottom: '0.8rem', opacity: 0.3 }} />
        <p className="card-notes" style={{ fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--ash)', lineHeight: 2 }}>
          Top — {scent.notes.top}<br />
          Heart — {scent.notes.heart}<br />
          Base — {scent.notes.base}
        </p>
      </div>
    </div>
  )
}