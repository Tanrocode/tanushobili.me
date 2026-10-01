import './Readme.css';

const PROJECTS = [
  {
    name: 'Spolm',
    logo: '/images/fav-spolm.png',
    image: '/images/exp-spolm.png',
    href: 'https://tryspolm.com',
    desc: 'SDK-based observability and memory suite for AI agents. Agentic trace logging and analysis, automated GitHub PR fixes, and confidence-based persistent memory over Neo4j.',
  },
  {
    name: 'Talkode',
    logo: '/images/fav-talkode.png',
    image: '/images/exp-talkode.png',
    href: 'https://talkode.netlify.app/',
    desc: 'Voice-first online assessment platform for HR teams. The interviewer acts like a senior developer walking candidates through messy codebases, with sub-1s responses and post-interview insights.',
  },
  {
    name: 'Calendio',
    logo: '/images/fav-calendio.png',
    image: '/images/exp-calendio.jpg',
    href: 'https://trycalendio.netlify.app/',
    desc: 'CRM agents tailored for small businesses. Answers inbound calls, integrates with business tools (Google, Slack, etc.), and captures caller info.',
  },
];

export function Readme() {
  return (
    <article className="readme">
      <div className="readme__tabs">
        <span className="readme__tab">
          <span className="readme__tab-icon">ⓘ</span>
          README.md
          <span className="readme__tab-close" aria-hidden="true">×</span>
        </span>
      </div>
      <div className="readme__crumbs">
        <span>Tanrocode</span>
        <span className="readme__crumb-sep">›</span>
        <span>portfolio</span>
        <span className="readme__crumb-sep">›</span>
        <span className="readme__crumb-file">
          <span className="readme__tab-icon">ⓘ</span> README.md
        </span>
      </div>

      <div className="readme__body">
        <header className="readme__header">
          <div>
            <h1>
              Hey, I'm <span className="readme__name">Tanush</span> 🤠
            </h1>
            <p className="readme__tagline">Computer Science + Data Science @ UC Berkeley</p>
          </div>
          <img src="/images/portrait.jpg" alt="Tanush Obili" className="readme__portrait" />
        </header>

        <h2>About</h2>
        <p>
          I'm always a fan of exploring something I don't know. Naturally, that led me to the ever-evolving field of AI
          and software engineering. I found myself immersed in a variety of different areas of tech, whether it be agent
          infrastructure or full-stack ML.
        </p>

        <h2>What I've Been Up To</h2>
        <ul>
          <li>I've been contributing at Berkeley's Sky Computing Lab, working on GEPA, an open-source prompt optimizer used at some cool companies.</li>
          <li>Before that, I built QA pipelines for the California State Water Board, which gave me an appreciation for real-world data systems.</li>
          <li>
             I was also a researcher at SJSU, exploring different aspects of ML I'd never considered before.
          </li>
        </ul>

        <h2 id="projects">Things I've Built</h2>
        {PROJECTS.map((p) => (
          <section key={p.name} className="readme__project">
            <div className="readme__project-text">
              <h3>
                <img src={p.logo} alt="" className="readme__logo" />
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.name} ↗
                </a>
              </h3>
              <p>{p.desc}</p>
            </div>
            <img src={p.image} alt={`${p.name} demo`} className="readme__shot" loading="lazy" />
          </section>
        ))}

        <h2>Outside of Developing</h2>
        <p>
          You can usually find me trying viral protein recipes, backpacking around the Bay, watching anime, playing sports (football, cricket, pickleball), or
          reading self-improvement books.
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:tanush.obili@berkeley.edu">tanush.obili@berkeley.edu</a>
        </p>
      </div>

      <div className="readme__status">
        <span className="readme__status-branch">⎇ main</span>
        <span className="readme__status-right">
          <span>Markdown</span>
          <span>UTF-8</span>
        </span>
      </div>
    </article>
  );
}
