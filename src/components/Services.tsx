import { ArrowUpRight, Check, Monitor, ShoppingBag, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Sites & landing pages',
    text: 'Apresente seu negócio, seus serviços e seus diferenciais em uma página feita para gerar interesse.',
    items: ['Design alinhado à sua marca', 'Navegação simples e objetiva', 'Caminho direto para o contato'],
  },
  {
    icon: ShoppingBag,
    title: 'Vitrines digitais',
    text: 'Organize seus produtos ou serviços e deixe seus clientes conhecerem o que você oferece.',
    items: ['Catálogo organizado', 'Apresentação dos produtos', 'Experiência pensada para celular'],
  },
  {
    icon: Smartphone,
    title: 'Soluções sob medida',
    text: 'Tem uma ideia ou um processo que precisa melhorar? Vamos entender o cenário e desenhar a solução.',
    items: ['Entendimento da necessidade', 'Definição do escopo', 'Desenvolvimento por etapas'],
  },
];

export function Services() {
  return (
    <section className="section wrap" id="servicos">
      <div className="section-heading">
        <div>
          <div className="eyebrow">03 / COMO POSSO AJUDAR</div>
          <h2>Seu negócio merece<br /><em>uma boa presença digital.</em></h2>
        </div>
        <p>Da primeira impressão ao próximo contato.<br />Soluções para quem empreende de perto.</p>
      </div>
      <div className="services">
        {services.map(({ icon: Icon, title, text, items }, index) => (
          <article key={title}>
            <div className="service-top"><Icon size={28} /><span>0{index + 1}</span></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <ul>{items.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul>
            <a href="#contato">Vamos tirar do papel <ArrowUpRight size={17} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}
