import { Fragment } from 'react';
import { ImageSlot } from './ImageSlot';
import './ProjectsTab.css';

type Project = {
  id: string;
  name: string;
  link?: { href: string; label: string };
  staticTag?: string;
  meta: string[];
  description: string;
  sourceHref: string;
  screenshot: string;
  screenshotAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: 'spolm',
    name: 'Spolm',
    link: { href: 'https://tryspolm.com', label: 'tryspolm.com ↗' },
    meta: ['Agent infra', 'Python · Neo4j · LiteLLM', 'PyPI + npm'],
    description:
      "A self-learning intelligence layer that sits next to any agent: it extracts reusable lessons after each run and injects the most relevant ones before the next one. Agents compound without touching their architecture.",
    sourceHref: 'https://github.com/tryspolm/spolm',
    screenshot: '/images/proj-spolm.jpg',
    screenshotAlt: 'Spolm dashboard screenshot',
  },
  {
    id: 'talkode',
    name: 'Talkode',
    link: { href: 'https://talkode.netlify.app/', label: 'talkode.netlify.app ↗' },
    meta: ['Voice AI', 'Next.js · realtime voice', 'Live'],
    description:
      'AI-guided technical screening. Candidates talk through real, messy production code while a voice interviewer probes back, adapts difficulty, and scores every answer against a rubric — judgment and debugging instead of memorized patterns.',
    sourceHref: 'https://github.com/Tanrocode',
    screenshot: '/images/proj-talkode.jpg',
    screenshotAlt: 'Talkode screenshot',
  },
  {
    id: 'calendio',
    name: 'Calendio',
    staticTag: 'CRM voice agents',
    meta: ['Full stack', 'FastAPI · Supabase · LangChain', 'Google Calendar'],
    description:
      'Small businesses embed a voice agent that answers inbound calls, books appointments straight into Google Calendar, and captures caller info. Owners configure the agent and review call analytics from a dashboard.',
    sourceHref: 'https://github.com/Tanrocode/calendio',
    screenshot: '/images/proj-calendio.jpg',
    screenshotAlt: 'Calendio dashboard screenshot',
  },
  {
    id: 'aidentify',
    name: 'AIdentify',
    link: { href: 'https://aidentified.netlify.app/', label: 'aidentified.netlify.app ↗' },
    meta: ['Applied ML', 'React · Flask · SVM + XGBoost', 'Research-backed'],
    description:
      'AI-writing detection built on lexical features the literature says actually separate human from generated text — verb ratio, synonym frequency, burstiness — served to a React front end through a Flask REST API.',
    sourceHref: 'https://github.com/Tanrocode/AIdentify',
    screenshot: '/images/proj-aidentify.jpg',
    screenshotAlt: 'AIdentify screenshot',
  },
  {
    id: 'careva',
    name: 'Careva',
    staticTag: 'Mobile',
    meta: ['Health', 'Flutter · Dart', 'Chatbot-first'],
    description:
      'A chatbot-centric self-care app: conversation is the primary interface for check-ins and routines, rather than another dashboard of habit streaks to ignore.',
    sourceHref: 'https://github.com/Tanrocode/Careva',
    screenshot: '/images/proj-careva.jpg',
    screenshotAlt: 'Careva app screenshot',
  },
];

export function ProjectsTab() {
  return (
    <div className="projects-list">
      {PROJECTS.map((project) => (
        <article key={project.id} className="project-card">
          <div className="project-card__shot">
            <ImageSlot src={project.screenshot} alt={project.screenshotAlt} placeholder={project.screenshotAlt} radius={8} />
          </div>
          <div className="project-card__body">
            <div className="project-card__head">
              <h3 className="project-card__title">{project.name}</h3>
              {project.link ? (
                <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="project-card__link">
                  {project.link.label}
                </a>
              ) : (
                <span className="project-card__static-tag">{project.staticTag}</span>
              )}
            </div>
            <div className="project-card__meta">
              {project.meta.map((m, i) => (
                <Fragment key={m}>
                  {i > 0 && <span className="project-card__dot" />}
                  <span className="project-card__meta-item">{m}</span>
                </Fragment>
              ))}
            </div>
            <p className="project-card__desc">{project.description}</p>
            <a href={project.sourceHref} target="_blank" rel="noopener noreferrer" className="project-card__source">
              View source ↗
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
