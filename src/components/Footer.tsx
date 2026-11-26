import { Github, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer wrap">
      <Logo />
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Pedro Henrique</span>
        <span>Feito com intenção. Desenvolvido com cuidado.</span>
      </div>
      <div className="footer-actions">
        <nav className="footer-social" aria-label="Redes sociais">
          <a href="https://github.com/PedrohgdSantos" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Pedro Henrique" title="GitHub">
            <Github size={20} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/pedro-henrique-s-b75396298/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Pedro Henrique" title="LinkedIn">
            <Linkedin size={19} aria-hidden="true" />
          </a>
        </nav>
        <a className="footer-back-top" href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
