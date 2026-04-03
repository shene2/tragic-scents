import ScentCard from './ScentCard'
import scents from '../data/scents'

export default function Catalog() {
  return (
    <section id="catalog" style={{ padding: '7rem 3rem', background: 'var(--charcoal)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>The Collection</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ivory)' }}>
              Six Facets<br />of Grief &amp; Grace
            </h2>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--ash)', letterSpacing: '0.05em', maxWidth: '200px', textAlign: 'right' }}>
            Hover each scent to reveal its notes
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {scents.map((scent) => <ScentCard key={scent.id} scent={scent} />)}
        </div>
      </div>
    </section>
  )
}