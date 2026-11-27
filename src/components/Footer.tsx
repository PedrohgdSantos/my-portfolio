import { Logo } from './Logo';
import { GitHubBrandIcon, LinkedInBrandIcon } from './BrandIcons';

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
          <a className="footer-github" href="https://github.com/PedrohgdSantos" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Pedro Henrique" title="GitHub">
            <GitHubBrandIcon />
          </a>
          <a className="footer-linkedin" href="https://www.linkedin.com/in/pedro-henrique-s-b75396298/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Pedro Henrique" title="LinkedIn">
            <LinkedInBrandIcon />
          </a>
        </nav>
        <a className="footer-back-top" href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
