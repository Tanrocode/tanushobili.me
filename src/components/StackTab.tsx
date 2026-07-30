import './StackTab.css';

const STACK = [
  { initials: 'Py', name: 'Python', desc: 'Agents, ML, and everything server-side' },
  { initials: 'Ts', name: 'TypeScript', desc: 'Typed end to end, client to SDK' },
  { initials: 'Re', name: 'React & Vite', desc: 'Interfaces for the things I ship' },
  { initials: 'Fa', name: 'FastAPI', desc: 'Async APIs, auth, and agent endpoints' },
  { initials: 'Lc', name: 'LangChain', desc: 'Tool-calling agents and orchestration' },
  { initials: 'N4', name: 'Neo4j', desc: 'Graph memory with vector search' },
  { initials: 'Sb', name: 'Supabase', desc: 'Postgres, auth, and OAuth plumbing' },
  { initials: 'Sk', name: 'scikit-learn', desc: 'Feature engineering and classical models' },
];

export function StackTab() {
  return (
    <div className="stack-grid">
      {STACK.map((item) => (
        <div key={item.name} className="stack-tile">
          <span className="stack-tile__icon">{item.initials}</span>
          <div className="stack-tile__text">
            <span className="stack-tile__name">{item.name}</span>
            <span className="stack-tile__desc">{item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
