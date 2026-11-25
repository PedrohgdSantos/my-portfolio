import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer wrap">
      <Logo />
      <span>© {new Date().getFullYear()} Pedro Henrique</span>
      <span>Feito com intenção. Desenvolvido com cuidado.</span>
      <a href="#inicio">Voltar ao topo ↑</a>
    </footer>
  );
}
