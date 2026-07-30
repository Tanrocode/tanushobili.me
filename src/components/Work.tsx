import { useState } from 'react';
import { Reveal } from './Reveal';
import { ExperienceTab } from './ExperienceTab';
import { StackTab } from './StackTab';
import { ProjectsTab } from './ProjectsTab';
import './Work.css';

type Tab = 'experience' | 'stack' | 'projects';

const TABS: { id: Tab; label: string }[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
];

// Tabs + content are fully built below but not final — flip this to true
// once the Experience/Stack/Projects layout is ready to ship.
const SHOW_WORK_CONTENT = false;

export function Work() {
  const [tab, setTab] = useState<Tab>('experience');

  return (
    <div id="work" className="work-viewport">
      <Reveal className="work">
        <div className="work__header">
          <div className="work__eyebrow">
            <h2 className="work__title">Experience</h2>
          </div>
        </div>

        {SHOW_WORK_CONTENT ? (
          <>
            <div className="work__tabs">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`work__tab ${tab === t.id ? 'work__tab--active' : ''}`}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {tab === 'experience' && <ExperienceTab />}
            {tab === 'stack' && <StackTab />}
            {tab === 'projects' && <ProjectsTab />}
          </>
        ) : (
          <div className="work__coming-soon">
            <span>Coming soon!</span>
          </div>
        )}
      </Reveal>
    </div>
  );
}
