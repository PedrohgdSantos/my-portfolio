import { Scissors, Search, ShoppingBag } from 'lucide-react';
import type { Project } from '../data/projects';

type MockupProps = { kind: Project['kind'] };

export function Mockup({ kind }: MockupProps) {
  const title = kind === 'barber' ? 'araujo barber' : kind === 'offers' ? 'achouofertas' : 'sua marca';

  return (
    <div className={'mockup ' + kind}>
      <div className="browserbar"><i /><i /><i /><span>{title}</span></div>
      {kind === 'barber' && (
        <div className="barber-screen">
          <span className="mini-brand"><Scissors size={13} /> ARAUJO BARBER</span>
          <div className="barber-content">
            <small>ESTILO QUE MARCA.</small>
            <h3>Mais que um corte.<br /><em>Sua identidade.</em></h3>
            <span className="mini-button">Conheça a barbearia ↗</span>
          </div>
          <div className="barber-art"><Scissors /><div className="barber-circle" /></div>
          <footer>CORTE & ESTILO <span>BARBA & CUIDADO</span></footer>
        </div>
      )}
      {kind === 'offers' && (
        <div className="offers-screen">
          <b><Search size={14} /> achou<span>ofertas</span></b>
          <div className="search-mini">O que você está procurando? <Search size={12} /></div>
          <h3>Boas ofertas.<br /><span>Grandes descobertas.</span></h3>
          <div className="product-grid">
            {['headphone', 'speaker', 'keyboard'].map((product, index) => (
              <div key={product}>
                <div className={'product ' + product}>{['◉', '▥', '▦'][index]}</div>
                <small>{['Áudio e acessórios', 'Tecnologia', 'Seu setup'][index]}</small>
                <b>{['Explore', 'Descubra', 'Encontre'][index]} ↗</b>
              </div>
            ))}
          </div>
        </div>
      )}
      {kind === 'store' && (
        <div className="store-screen">
          <b>casa & forma <ShoppingBag size={13} /></b>
          <small>OBJETOS COM PROPÓSITO</small>
          <h3>Seu espaço.<br />Seu jeito.</h3>
          <div className="vase one" /><div className="vase two" />
          <span className="mini-button">Explore a coleção ↗</span>
        </div>
      )}
    </div>
  );
}
