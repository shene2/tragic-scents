export default function Footer() {
  return (
    <footer style={{
      padding: '3rem 4rem',
      borderTop: '1px solid rgba(184,148,79,0.08)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '0.9rem', letterSpacing: '0.3em',
        color: 'rgba(184,148,79,0.5)', textTransform: 'uppercase',
      }}>Tragic Scent</span>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '0.75rem', letterSpacing: '0.1em',
        color: 'rgba(184,148,79,0.25)', fontStyle: 'italic',
      }}>
        "Everything special about you came out of a bottle"
      </p>
      <p style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(154,145,136,0.4)', textTransform: 'uppercase' }}>
        © {new Date().getFullYear()}
      </p>
    </footer>
  )
}