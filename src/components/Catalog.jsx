import ScentCard from './ScentCard'
import scents from '../data/scents'

export default function Catalog() {
  return (
    <section id="catalog" style={{
      padding: '8rem 4rem',
      background: 'linear-gradient(to bottom, var(--obsidian), #0d0b09, var(--obsidian))',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '5rem',
        }}>
          <div>
            <p style={{ fontSize: '0.55rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>The Collection</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 200,
              lineHeight: 1.05, color: 'var(--ivory)',
            }}>
              Six Faces<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>of Longing</em>
            </h2>
          </div>
          <p style={{ fontSize: '0.65rem', color: 'var(--ash)', letterSpacing: '0.1em', maxWidth: '180px', textAlign: 'right', lineHeight: 1.8 }}>
            Hover to unveil the notes within
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'rgba(184,148,79,0.08)',
        }}>
          {scents.map((scent, i) => (
            <ScentCard key={scent.id} scent={scent} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}