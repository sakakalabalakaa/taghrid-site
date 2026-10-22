import content from '../data/content.js'

export default function HomePage({ onOpenGift }) {
  return (
    <main className="home">
      <div className="home-signature">
        <img src={content.signatureSrc} alt={`${content.name}'s signature`} />
      </div>
      <h1 className="home-name">{content.name}</h1>
      <p className="home-tagline">{content.tagline}</p>
      <button className="btn-gold" onClick={onOpenGift}>
        Discover Your Gift
      </button>
      <footer className="home-footer">{content.footer}</footer>
    </main>
  )
}
