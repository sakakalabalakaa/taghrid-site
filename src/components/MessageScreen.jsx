import content from '../data/content.js'

export default function MessageScreen({ onClose }) {
  return (
    <div className="message-screen" role="dialog" aria-modal="true" aria-label="Personal message">
      <div className="message-card">
        <h2>{content.gift.heading}</h2>
        {content.gift.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="message-signoff">{content.gift.signOff}</p>
        <button className="btn-ghost" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
