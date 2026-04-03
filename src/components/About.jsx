export default function About() {
  return (
    <section style={{ padding: '0' }}>
      <div className="reveal" style={{
        maxWidth: '1200px', margin: '0 auto', padding: '8rem 4rem',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center',
      }}>
        <div>
          <p style={{ fontSize: '0.55rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>About the House</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 200,
            lineHeight: 1.05, color: 'var(--ivory)', marginBottom: '2.5rem',
          }}>
            Scent is the only{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>honest memory</em>
          </h2>
          <p style={{ fontSize: '0.9rem', lineHeight: 2.2, color: 'var(--ash)', marginBottom: '1.5rem' }}>
            Tragic Scent was born from the belief that fragrance is not mere vanity — it is identity distilled into invisible architecture. Each bottle contains a world you inhabit before you enter a room.
          </p>
          <p style={{ fontSize: '0.9rem', lineHeight: 2.2, color: 'var(--ash)' }}>
            We compose for the deliberately unforgettable. For those who understand that leaving a trace is an art form.
          </p>
        </div>

        <div style={{
          position: 'relative', aspectRatio: '2/3',
          background: 'linear-gradient(160deg, #1e1a16, #100e0b)',
          border: '1px solid rgba(184,148,79,0.15)',
          display: 'grid', placeItems: 'center', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 40%, rgba(184,148,79,0.07), transparent 60%)',
          }} />
          <svg viewBox="0 0 120 240" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ width: '55%', position: 'relative', zIndex: 1 }}>
            <rect x="47" y="6" width="26" height="18" rx="2" fill="rgba(184,148,79,0.2)" stroke="rgba(184,148,79,0.5)" strokeWidth="0.5" />
            <rect x="52" y="2" width="16" height="8" rx="2" fill="rgba(184,148,79,0.3)" />
            <path d="M28 55 Q28 24 47 24 L73 24 Q92 24 92 55 L92 188 Q92 210 60 210 Q28 210 28 188 Z" fill="rgba(30,26,22,0.9)" stroke="rgba(184,148,79,0.3)" strokeWidth="0.6" />
            <path d="M38 60 Q38 34 52 34 L68 34 Q82 34 82 60 L82 183 Q82 198 60 198 Q38 198 38 183 Z" fill="rgba(16,14,11,0.6)" />
            <line x1="46" y1="108" x2="74" y2="108" stroke="rgba(184,148,79,0.2)" strokeWidth="0.5" />
            <text x="60" y="120" fontFamily="Cormorant Garamond,serif" fontSize="7" fill="rgba(184,148,79,0.6)" textAnchor="middle" letterSpacing="2" fontStyle="italic">Tragic</text>
            <text x="60" y="133" fontFamily="Cormorant Garamond,serif" fontSize="10" fill="rgba(184,148,79,0.8)" textAnchor="middle" letterSpacing="4">SCENT</text>
            <line x1="46" y1="140" x2="74" y2="140" stroke="rgba(184,148,79,0.2)" strokeWidth="0.5" />
            <text x="60" y="152" fontFamily="Jost,sans-serif" fontSize="4.5" fill="rgba(154,145,136,0.5)" textAnchor="middle" letterSpacing="2">EAU DE PARFUM · 50ML</text>
          </svg>
          <p style={{
            position: 'absolute', bottom: '2rem', left: 0, right: 0, textAlign: 'center',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '0.55rem', letterSpacing: '0.5em', color: 'rgba(184,148,79,0.3)',
          }}>TRAGIC SCENT</p>
        </div>
      </div>
    </section>
  )
}