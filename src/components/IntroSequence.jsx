import { useEffect, useRef, useState } from 'react'
import Particles from './Particles.jsx'
import content from '../data/content.js'

const SCENES = ['void', 'arrival', 'signature', 'message']

// Scene durations in ms (skippable — these are a ceiling, not a wait you're locked into).
const DURATIONS = { void: 2200, arrival: 3200, signature: 3400 }

export default function IntroSequence({ onFinish, reduced }) {
  const [sceneIndex, setSceneIndex] = useState(0)
  const timerRef = useRef(null)
  const scene = SCENES[sceneIndex]

  useEffect(() => {
    if (reduced) {
      // Reduced motion: skip straight to the final scene, no timed sequence.
      setSceneIndex(3)
      return
    }
    if (scene === 'message') return // waits for user action
    const ms = DURATIONS[scene] ?? 2000
    timerRef.current = setTimeout(() => {
      setSceneIndex((i) => Math.min(i + 1, SCENES.length - 1))
    }, ms)
    return () => clearTimeout(timerRef.current)
  }, [scene, reduced])

  function skip() {
    clearTimeout(timerRef.current)
    setSceneIndex(3)
  }

  return (
    <div className="intro">
      <Particles converge={scene === 'void' || scene === 'arrival'} reduced={reduced} />

      {scene === 'void' && (
        <div className="intro-scene intro-scene--void">
          <span className="intro-line" />
        </div>
      )}

      {scene === 'arrival' && (
        <div className="intro-scene intro-scene--arrival">
          <p className="intro-eyebrow">{content.arrivalLine}</p>
          <h1 className="intro-name">
            {content.name.split('').map((ch, i) => (
              <span key={i} style={{ animationDelay: `${i * 90}ms` }}>
                {ch}
              </span>
            ))}
          </h1>
        </div>
      )}

      {scene === 'signature' && (
        <div className="intro-scene intro-scene--signature">
          <div className="signature-reveal">
            <img src={content.signatureSrc} alt={`${content.name}'s signature`} />
          </div>
        </div>
      )}

      {scene === 'message' && (
        <div className="intro-scene intro-scene--message">
          <p className="intro-tagline">{content.tagline}</p>
          <button className="btn-gold" onClick={onFinish}>
            Discover Your Gift
          </button>
        </div>
      )}

      {scene !== 'message' && (
        <button className="intro-skip" onClick={skip}>
          Skip
        </button>
      )}
    </div>
  )
}
