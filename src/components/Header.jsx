import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <a className="brand" href="#home">
        <span className="brand-icon"><i className="fa-solid fa-car-side"></i></span>
        <span>Car Consórcios</span>
      </a>

      <button className="menu-toggle" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((prev) => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a>
        <a href="#vantagens" onClick={() => setMenuOpen(false)}>Vantagens</a>
        <a href="#clientes" onClick={() => setMenuOpen(false)}>Clientes</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>

      <a className="nav-cta" href="#contato">Quero simular</a>
    </header>
  );
}

export default Header;
