const pillars = [
  {
    title: 'Growth-first by design',
    detail: 'The harness optimizes for collaboration maturity, learning quality, and transferable skill, not raw output throughput.'
  },
  {
    title: 'Explicit contracts over implicit prompting',
    detail: 'Policy, workflow, context, and reflection are encoded as files teams can review, version, and improve.'
  },
  {
    title: 'Portable and team-owned',
    detail: 'The framework gives a reusable frame. Teams bring their own profile, tools, and conventions.'
  },
  {
    title: 'Quality gates before velocity claims',
    detail: 'Baseline and strict validation reduce avoidable CI failures and improve confidence before merge.'
  }
]

const quickstart = [
  {
    step: 'Scaffold',
    code: 'npx @dakotafabrodev/create-agent-harness my-harness',
    note: 'Create a Goose-compatible harness project with setup guidance and contracts.'
  },
  {
    step: 'Customize',
    code: 'cd my-harness',
    note: 'Edit AGENTS.md, model routing, workflows, and project context for your team.'
  },
  {
    step: 'Validate',
    code: 'npx @dakotafabrodev/agent-harness validate\nnpx @dakotafabrodev/agent-harness validate --strict',
    note: 'Baseline checks structure. Strict checks confirm placeholders are replaced.'
  },
  {
    step: 'Run',
    code: 'npx @dakotafabrodev/agent-harness run build --dry-run\nnpx @dakotafabrodev/agent-harness run build',
    note: 'Dry-run first, then execute workflow phase commands with fail-fast behavior.'
  }
]

const openQuestions = [
  'Which strict checks correlate most with fewer CI failures?',
  'What minimum schema set balances rigor and adoption speed?',
  'How should multi-runtime compatibility be versioned?',
  'Which maturity signals are lightweight and still decision-useful?'
]

const footerLinks = [
  { label: 'dakotafabro.dev', href: 'https://dakotafabro.dev' },
  { label: 'GitHub', href: 'https://github.com/dakotafabro' },
  { label: 'AAIF', href: 'https://aaif.io/' },
  { label: 'Goose', href: 'https://github.com/block/goose' },
  { label: 'AAIF Portfolio', href: 'https://aaif.dakotafabro.dev' }
]

export default function App() {
  return (
    <div className="page">
      <header className="hero">
      <a className="brand-link" href="https://aaif.dakotafabro.dev" target="_blank" rel="noreferrer">
        DF x AAIF
      </a>
        <p className="eyebrow">Works with Goose</p>
        <h1>Open Agent Harness</h1>
        <p className="subtitle">
          A growth-first framework for human and AI collaboration maturity with explicit contracts,
          validation gates, and reflection loops.
        </p>
      </header>

      <section className="card" id="problem">
        <h2>Problem</h2>
        <p>
          AI-assisted teams can move quickly and still lose quality through hidden assumptions,
          convention drift, and avoidable CI failures.
        </p>
      </section>

      <section className="card" id="solution">
        <h2>How Open Agent Harness solves it</h2>
        <ul>
          <li>Scaffolded contracts for policy, workflows, context, and memory</li>
          <li>Baseline and strict validation before production use</li>
          <li>Executable phase commands for CI-aligned quality gates</li>
          <li>Reflection artifacts that turn sessions into reusable practice</li>
        </ul>
      </section>

      <section className="card" id="pillars">
        <h2>Design pillars</h2>
        <div className="grid-two">
          {pillars.map((p) => (
            <article key={p.title} className="mini">
              <h3>{p.title}</h3>
              <p>{p.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card" id="install">
        <h2>Install</h2>
        <pre>{'npx @dakotafabrodev/create-agent-harness my-harness'}</pre>
      </section>

      <section className="card" id="quickstart">
        <h2>Get started in 4 steps</h2>
        <div className="steps-one">
          {quickstart.map((s, i) => (
            <article key={s.step} className="step">
              <p className="step-kicker">Step {i + 1}</p>
              <h3>{s.step}</h3>
              <pre>{s.code}</pre>
              <p>{s.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card" id="docs">
        <h2>Documentation links</h2>
        <ul>
          <li><a href="https://www.npmjs.com/package/@dakotafabrodev/create-agent-harness" target="_blank" rel="noreferrer">@dakotafabrodev/create-agent-harness on npm</a></li>
          <li><a href="https://www.npmjs.com/package/@dakotafabrodev/agent-harness" target="_blank" rel="noreferrer">@dakotafabrodev/agent-harness on npm</a></li>
          <li><a href="https://github.com/dakotafabro/open-agent-harness" target="_blank" rel="noreferrer">Open Agent Harness GitHub</a></li>
        </ul>
      </section>

      <section className="card" id="open-questions">
        <h2>Open questions</h2>
        <ul>
          {openQuestions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            ))}
          </div>
          <p className="footer-copy">Built for open collaboration maturity. Works with Goose.</p>
        </div>
      </footer>
    </div>
  )
}