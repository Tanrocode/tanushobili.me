import { useEffect, useRef, useState, type ReactNode } from 'react';

export function Reveal({ children, id, className }: { children: ReactNode; id?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );
    io.observe(el);

    const safety = setTimeout(() => setVisible(true), 2600);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return (
    <div ref={ref} id={id} data-reveal className={`${visible ? 'is-visible' : ''} ${className ?? ''}`.trim()}>
      {children}
    </div>
  );
}
