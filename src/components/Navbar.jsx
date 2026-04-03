export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '2rem 4rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(16,14,11,0.9), transparent)',
        pointerEvents: 'none',
      }} />
      <a href="#" style={{
        position: 'relative',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.1rem', fontWeight: 300, letterSpacing: '0.35em',
        color: 'var(--gold)', textDecoration: 'none', textTransform: 'uppercase',
      }}>
        Tragic Scent
      </a>
      <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none', position: 'relative' }}>
        {[
          { label: 'Collection', href: '#catalog' },
          { label: 'Manifesto', href: '#philosophy' },
          { label: 'Contact', href: '#contact' },
        ].map((link) => (
          <li key={link.label}>
            <a href={link.href} className="nav-link" style={{
              fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase',
              color: 'var(--ash)', textDecoration: 'none', transition: 'color 0.4s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--ivory)'}
              onMouseLeave={e => e.target.style.color = 'var(--ash)'}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}