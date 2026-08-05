import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const NAV_ITEMS = [
  { to: '/', label: 'Intro' },
  { to: '/work', label: 'Work' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <Link to="/" aria-label="Tanush Obili — home" className="sidebar__logo">
        <svg width="34" height="20" viewBox="0 0 40 24" fill="none">
          <rect x="1" y="2" width="15" height="3.4" rx="1.7" fill="#e9eefb" />
          <rect x="7.3" y="2" width="3.4" height="19" rx="1.7" fill="#e9eefb" />
          <circle cx="28" cy="12" r="9" stroke="#8fb4ff" strokeWidth="3.4" />
        </svg>
      </Link>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`sidebar__nav-link ${location.pathname === item.to ? 'sidebar__nav-link--active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <a href="#top" aria-label="Back to top" className="sidebar__top-btn">
        ↑
      </a>
    </aside>
  );
}
