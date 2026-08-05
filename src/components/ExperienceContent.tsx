import { ImageSlot } from './ImageSlot';
import './ExperienceContent.css';

export function ExperienceContent() {
  return (
    <div className="experience-list">
      <article className="experience-card">
        <div className="experience-card__head">
          <div className="experience-card__identity">
            <div className="experience-card__avatar">
              <ImageSlot src="/images/fav-spolm.png" alt="Spolm favicon" placeholder="S" radius={11} />
            </div>
            <div className="experience-card__title-group">
              <span className="experience-card__title">Spolm</span>
              <a href="https://tryspolm.com" target="_blank" rel="noopener noreferrer" className="experience-card__link">
                Demo
              </a>
            </div>
          </div>
        </div>
        <div className="experience-card__shot">
          <ImageSlot src="/images/exp-spolm.png" alt="Spolm demo" placeholder="Spolm demo" radius={8} />
        </div>
        <div className="experience-card__panel">
          <span className="experience-card__desc">
            SDK-based observability and memory suite for AI agents. Equip with agentic trace logging and analysis, automated GitHub PR fixes, and
            confidence-based persistent memory over Neo4j.
          </span>
        </div>
      </article>

      <article className="experience-card">
        <div className="experience-card__head">
          <div className="experience-card__identity">
            <div className="experience-card__avatar">
              <ImageSlot src="/images/fav-talkode.png" alt="Talkode favicon" placeholder="T" radius={11} />
            </div>
            <div className="experience-card__title-group">
              <span className="experience-card__title">Talkode</span>
              <a href="https://talkode.netlify.app/" target="_blank" rel="noopener noreferrer" className="experience-card__link">
                Demo
              </a>
            </div>
          </div>
        </div>
        <div className="experience-card__shot">
          <ImageSlot src="/images/exp-talkode.png" alt="Talkode demo" placeholder="Talkode demo" radius={8} />
        </div>
        <div className="experience-card__panel">
          <span className="experience-card__desc">
            Voice-first online assessment platform for HR teams, with an interviewer developed to act like a senior developer walking candidates through messy codebases, offering sub-1s response times and post-interview insights for HR. 
          </span>
        </div>
      </article>

      <article className="experience-card">
        <div className="experience-card__head">
          <div className="experience-card__identity">
            <div className="experience-card__avatar">
              <ImageSlot src="/images/fav-calendio.png" alt="Calendio favicon" placeholder="C" radius={11} />
            </div>
            <div className="experience-card__title-group">
              <span className="experience-card__title">Calendio</span>
              <a
                href="https://trycalendio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-card__link"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
        <div className="experience-card__shot">
          <ImageSlot src="/images/exp-calendio.jpg" alt="Calendio demo" placeholder="Calendio demo" radius={8} />
        </div>
        <div className="experience-card__panel">
          <span className="experience-card__desc">
            CRM agent ecosystem for small businesses. Answers inbound calls, integrates into business tools (Google, Slack, etc), and captures caller info.
          </span>
        </div>
      </article>
    </div>
  );
}
