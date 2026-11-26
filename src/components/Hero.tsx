import { ArrowRight, ArrowUpRight, Code2 } from 'lucide-react';

function CodeArtwork() {
  return (
    <div className="hero-visual" aria-label="Composição visual de desenvolvimento de software">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <span className="floating-symbol">✳</span>
      <div className="code-window">
        <div className="code-top">
          <div><i /><i /><i /></div>
          <span>sobre-mim.ts</span>
          <Code2 size={16} />
        </div>
        <div className="code-body">
          <div><span className="line">01</span><span className="code-keyword">const</span>{' '}<span className="code-identifier">desenvolvedor</span>{' = {'}</div>
          <div><span className="line">02</span>{'  nome: '}<span className="code-string">'Pedro Henrique'</span>,</div>
          <div><span className="line">03</span>{'  foco: '}<span className="code-string">'Soluções digitais'</span>,</div>
          <div><span className="line">04</span>{'  stack: ['}</div>
          <div><span className="line">05</span>{'    '}<span className="code-string">'Java'</span>,{' '}<span className="code-string">'React'</span>,</div>
          <div><span className="line">06</span>{'    '}<span className="code-string">'TypeScript'</span>,{' '}<span className="code-string">'MySQL'</span></div>
          <div><span className="line">07</span>{'  ],'}</div>
          <div><span className="line">08</span>{'  objetivo: '}<span className="code-string">'Gerar valor real'</span></div>
          <div><span className="line">09</span>{'};'}</div>
          <br />
          <div><span className="line">10</span><span className="code-comment">// Sua ideia começa aqui.</span></div>
          <div><span className="line">11</span><span className="code-function">vamosConstruir</span>(<span className="code-string">'juntos'</span>);</div>
        </div>
        <div className="code-status"><span><i /> pronto para criar</span><span>TypeScript</span></div>
      </div>
      <div className="floating-label">
        <span className="icon-square"><Code2 size={22} /></span>
        <div>Da ideia à experiência.<small>Desenvolvimento com propósito.</small></div>
        <ArrowUpRight size={18} />
      </div>
      <span className="visual-label">DESIGN + CÓDIGO + SOLUÇÃO</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero wrap" id="inicio">
      <div className="hero-copy">
        <div className="eyebrow"><span className="dot" /> DISPONÍVEL PARA NOVOS PROJETOS</div>
        <h1>
          Ideias que viram<br />código<span>.</span><br />
          <span className="muted">Negócios que<br />ganham presença.</span>
        </h1>
        <p>
          Sou Pedro Henrique, desenvolvedor de software.<br />
          Crio experiências digitais que conectam o seu<br className="desktop" /> negócio a novas possibilidades.
        </p>
        <div className="hero-actions">
          <a className="button hero-primary shine-action" href="#projetos">
            <span>Conheça meu trabalho</span>
            <span className="hero-action-icon"><ArrowUpRight size={18} aria-hidden="true" /></span>
          </a>
          <a className="text-link hero-secondary" href="#sobre">
            <span>Um pouco sobre mim</span><ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <CodeArtwork />
    </section>
  );
}
