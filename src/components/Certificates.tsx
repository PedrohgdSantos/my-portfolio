import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Award } from 'lucide-react';
import { certificates } from '../data/certificates';

export function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const programmaticTargetRef = useRef<number | null>(null);
  const scrollFallbackRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || certificates.length < 2) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(section);

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);
    const updatePageVisibility = () => setIsPageVisible(!document.hidden);
    updateMotionPreference();
    updatePageVisibility();
    motionPreference.addEventListener('change', updateMotionPreference);
    document.addEventListener('visibilitychange', updatePageVisibility);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener('change', updateMotionPreference);
      document.removeEventListener('visibilitychange', updatePageVisibility);
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !isPageVisible || isPaused || prefersReducedMotion || certificates.length < 2) return;
    const timer = window.setTimeout(() => goTo((activeIndex + 1) % certificates.length), 3200);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isVisible, isPageVisible, isPaused, prefersReducedMotion]);

  useEffect(() => () => {
    if (scrollFallbackRef.current !== null) window.clearTimeout(scrollFallbackRef.current);
  }, []);

  function finishProgrammaticScroll() {
    if (programmaticTargetRef.current === null) return;
    if (scrollFallbackRef.current !== null) window.clearTimeout(scrollFallbackRef.current);
    scrollFallbackRef.current = null;
    programmaticTargetRef.current = null;
    syncActiveIndex();
  }

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const nextIndex = (index + certificates.length) % certificates.length;
    const card = track.children[nextIndex] as HTMLElement | undefined;
    if (!card) return;
    const left = track.scrollLeft + card.getBoundingClientRect().left - track.getBoundingClientRect().left - (track.clientWidth - card.clientWidth) / 2;
    programmaticTargetRef.current = nextIndex;
    if (scrollFallbackRef.current !== null) window.clearTimeout(scrollFallbackRef.current);
    scrollFallbackRef.current = window.setTimeout(finishProgrammaticScroll, 1800);
    track.scrollTo({ left, behavior:prefersReducedMotion ? 'auto' : 'smooth' });
    setActiveIndex(nextIndex);
  }

  function syncActiveIndex() {
    const track = trackRef.current;
    if (!track || programmaticTargetRef.current !== null) return;
    const center = track.getBoundingClientRect().left + track.clientWidth / 2;
    const closest = certificates.reduce((best, _, index) => {
      const card = track.children[index] as HTMLElement;
      const cardCenter = card.getBoundingClientRect().left + card.clientWidth / 2;
      return Math.abs(cardCenter - center) < best.distance ? { index, distance:Math.abs(cardCenter - center) } : best;
    }, { index:0, distance:Infinity });
    setActiveIndex(closest.index);
  }

  return (
    <section className="certificates-section wrap" id="certificados" aria-labelledby="certificates-title" ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false); }}>
      <div className="section-heading certificates-heading">
        <div>
          <div className="eyebrow">CURSOS E EVENTOS</div>
          <h3 id="certificates-title">Certificados <em>e eventos.</em></h3>
        </div>
        <p>O que aprendi em cursos e eventos<br />também faz parte da minha trajetória.</p>
      </div>

      {certificates.length ? (
        <>
          <div className="certificates-track" ref={trackRef} onScroll={syncActiveIndex} onScrollEnd={finishProgrammaticScroll}
            onPointerDown={() => { programmaticTargetRef.current = null; }}
            onWheel={() => { programmaticTargetRef.current = null; }} aria-label="Certificados">
            {certificates.map((certificate, index) => (
              <article className={`certificate-card${index === activeIndex ? ' is-active' : ''}`} key={`${certificate.title}-${certificate.issuer}-${index}`}>
                <a className="certificate-media" href={certificate.documentUrl} target="_blank" rel="noreferrer" aria-label={`Abrir certificado: ${certificate.title}`}>
                  <img src={certificate.image} alt={`Prévia do certificado: ${certificate.title}`} loading="lazy" />
                </a>
                <div className="certificate-content">
                  <div className="certificate-topline">
                    <span className="certificate-kind">{certificate.kind}</span>
                    <span className="certificate-number">{String(index + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}</span>
                  </div>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.issuer} · {certificate.date} · {certificate.duration}</p>
                  <a href={certificate.documentUrl} target="_blank" rel="noreferrer">
                    Abrir certificado <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                  {certificate.verificationUrl && <a href={certificate.verificationUrl} target="_blank" rel="noreferrer">Verificar autenticidade <ArrowUpRight size={17} aria-hidden="true" /></a>}
                </div>
              </article>
            ))}
          </div>
          {certificates.length > 1 && (
            <div className="certificates-controls">
              <div className="certificates-progress" role="group" aria-label="Selecionar certificado">
                {certificates.map((certificate, index) => (
                  <button
                    key={`${certificate.title}-${index}`}
                    type="button"
                    className={index === activeIndex ? 'active' : ''}
                    aria-label={`Ir para certificado ${index + 1}: ${certificate.title}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                    onClick={() => goTo(index)}
                  />
                ))}
              </div>
              <div className="certificates-arrows">
                <button type="button" aria-label="Certificado anterior" onClick={() => goTo(activeIndex - 1)}><ArrowLeft size={19} /></button>
                <button type="button" aria-label="Próximo certificado" onClick={() => goTo(activeIndex + 1)}><ArrowRight size={19} /></button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="certificates-empty">
          <span className="certificates-empty-icon"><Award size={34} aria-hidden="true" /></span>
          <div>
            <h3>Certificados em preparação</h3>
            <p>Os certificados de cursos e eventos serão apresentados aqui assim que os documentos forem adicionados.</p>
          </div>
        </div>
      )}
    </section>
  );
}
