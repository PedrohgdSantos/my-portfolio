import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import javaIcon from '../assets/tech/java.svg';
import reactIcon from '../assets/tech/react.svg';
import typescriptIcon from '../assets/tech/typescript.svg';
import angularIcon from '../assets/tech/angular.svg';
import mysqlIcon from '../assets/tech/mysql.svg';

const technologies = ['Java', 'React', 'TypeScript', 'Angular', 'MySQL'] as const;
type Technology = typeof technologies[number];
const icons: Record<Technology, string> = {
  Java: javaIcon,
  React: reactIcon,
  TypeScript: typescriptIcon,
  Angular: angularIcon,
  MySQL: mysqlIcon,
};

function TechIcon({ name }: { name: Technology }) {
  return <img src={icons[name]} alt="" aria-hidden="true" />;
}

export function TechStrip() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: .2 });
    observer.observe(strip);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % technologies.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [visible]);

  const activeTechnology = technologies[activeIndex];

  return (
    <div className={'tech-strip' + (visible ? ' is-visible' : '')} ref={stripRef}>
      <div className="wrap">
        <span className="tech-label">TECNOLOGIAS QUE USO</span>
        <div className="tech-orbit-stage">
          <div className="tech-orbit" role="group" aria-label="Escolha uma tecnologia">
            {technologies.map((name, index) => (
              <button
                className={'tech-orbit-item' + (activeIndex === index ? ' active' : '')}
                data-tech={name}
                style={{
                  '--orbit-angle': `${index * 72}deg`,
                  '--orbit-counter-angle': `${-index * 72}deg`,
                } as CSSProperties}
                key={name}
                type="button"
                aria-label={name}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              >
                <span className="tech-orbit-icon"><TechIcon name={name} /></span>
              </button>
            ))}
          </div>
          <div className="tech-center" data-tech={activeTechnology} key={activeTechnology}>
            <span className="tech-center-icon"><TechIcon name={activeTechnology} /></span>
            <strong>{activeTechnology}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
