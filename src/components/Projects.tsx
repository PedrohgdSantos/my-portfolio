import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { Mockup } from './Mockup';

const filters = ['Todos', 'Negócios locais', 'Projetos pessoais'] as const;
type ProjectFilter = typeof filters[number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        onClick={event => event.stopPropagation()}
        onKeyDown={event => { if (event.key === 'Escape') onClose(); }}
      >
        <button className="close" autoFocus onClick={onClose} aria-label="Fechar detalhes"><X /></button>
        <Mockup kind={project.kind} />
        <div className="eyebrow">PRÉVIA VISUAL ILUSTRATIVA</div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>
          {project.kind === 'store'
            ? 'Modelo conceitual para apresentar uma possibilidade de projeto para o comércio local.'
            : 'Apresentação de projeto em desenvolvimento. Os links da versão publicada e do código serão adicionados após a confirmação dos endereços.'}
        </p>
        <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <button
          className="button shine-action"
          onClick={() => { onClose(); location.hash = 'contato'; }}
        >
          Quero um projeto assim <ArrowUpRight size={18} />
        </button>
      </section>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('Todos');
  const [selected, setSelected] = useState<Project | null>(null);
  const visibleProjects = projects.filter(project => filter === 'Todos' || project.type === filter);

  return (
    <>
      <section className="section wrap" id="projetos">
        <div className="section-heading">
          <div>
            <div className="eyebrow">01 / TRABALHOS SELECIONADOS</div>
            <h2>Do conceito à <em>prática.</em></h2>
          </div>
          <p>Projetos pessoais e soluções pensadas<br />para negócios de verdade.</p>
        </div>
        <div className="filters" role="group" aria-label="Filtrar projetos">
          {filters.map(item => (
            <button
              className={'shine-action' + (filter === item ? ' active' : '')}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              key={item}
            >
              {item}{item === 'Todos' && <span>03</span>}
            </button>
          ))}
        </div>
        <div className="projects">
          {visibleProjects.map(project => (
            <article className="project" key={project.name}>
              <button
                className="preview"
                onClick={() => setSelected(project)}
                aria-label={'Conhecer ' + project.name}
              >
                <Mockup kind={project.kind} />
                <span className="preview-arrow"><ArrowUpRight /></span>
              </button>
              <div className="project-category">
                {project.category}<span>0{projects.indexOf(project) + 1}</span>
              </div>
              <button className="project-title" onClick={() => setSelected(project)}>
                {project.name}<ArrowUpRight size={22} />
              </button>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
