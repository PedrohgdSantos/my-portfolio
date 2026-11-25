export type Project = {
  name: string;
  type: 'Negócios locais' | 'Projetos pessoais';
  category: string;
  description: string;
  tags: string[];
  kind: 'barber' | 'offers' | 'store';
};

export const projects: Project[] = [
  {
    name: 'Araujo Barber',
    type: 'Negócios locais',
    category: 'Landing page · Barbearia',
    description: 'Uma presença digital que apresenta serviços, valoriza a identidade da barbearia e facilita o próximo contato.',
    tags: ['React', 'TypeScript', 'CSS'],
    kind: 'barber',
  },
  {
    name: 'AchouOfertas',
    type: 'Projetos pessoais',
    category: 'Catálogo · Ofertas',
    description: 'Um projeto de descoberta de ofertas, com organização por categorias e foco em uma navegação simples.',
    tags: ['Interface web', 'Responsivo'],
    kind: 'offers',
  },
  {
    name: 'Seu próximo negócio online',
    type: 'Negócios locais',
    category: 'Modelo demonstrativo · Comércio',
    description: 'Uma ideia de vitrine digital para apresentar produtos e aproximar pequenos negócios de seus clientes.',
    tags: ['Vitrine digital', 'Mobile first'],
    kind: 'store',
  },
];
