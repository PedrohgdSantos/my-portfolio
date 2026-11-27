import { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Logo } from './Logo';

const links = [
  ['Início', 'inicio'],
  ['Projetos', 'projetos'],
  ['Sobre mim', 'sobre'],
  ['Serviços', 'servicos'],
  ['Contato', 'contato'],
] as const;

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasToggledTheme, setHasToggledTheme] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(
    () => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content', nextTheme === 'light' ? '#f8f5fc' : '#0e0b14',
    );
    try { localStorage.setItem('portfolio-theme', nextTheme); } catch { /* Storage may be unavailable. */ }
    setTheme(nextTheme);
    setHasToggledTheme(true);
  }

  return (
    <header className="header" ref={headerRef}>
      <div className="header-brand" onClickCapture={() => setMenuOpen(false)}>
        <Logo />
      </div>
      <nav id="primary-navigation" className={menuOpen ? 'open' : ''} aria-label="Navegação principal">
        {links.map(([label, id]) => (
          <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          onClick={toggleTheme}
        >
          <span
            key={theme}
            className={'theme-toggle-icon' + (hasToggledTheme ? ' is-entering' : '')}
            aria-hidden="true"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </span>
        </button>
        <button
          className="menu"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="menu-open-icon" aria-hidden="true" />
          <X className="menu-close-icon" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
