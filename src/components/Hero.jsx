export default function Hero(){
  return (
    <section className="hero" id="home">
      <div className="intro">
        <div className="eyebrow">Cyber Sigilism • Anime Ink</div>
        <h2 className="title"><span className="accent-underline">Vittoria</span> — Neo Blackwork</h2>
        <p className="lead">Crafting cyber sigils, neon-black silhouettes, and anime-inspired character pieces. Commissions welcome — custom designs, studio bookings, and collaborative concept work.</p>
      </div>

      <div className="hero-art">
        <svg width="320" height="220" viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="#060507" rx="10"/>
          <g transform="translate(30,20)" fill="none" strokeWidth="3">
            <path className="sigil-stroke sigil-glow" stroke="#5ef7e6" d="M20 60 C60 0, 160 0, 200 60 C180 100, 100 120, 40 90 Z" />
            <path className="sigil-stroke" stroke="#ff49d1" d="M100 10 L140 50 L100 90 L60 50 Z" />
            <circle cx="160" cy="140" r="8" fill="#ff49d1" opacity="0.9"/>
            <path className="sigil-stroke" stroke="#5ef7e6" d="M10 150 C40 120, 120 160, 180 130" strokeDasharray="6 6" />
          </g>
          <text x="18" y="210" fill="#5ef7e6" font-family="Noto Sans JP, sans-serif" font-size="12">ヴィットリア — Neo Ink</text>
        </svg>
      </div>
    </section>
  )
}
