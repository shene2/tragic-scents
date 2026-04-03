const items = [
  'Beloved Ruin', 'First Memory', 'Last Letter',
  'Silent Witness', 'Smoke & Vow', 'Every Version',
]
const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div style={{
      overflow: 'hidden', padding: '2rem 0',
      borderTop: '1px solid rgba(184,148,79,0.1)',
      borderBottom: '1px solid rgba(184,148,79,0.1)',
      background: 'rgba(184,148,79,0.03)',
    }}>
      <div style={{
        display: 'flex', gap: '4rem', width: 'max-content',
        animation: 'marquee 25s linear infinite',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '0.75rem', fontStyle: 'italic',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(184,148,79,0.4)', whiteSpace: 'nowrap',
          }}>
            {item}
            {i < doubled.length - 1 && (
              <span style={{ color: 'var(--gold)', fontStyle: 'normal', marginLeft: '4rem' }}>·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}