import "../css/Footer.css"

const Footer = () => {
  return (
    <footer className="general-footer">
      <div className="footer-content">
        <p>© 2025 Star Wars Store. Todos los derechos reservados.</p>

        <div className="footer-links">
          <a 
            href="https://www.linkedin.com/in/ignacioagustínmahfud" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a 
            href="https://github.com/NachoMah" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer