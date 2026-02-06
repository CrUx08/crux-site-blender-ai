import { useEffect, useMemo, useState } from 'react'
import './App.css'

const features = [
  {
    title: 'Conversational Guidance',
    description:
      'Type what you want (“Create a chair”), and Crux responds with clear, step-by-step Blender actions.',
  },
  {
    title: 'Blender-Native Workflow',
    description:
      'Crux lives inside Blender as an add-on, augmenting the UI instead of replacing your tools.',
  },
  {
    title: 'UI Highlighting',
    description:
      'Crux points to the exact panels and buttons you need so you never hunt for tools.',
  },
  {
    title: 'Clarifying Questions',
    description:
      'If your prompt is vague, Crux asks follow-ups like “round or square?” before acting.',
  },
  {
    title: 'Beginner-Friendly MVP',
    description:
      'Focused on core primitives and guidance—no heavy automation in version 1.0.',
  },
  {
    title: 'Future-Proof Roadmap',
    description:
      'Voice, automation, and AI-assisted animation are on deck for later releases.',
  },
]

const downloadSteps = [
  {
    title: 'Download the Plugin',
    description: 'Grab the latest build for Blender 3.6+ and unzip it.',
  },
  {
    title: 'Install in Blender',
    description: 'Preferences → Add-ons → Install from file, then enable Crux.',
  },
  {
    title: 'Start Creating',
    description: 'Open the Crux panel and ask for modeling, lighting, or render help.',
  },
]

const stats = [
  { label: 'Median task time saved', value: '47%' },
  { label: 'Supported Blender ops', value: '180+' },
  { label: 'Avg. response time', value: '0.8s' },
]

function App() {
  const words = useMemo(() => ['Design', 'Model', 'Render'], [])
  const [wordIndex, setWordIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const speed = isDeleting ? 160 : 220
    const timeout = setTimeout(() => {
      const nextLength = isDeleting ? display.length - 1 : display.length + 1
      setDisplay(current.slice(0, Math.max(0, nextLength)))

      if (!isDeleting && nextLength === current.length + 1) {
        setIsDeleting(true)
      } else if (isDeleting && nextLength === 0) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }, display.length === 0 && !isDeleting ? 300 : speed)

    return () => clearTimeout(timeout)
  }, [display, isDeleting, wordIndex, words])
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <img src="/crux-logo.svg" alt="" />
          </div>
          <div>
            <p className="brand-name">Crux</p>
            <p className="brand-tagline">Blender AI Assistant</p>
          </div>
        </div>

        <nav className="site-nav">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#download">Download</a>
          <a href="#about">About</a>
        </nav>

        <a className="primary-button" href="#download">
          Get Crux
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">Turn prompts into production-ready Blender scenes</p>
            <h1>
              <span className="typewriter">{display}</span> your next scene at the speed of
              thought.
            </h1>
            <p className="hero-description">
              Crux is an AI assistant built as a Blender add-on. It guides you through
              modeling with clear, step-by-step instructions—so you learn faster without
              leaving Blender.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#download">
                Download Crux
              </a>
              <a className="ghost-button" href="#features">
                See Features
              </a>
            </div>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-ui">
              <div className="ui-shell">
                <div className="ui-topbar">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <p>Blender · Scene: Orbital Bay</p>
                </div>
                <div className="ui-body">
                  <div className="ui-viewport">
                    <div className="viewport-grid" />
                    <div className="viewport-model" />
                    <div className="viewport-glow" />
                    <div className="viewport-caption">Viewport: Crux draft scene</div>
                  </div>
            <div className="ui-side">
              <div className="panel">
                <p className="panel-title">Crux Assistant</p>
                <div className="panel-item active">
                  <span className="badge">Idea</span>
                  <p>“Create a simple chair.”</p>
                </div>
                <div className="panel-item">
                  <span className="badge">Action</span>
                  <p>Add Mesh → Cube, scale 1.5×</p>
                </div>
                <div className="panel-item">
                  <span className="badge">Output</span>
                  <p>Ask: “Round or square legs?”</p>
                </div>
              </div>
              <div className="panel code">
                <p className="panel-title">Generated Ops</p>
                <code>
                  crux.add_mesh('Cube')
                  <br />
                  crux.scale(1.5, 0.6, 1.5)
                  <br />
                  crux.ask_clarify('Leg style?')
                </code>
              </div>
            </div>
                </div>
              </div>
              <div className="hero-card">
                <p className="card-title">Crux Suggestion</p>
                <ul className="card-list">
                  <li>Auto-create modular wall segments</li>
                  <li>Apply bevel + weighted normals</li>
                  <li>Inject emissive neon material set</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-heading">
            <p className="eyebrow">Features</p>
            <h2>Guidance-first, Blender-native AI.</h2>
            <p className="section-description">
              Crux 1.0 focuses on clarity and learning: it helps you understand Blender while
              speeding up the basics.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="download" className="section download">
          <div className="section-heading">
            <p className="eyebrow">Download</p>
            <h2>Install in minutes, no guesswork.</h2>
            <p className="section-description">
              Crux 1.0 is a Blender add-on built with Python. Install it and start creating
              right away.
            </p>
          </div>
          <div className="download-grid">
            <div className="download-card">
              <p className="download-label">Latest stable</p>
              <h3>Crux 1.0</h3>
              <p className="download-meta">macOS · Windows · Linux</p>
              <a className="primary-button" href="#download">
                Download for Blender
              </a>
              <p className="download-note">Need a team license? Email hello@crux.ai</p>
            </div>
            <div className="download-steps">
              {downloadSteps.map((step, index) => (
                <div key={step.title} className="step-card">
                  <span className="step-index">0{index + 1}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">About Crux</p>
            <h2>Built to guide, not replace.</h2>
            <p className="section-description">
              Crux is designed to sit beside you in Blender, highlighting tools and guiding
              your next move. The goal is confidence and momentum, not automation overload.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>1.0 Scope</h3>
              <p>
                Focused on primitives and clear instructions. No complex lighting, materials,
                or animation yet.
              </p>
            </div>
            <div className="about-card">
              <h3>What&apos;s next</h3>
              <p>
                Voice input, automation for modeling and lighting, and AI-assisted animation
                are on the roadmap.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="brand-name">Crux</p>
          <p className="footer-text">Blender AI Assistant for ambitious story teller.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#download">Download</a>
          <a href="#about">About</a>
        </div>
      </footer>
    </div>
  )
}

export default App
