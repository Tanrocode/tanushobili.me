import { ExperienceContent } from './ExperienceContent';
import './ExperienceTab.css';

// Layout/copy for this tab isn't finalized yet. ExperienceContent has the
// real cards fully written — flip this to true once the layout is decided.
const SHOW_EXPERIENCE_CONTENT = false;

export function ExperienceTab() {
  if (SHOW_EXPERIENCE_CONTENT) {
    return <ExperienceContent />;
  }

  return (
    <div className="experience-coming-soon">
      <span>Coming soon!</span>
    </div>
  );
}
