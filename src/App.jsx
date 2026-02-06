import './App.css'

const features = [
  {
    title: 'Context-Aware Modeling',
    description:
      'Crux reads your scene, infers intent, and suggests topology-friendly edits with safety checks.',
  },
  {
    title: 'Natural Language Tools',
    description:
      'Say “mirror the vents, keep bevels sharp” and Crux converts it into precise Blender actions.',
  },
  {
    title: 'Non-Destructive Workflow',
    description:
      'Every move is grouped, tagged, and reversible so you can explore without breaking the rig.',
  },
  {
    title: 'Asset Intelligence',
    description:
      'Crux catalogs materials, lighting, and geometry to keep your library consistent across projects.',
  },
  {
    title: 'Studio-Ready Output',
    description:
      'Export clean UVs, optimized meshes, and render presets with one prompt.',
  },
  {
    title: 'Local + Secure',
    description:
      'Run core features offline with optional cloud boosts for heavy renders and asset search.',
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
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" role="img">
              <defs>
                <linearGradient id="cruxGradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ff8a3d" />
                  <stop offset="100%" stopColor="#ffcc68" />
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="22" fill="url(#cruxGradient)" />
              <path
                d="M16 30c6-8 10-10 16-12"
                fill="none"
                stroke="#101014"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="16" cy="30" r="3" fill="#101014" />
              <circle cx="32" cy="18" r="3" fill="#101014" />
            </svg>
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
            <h1>Design, model, and render at the speed of thought.</h1>
            <p className="hero-description">
              Crux is an AI assistant that lives inside Blender. It understands your scene,
              applies best-practice workflows, and keeps you in creative flow from blockout
              to final frame.
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
                        <p>“Retro sci-fi hallway, neon trims.”</p>
                      </div>
                      <div className="panel-item">
                        <span className="badge">Action</span>
                        <p>Generated modular walls + bevels</p>
                      </div>
                      <div className="panel-item">
                        <span className="badge">Output</span>
                        <p>Assigned emissive neon materials</p>
                      </div>
                    </div>
                    <div className="panel code">
                      <p className="panel-title">Generated Ops</p>
                      <code>
                        crux.create_modular_wall(segments=6)
                        <br />
                        crux.apply_bevel(limit=0.35)
                        <br />
                        crux.assign_material(&quot;Neon-Pulse&quot;)
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
            <h2>Everything you need to ship scenes faster.</h2>
            <p className="section-description">
              Crux focuses on the busy work so you can iterate on lighting, composition, and
              storytelling.
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
              We ship weekly builds, but stability matters. Grab the latest signed version for
              Blender 3.6+.
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
            <h2>Built by artists who wanted a calmer pipeline.</h2>
            <p className="section-description">
              We are a small team of Blender users, technical artists, and ML engineers. Our
              mission is to turn the hardest parts of 3D into guided, repeatable steps so every
              artist can ship cinematic work.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>Our promise</h3>
              <p>
                Crux never overrides your creative decisions. It suggests, previews, and lets
                you accept or tweak every change.
              </p>
            </div>
            <div className="about-card">
              <h3>What&apos;s next</h3>
              <p>
                Live collaboration, scene diagnostics, and smarter render budgeting are already
                in private beta.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="brand-name">Crux</p>
          <p className="footer-text">Blender AI Assistant for ambitious teams.</p>
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
