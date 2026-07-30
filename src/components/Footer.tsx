import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer__copyright">© 2026 Tanush Obili · tanushobili.me</span>
      <div className="footer__links">
        <a href="https://github.com/Tanrocode" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/tanush-obili/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://x.com/tanushobili" target="_blank" rel="noopener noreferrer">
          X
        </a>
        <a href="mailto:tanush.obili@berkeley.edu">Email</a>
      </div>
    </footer>
  );
}
