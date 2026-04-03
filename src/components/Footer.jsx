export default function Footer() {
  return (
    <footer style={{ padding: '2.5rem 3rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>
        Tragic Scent
      </span>
      <p style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--ash)', fontStyle: 'italic' }}>
        "Everything special about you came out of a bottle"
      </p>
      <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--ash)', textTransform: 'uppercase' }}>
        © {new Date().getFullYear()}
      </p>
    </footer>
  )
}