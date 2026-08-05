import { Reveal } from './Reveal';
import { ExperienceTab } from './ExperienceTab';
import './Work.css';

export function Work() {
  return (
    <div id="work" className="work-viewport">
      <Reveal className="work">
        <div className="work__header">
          <div className="work__eyebrow">
            <h2 className="work__title">Things I've Built</h2>
          </div>
        </div>

        <ExperienceTab />
      </Reveal>
    </div>
  );
}
