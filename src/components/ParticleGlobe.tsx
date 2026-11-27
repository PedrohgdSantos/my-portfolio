import { useEffect, useRef } from 'react';

type Point = { x: number; y: number; z: number; bright: boolean };

const count = 4200;
const goldenAngle = Math.PI * (3 - Math.sqrt(5));
const points: Point[] = Array.from({ length: count }, (_, index) => {
  const y = 1 - 2 * (index + .5) / count;
  const latitudeRadius = Math.sqrt(1 - y * y);
  const longitude = index * goldenAngle;
  const radius = .94 + (index * 73 % 31) / 310;
  return {
    x: Math.cos(longitude) * latitudeRadius * radius,
    y: y * radius,
    z: Math.sin(longitude) * latitudeRadius * radius,
    bright: Math.sin(longitude * 3 + y * 9) + Math.cos(longitude * 7 - y * 5) > .75,
  };
});

export function ParticleGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !context) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(700 * pixelRatio);
    canvas.height = Math.round(700 * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    let angle = .35;
    let lastTime = 0;
    let frameId = 0;
    let visible = true;
    let pointerActive = false;
    let pointerX = 350;
    let pointerY = 350;
    let targetZoom = 1;
    let zoom = 1;

    function draw() {
      if (!context) return;
      const light = document.documentElement.dataset.theme === 'light';
      const cosine = Math.cos(angle);
      const sine = Math.sin(angle);
      const tiltCosine = Math.cos(.18);
      const tiltSine = Math.sin(.18);
      context.clearRect(0, 0, 700, 700);

      for (const point of points) {
        const x = point.x * cosine - point.z * sine;
        const depth = point.x * sine + point.z * cosine;
        const y = point.y * tiltCosine - depth * tiltSine;
        const z = point.y * tiltSine + depth * tiltCosine;
        const perspective = 2.7 / (2.7 - z * .4);
        let screenX = 350 + x * 235 * perspective * zoom;
        let screenY = 350 + y * 235 * perspective * zoom;
        let proximity = 0;
        if (pointerActive && z > 0) {
          const dx = screenX - pointerX;
          const dy = screenY - pointerY;
          proximity = Math.max(0, 1 - Math.hypot(dx, dy) / 125);
          screenX = pointerX + dx * (1 + proximity * .16);
          screenY = pointerY + dy * (1 + proximity * .16);
        }
        const size = (z > 0 ? (point.bright ? 1.9 : 1.35) + z * .75 : .8) * perspective + proximity * 1.4;

        context.globalAlpha = Math.min(1, (z > 0 ? .35 + z * .55 : .13 + (z + 1) * .12) + proximity * .35);
        context.fillStyle = proximity > .25
          ? (light ? '#3d185c' : '#f2ffff')
          : light
          ? (point.bright ? '#6c358f' : '#70569d')
          : (point.bright ? '#a5f1ee' : '#c99bf3');
        context.fillRect(screenX - size / 2, screenY - size / 2, size, size);
      }
      context.globalAlpha = 1;
    }

    function animate(time: number) {
      if (lastTime && time - lastTime < 32) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }
      if (lastTime) angle += Math.min(time - lastTime, 80) * .00023;
      zoom += (targetZoom - zoom) * .14;
      lastTime = time;
      draw();
      frameId = window.requestAnimationFrame(animate);
    }

    function syncAnimation() {
      window.cancelAnimationFrame(frameId);
      lastTime = 0;
      if (visible && !motion.matches && !document.hidden) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        draw();
      }
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      const bounds = canvas!.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width * 700;
      const y = (event.clientY - bounds.top) / bounds.height * 700;
      pointerActive = Math.hypot(x - 350, y - 350) < 265;
      pointerX = x;
      pointerY = y;
      targetZoom = pointerActive ? 1.1 : 1;
      if (motion.matches) {
        zoom = targetZoom;
        draw();
      }
    }

    function onPointerLeave() {
      pointerActive = false;
      targetZoom = 1;
      if (motion.matches) {
        zoom = 1;
        draw();
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    }, { threshold: 0 });
    observer.observe(canvas);
    const themeObserver = new MutationObserver(draw);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    motion.addEventListener('change', syncAnimation);
    document.addEventListener('visibilitychange', syncAnimation);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);
    syncAnimation();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      themeObserver.disconnect();
      motion.removeEventListener('change', syncAnimation);
      document.removeEventListener('visibilitychange', syncAnimation);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="orbit-home-globe" aria-hidden="true" />;
}
