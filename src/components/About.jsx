function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about-content">
          <div className="about-image-placeholder">
            Attorney Photo
          </div>
          <div className="about-text">
            <h2 className="section-header" style={{ textAlign: 'left' }}>
              About Andrea Colalleli
              <div className="section-line" style={{ margin: '1rem 0 0 0' }}></div>
            </h2>
            <p>
              With over 15 years of experience in corporate and business law,
              I have dedicated my career to helping businesses navigate the complex
              legal landscape. From startups to established corporations, I provide
              personalized legal strategies tailored to each client's unique needs.
            </p>
            <p>
              My practice focuses on corporate governance, mergers and acquisitions,
              contract negotiation, and business dispute resolution. I believe in
              building lasting relationships with my clients based on trust,
              transparency, and results.
            </p>
            <p>
              I am committed to providing clear, practical advice that helps
              businesses make informed decisions. Whether you're starting a new
              venture or managing complex corporate matters, I'm here to guide
              you every step of the way.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients Served</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About