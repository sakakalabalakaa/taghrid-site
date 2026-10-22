import { useEffect, useRef, useState } from 'react'
import IntroSequence from './components/IntroSequence.jsx'
import TopBar from './components/TopBar.jsx'
import HomePage from './components/HomePage.jsx'
import MessageScreen from './components/MessageScreen.jsx'
import useReducedMotion from './hooks/useReducedMotion.js'
import content from './data/content.js'
import './App.css'

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [showGift, setShowGift] = useState(false)
  const [soundOn, setSoundOn] = useState(false)
  const [audioAvailable, setAudioAvailable] = useState(true)
  const audioRef = useRef(null)
  const reduced = useReducedMotion()

  // Try to play audio only after a real user interaction (browser autoplay
  // rules require this anyway, and the brief asks for it explicitly).
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (soundOn) {
      audio.play().catch(() => {
        // File missing or blocked — fail silently, sound is optional.
        setAudioAvailable(false)
      })
    } else {
      audio.pause()
    }
  }, [soundOn])

  function handleAudioError() {
    setAudioAvailable(false)
    setSoundOn(false)
  }

  function finishIntro() {
    setShowIntro(false)
  }

  function replayIntro() {
    setShowGift(false)
    setShowIntro(true)
  }

  return (
    <div className="app-shell">
      <audio
        ref={audioRef}
        src={content.audioSrc}
        loop
        preload="none"
        onError={handleAudioError}
      />

      {showIntro && <IntroSequence onFinish={finishIntro} reduced={reduced} />}

      {!showIntro && (
        <>
          <TopBar
            soundOn={soundOn && audioAvailable}
            onToggleSound={() => setSoundOn((s) => !s)}
            onReplayIntro={replayIntro}
          />
          <HomePage onOpenGift={() => setShowGift(true)} />
          {showGift && <MessageScreen onClose={() => setShowGift(false)} />}
        </>
      )}
    </div>
  )
}
