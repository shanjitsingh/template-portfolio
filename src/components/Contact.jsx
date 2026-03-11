function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="section-line"></div>
          <p>Ready to discuss your legal needs? Contact me for a consultation.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <div className="contact-label">Office Address</div>
                <div className="contact-value">123 Legal Plaza, Suite 500<br />New York, NY 10001</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.85-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.39a12.059 12.059 0 01-7.19-7.19c-.153-.441.014-.928.39-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.85H4.25A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">(212) 555-0123</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">andrea@colallelilaw.com</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="contact-label">Office Hours</div>
                <div className="contact-value">Mon - Fri: 9:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="First Name" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact