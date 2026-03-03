const sample = [
  {id:1,title:'Neo Sigil — 魂 (Tamashii)',src:'/src/assets/placeholder1.svg'},
  {id:2,title:'Neo Oni — Glitch Mask',src:'/src/assets/placeholder2.svg'},
  {id:3,title:'Cyber Rose — Blackwire',src:'/src/assets/placeholder3.svg'},
  {id:4,title:'Kitsune Script — Fragment',src:'/src/assets/placeholder4.svg'}
]

export default function Gallery(){
  return (
    <section className="gallery" id="gallery">
      <h3 style={{margin:'0 28px 18px 28px',color:'#fff'}}>Selected Work</h3>
      <div className="grid" style={{padding:'0 28px 28px 28px'}}>
        {sample.map(item=> (
          <div className="card" key={item.id}>
            <img src={item.src} alt={item.title} />
            <div style={{marginTop:10}}>
              <strong style={{color:'#fff'}}>{item.title}</strong>
              <div className="muted" style={{fontSize:13}}>Cyber-sigil • Anime • Custom</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
