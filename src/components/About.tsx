import { ArrowUpRight, Code2, Monitor } from 'lucide-react';
import { LogoMark } from './Logo';
import { Certificates } from './Certificates';

export function About() {
  return (
    <section className="about section" id="sobre">
      <div className="wrap about-grid">
        <div className="about-art">
          <div className="about-signature"><LogoMark /></div>
          <div className="about-caption"><span>APRENDIZADO CONTÍNUO</span><ArrowUpRight /></div>
          <div className="vertical-text">PESSOAS. IDEIAS. TECNOLOGIA.</div>
        </div>
        <div>
          <div className="eyebrow">02 / QUEM ESTÁ POR TRÁS DO CÓDIGO</div>
          <h2>Prazer, Pedro<span>.</span><br /><em><span>Desenvolvedor</span> <span>Full Stack.</span></em></h2>
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
        </div>
      </div>
      <Certificates />
    </section>
  );
}
