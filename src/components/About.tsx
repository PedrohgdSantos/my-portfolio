import { ArrowUpRight, Code2, Monitor } from 'lucide-react';
import { LogoMark } from './Logo';
import { Certificates } from './Certificates';
import { CodeArtwork } from './CodeArtwork';

export function About() {
  return (
    <section className="about section" id="sobre">
      <div className="wrap about-grid">
        <div className="about-code-art">
          <div className="about-code-signature"><LogoMark /><span>DA IDEIA AO CÓDIGO</span></div>
          <CodeArtwork />
        </div>
        <div className="about-content">
          <div className="eyebrow">02 / QUEM ESTÁ POR TRÁS DO CÓDIGO</div>
          <h2>Prazer, Pedro<span>.</span><br /><em><span>Desenvolvedor</span> <span>Full Stack.</span></em></h2>
          <h3 className="about-statement">Ideias que viram código<span>.</span><br />Negócios que ganham presença.</h3>
          <p className="about-intro">
            Sou Pedro Henrique, desenvolvedor de software. Crio experiências digitais que conectam o seu negócio a novas possibilidades.
          </p>
          <p>
            Estudante de Sistemas de Informação na Impacta Tecnologia, com formação prevista para 2029.
            Estou construindo minha trajetória no desenvolvimento de software, unindo conhecimento técnico
            à vontade de resolver problemas reais.
          </p>
          <p>
            Minha experiência com suporte de TI e atendimento ao público me ensinou a ouvir, entender
            necessidades e simplificar soluções. É esse olhar que levo para cada projeto.
          </p>
          <div className="about-facts">
            <div><Code2 /><span>Desenvolvimento<small>Java · React · Angular · MySQL</small></span></div>
            <div><Monitor /><span>Olhar para o usuário<small>Clareza em cada experiência</small></span></div>
          </div>
          <a className="about-project-link shine-action" href="#projetos">Conheça meu trabalho <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
      <Certificates />
    </section>
  );
}
