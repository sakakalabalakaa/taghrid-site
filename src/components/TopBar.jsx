import content from '../data/content.js'

export default function TopBar({ soundOn, onToggleSound, onReplayIntro }) {
  return (
    <header className="topbar">
      <span className="topbar-mark">{content.wordmark}</span>
      <div className="topbar-actions">
        <button
          className="topbar-btn"
          onClick={onToggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? 'Mute sound' : 'Unmute sound'}
        >
          {soundOn ? '♪ Sound on' : '♪ Sound off'}
        </button>
        <button className="topbar-btn" onClick={onReplayIntro} aria-label="Replay intro">
          ↺ Replay
        </button>
      </div>
    </header>
  )
}
