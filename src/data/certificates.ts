export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  duration: string;
  kind: 'Curso' | 'Evento' | 'Certificado';
  image: string;
  documentUrl: string;
  verificationUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Carreira Desenvolvimento Back-End Java: boas-vindas e primeiros passos',
    issuer: 'Alura',
    date: '15/09/2025',
    duration: '1 hora',
    kind: 'Curso',
    image: '/certificates/alura-java-backend.webp',
    documentUrl: '/certificates/alura-java-backend.pdf',
  },
  {
    title: 'Conhecendo a Linguagem de Programação Python',
    issuer: 'DIO',
    date: '27/10/2025',
    duration: '2 horas',
    kind: 'Curso',
    image: '/certificates/dio-python.webp',
    documentUrl: '/certificates/dio-python.pdf',
  },
  {
    title: 'Pensamento computacional: fundamentos da computação e lógica de programação',
    issuer: 'Alura',
    date: '17/09/2025',
    duration: '12 horas',
    kind: 'Curso',
    image: '/certificates/alura-pensamento-computacional.webp',
    documentUrl: '/certificates/alura-pensamento-computacional.pdf',
  },
  {
    title: 'O que precisamos saber sobre a Lei LGPD',
    issuer: 'Academia de Conhecimento da Intelbras',
    date: '26/06/2025',
    duration: '40 minutos',
    kind: 'Curso',
    image: '/certificates/intelbras-lgpd.webp',
    documentUrl: '/certificates/intelbras-lgpd.pdf',
  },
];
