import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <h1 className="logo">Vittoria</h1>
        <nav className="nav">
          <a href="#gallery">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Vittoria — Tattoo Artist</footer>
    </div>
  )
}
