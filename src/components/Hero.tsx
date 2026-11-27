import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { ParticleGlobe } from './ParticleGlobe';

const nameLength = 'PEDROHENRIQUE'.length;

const stars = Array.from({ length: 150 }, (_, index) => {
  const angle = index * 2.399963229728653;
  const radius = Math.sqrt((index + .5) / 150);
  return {
    x: 350 + Math.cos(angle) * radius * 330,
    y: 350 + Math.sin(angle) * radius * 310,
    size: index % 13 === 0 ? 1.5 : .7,
    opacity: .18 + (index % 7) * .09,
  };
});

function OrbitalArtwork() {
  return (
    <div className="orbit-home-art" aria-hidden="true">
      <div className="orbit-home-glow" />
      <ParticleGlobe />
      <svg className="orbit-home-orbits" viewBox="0 0 700 700" fill="none">
        <defs>
          <linearGradient id="orbit-comet-tail" x1="-60" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" stopOpacity="0" />
            <stop offset=".72" stopColor="currentColor" stopOpacity=".55" />
            <stop offset="1" stopColor="currentColor" />
          </linearGradient>
          <mask id="orbit-occlusion" maskUnits="userSpaceOnUse" x="0" y="0" width="700" height="700">
            <rect width="700" height="700" fill="white" />
            <path d="M 115 350 A 235 235 0 0 1 585 350 Z" fill="black" />
          </mask>
        </defs>
        <g className="orbit-home-ring orbit-home-ring-one" mask="url(#orbit-occlusion)">
          <path id="orbit-track-one" className="orbit-home-orbit-back" d="M 650.7 453.5 A 318 112 19 1 1 49.3 246.5 A 318 112 19 1 1 650.7 453.5" />
          <path className="orbit-home-orbit-flow" pathLength="1000" d="M 650.7 453.5 A 318 112 19 1 1 49.3 246.5 A 318 112 19 1 1 650.7 453.5" />
          <g className="orbit-home-comet">
            <path className="orbit-home-orbit-tail" d="M -60 0 Q -26 -3 0 0" stroke="url(#orbit-comet-tail)" />
            <circle className="orbit-home-comet-glow" r="15" />
            <path className="orbit-home-comet-star" d="M 0 -12 L 2.5 -2.5 L 12 0 L 2.5 2.5 L 0 12 L -2.5 2.5 L -12 0 L -2.5 -2.5 Z" />
            <animateMotion dur="12s" repeatCount="indefinite" rotate="auto"><mpath href="#orbit-track-one" /></animateMotion>
          </g>
        </g>
        <g className="orbit-home-ring orbit-home-ring-two" mask="url(#orbit-occlusion)">
          <path id="orbit-track-two" className="orbit-home-orbit-back" d="M 584 225.6 A 265 145 -28 1 0 116 474.4 A 265 145 -28 1 0 584 225.6" />
          <path className="orbit-home-orbit-flow" pathLength="1000" d="M 584 225.6 A 265 145 -28 1 0 116 474.4 A 265 145 -28 1 0 584 225.6" />
          <g className="orbit-home-comet">
            <path className="orbit-home-orbit-tail" d="M -45 0 Q -20 -2 0 0" stroke="url(#orbit-comet-tail)" />
            <circle className="orbit-home-comet-glow" r="12" />
            <path className="orbit-home-comet-star" d="M 0 -9 L 2 -2 L 9 0 L 2 2 L 0 9 L -2 2 L -9 0 L -2 -2 Z" />
            <animateMotion dur="17s" repeatCount="indefinite" rotate="auto"><mpath href="#orbit-track-two" /></animateMotion>
          </g>
        </g>
        {stars.map((star, index) => (
          <circle key={index} cx={star.x} cy={star.y} r={star.size} fill="currentColor" opacity={star.opacity} />
        ))}
      </svg>
      <span className="orbit-home-coordinate">23°33' S · 46°38' W</span>
    </div>
  );
}

function AnimatedNameWord({ word, offset, visibleLetters }: { word: string; offset: number; visibleLetters: number }) {
  return (
    <span className="orbit-home-word" aria-hidden="true">
      {Array.from(word, (letter, index) => (
        <span
          className={'orbit-home-letter' + (offset + index < visibleLetters ? ' is-visible' : '')}
          key={index}
        >{letter}</span>
      ))}
    </span>
  );
}

export function Hero() {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: number | undefined;

    const showLetters = (count: number) => {
      setVisibleLetters(count);
      timer = window.setTimeout(
        () => showLetters(count === nameLength ? 0 : count + 1),
        count === nameLength ? 2200 : count === 0 ? 350 : 140,
      );
    };

    const syncMotionPreference = () => {
      window.clearTimeout(timer);
      if (reducedMotion.matches) setVisibleLetters(nameLength);
      else showLetters(0);
    };

    syncMotionPreference();
    reducedMotion.addEventListener('change', syncMotionPreference);
    return () => {
      window.clearTimeout(timer);
      reducedMotion.removeEventListener('change', syncMotionPreference);
    };
  }, []);

  return (
    <section className="orbit-home" id="inicio" aria-labelledby="orbit-home-title">
      <div className="orbit-home-top wrap"><span>PORTFÓLIO / 2026</span><span>DESENVOLVEDOR FULL STACK</span></div>
      <h1 id="orbit-home-title" className="orbit-home-title" aria-label="Pedro Henrique">
        <AnimatedNameWord word="PEDRO" offset={0} visibleLetters={visibleLetters} />{' '}
        <AnimatedNameWord word="HENRIQUE" offset={5} visibleLetters={visibleLetters} />
      </h1>
      <div className="orbit-home-scene wrap">
        <div className="orbit-home-aside orbit-home-aside-left">
          <span className="orbit-home-kicker">ÓRBITA CRIATIVA</span>
          <strong>Ideias em movimento.</strong>
          <span>São Paulo · Brasil</span>
        </div>
        <OrbitalArtwork />
        <div className="orbit-home-aside orbit-home-aside-right">
          <span className="orbit-home-kicker">DIREÇÃO / 01</span>
          <p>Transformo ideias em experiências digitais que aproximam pessoas e negócios.</p>
        </div>
      </div>
      <div className="orbit-home-bottom wrap">
        <p>Desenvolvimento com propósito.<br />Presença digital com identidade.</p>
        <div className="orbit-home-actions">
          <a className="orbit-home-primary shine-action" href="#projetos">Conheça meu trabalho <ArrowUpRight size={18} aria-hidden="true" /></a>
          <a className="orbit-home-secondary" href="#sobre">Sobre mim <ArrowDownRight size={17} aria-hidden="true" /></a>
        </div>
        <span className="orbit-home-scroll">ROLE PARA EXPLORAR ↓</span>
      </div>
    </section>
  );
}
