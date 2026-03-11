function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <p className="eyebrow">Corporate & Business Law</p>
          <h1>Andrea Colalleli</h1>
          <h2>Attorney at Law</h2>
          <p>
            Providing strategic legal counsel to businesses of all sizes.
            With a focus on corporate law, business transactions, and commercial litigation,
            I help clients navigate complex legal challenges with confidence.
          </p>
          <div>
            <a href="#contact" className="btn btn-primary">Schedule Consultation</a>
            <a href="#services" className="btn btn-outline">View Services</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            Professional Photo
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero