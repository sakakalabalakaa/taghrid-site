import { useEffect, useRef } from 'react'

/**
 * Fine gold dust that drifts gently, optionally converging toward a target
 * point (used in the Void → Arrival scenes). Pure canvas, no dependency.
 */
export default function Particles({ converge = false, density = 70, reduced = false }) {
  const canvasRef = useRef(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const target = { x: width / 2, y: height / 2 }
    const count = reduced ? Math.floor(density / 3) : density

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      drift: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.5 + 0.2,
    }))

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      target.x = width / 2
      target.y = height / 2
    }
    window.addEventListener('resize', resize)

    function tick() {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        if (converge) {
          p.x += (target.x - p.x) * 0.012
          p.y += (target.y - p.y) * 0.012
        } else {
          p.drift += 0.004
          p.x += p.vx + Math.sin(p.drift) * 0.05
          p.y += p.vy
          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 175, 112, ${p.alpha})`
        ctx.fill()
      }
      frameRef.current = requestAnimationFrame(tick)
    }

    if (reduced) {
      // Draw a single static frame instead of animating.
      tick()
      cancelAnimationFrame(frameRef.current)
    } else {
      tick()
    }

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [converge, density, reduced])

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />
}
