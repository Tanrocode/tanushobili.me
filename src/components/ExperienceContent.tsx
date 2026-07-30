import './ExperienceContent.css';

/**
 * Real experience content — layout/copy still undecided, so this isn't
 * rendered in production yet (see ExperienceTab.tsx). Kept here, fully
 * written, to drop back in once the final layout is picked.
 */
export function ExperienceContent() {
  return (
    <div className="experience-list">
      <article className="experience-card">
        <div className="experience-card__head">
          <div className="experience-card__identity">
            <span className="experience-card__avatar">S</span>
            <div className="experience-card__title-group">
              <span className="experience-card__title">Spolm</span>
              <a href="https://tryspolm.com" target="_blank" rel="noopener noreferrer" className="experience-card__link">
                tryspolm.com
              </a>
            </div>
            <span className="experience-card__tag">Open source</span>
          </div>
          <span className="experience-card__meta">2025 — Present</span>
        </div>
        <div className="experience-card__panel">
          <span className="experience-card__role">Creator &amp; maintainer</span>
          <span className="experience-card__desc">
            Built a self-learning memory layer for AI agents: LLM memory extraction, embedding-based dedup, and
            similarity × confidence × recency retrieval over Neo4j. Shipped as <code>spolm</code> on PyPI and{' '}
            <code>@spolm/tracer</code> on npm, plus a hosted dashboard.
          </span>
        </div>
      </article>

      <article className="experience-card">
        <div className="experience-card__head">
          <div className="experience-card__identity">
            <span className="experience-card__avatar">B</span>
            <div className="experience-card__title-group">
              <span className="experience-card__title">UC Berkeley</span>
              <span className="experience-card__link experience-card__link--static">berkeley.edu</span>
            </div>
            <span className="experience-card__tag">Education</span>
          </div>
          <span className="experience-card__meta">Undergraduate</span>
        </div>
        <div className="experience-card__panel">
          <span className="experience-card__role">Computer Science</span>
          <span className="experience-card__desc">
            Coursework across systems, algorithms, and machine learning — and a lot of time spent building outside
            of it.
          </span>
        </div>
      </article>

      <article className="experience-card experience-card--placeholder">
        <span className="experience-card__placeholder-title">Slot for your internship / research role</span>
        <span className="experience-card__placeholder-desc">
          Send me the company, title, dates, and a line about what you shipped and I'll drop it in as a real card —
          or edit this one directly.
        </span>
      </article>
    </div>
  );
}
