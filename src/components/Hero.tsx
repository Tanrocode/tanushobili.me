import { Reveal } from './Reveal';
import { ImageSlot } from './ImageSlot';
import './Hero.css';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div id="intro" className="hero-viewport">
      <Reveal className="hero">
        <div className="hero__heading">
          <h1 className="hero__title">
            Hey, I'm <span className="hero__name">Tanush</span> 🤠
          </h1>
          <p className="hero__subtitle">Computer Science + Data Science @ UC Berkeley</p>
          <div className="hero__divider" />
        </div>

        <div className="hero__body">
          <div className="hero__portrait">
            <ImageSlot src="/images/portrait.jpg" alt="Tanush Obili" placeholder="Drop your photo" radius={12} />
          </div>
          <div className="hero__copy">
            <p>
              I'm always a fan of exploring something I don't know. Naturally, that led me to the ever-evolving
              field of AI and software engineering. I found myself immersed in a variety of different areas of
              tech, whether it be agent infrastructure or full-stack ML. You can check my work{' '}
              <Link to="/work" className="hero__email-link">
                here
              </Link>
              .
            </p>
            <p>
              Outside developing, I'm usually trying viral protein recipes, finding new spots in the Bay to
              backpack, watching anime, playing sports (football, cricket, pickleball), or reading self-improvement
              books.
            </p>
            <p>
              Want to talk? You can reach me via{' '}
              <a href="mailto:tanush.obili@berkeley.edu" className="hero__email-link">
                email
              </a>
              .
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
