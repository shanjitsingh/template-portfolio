function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          Andrea <span>Colalleli</span>
        </div>
        <p className="footer-text">
          &copy; {currentYear} Andrea Colalleli, Attorney at Law. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer