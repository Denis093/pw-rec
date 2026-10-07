import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { navLinks } from '../data/site.js'

// Cabeçalho fixo no topo: logo à esquerda e menu de navegação à direita.
// No mobile, o menu vira um "hambúrguer" que abre/fecha a navegação.
export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Fecha o menu mobile sempre que a rota muda.
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={`header ${open ? 'header--open' : ''}`}>
      <div className="container header__grid">
        <Link to="/" className="header__logo" aria-label="Digital Project — home">
          <Logo />
        </Link>

        <button
          className="header__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="header__nav" aria-label="Main">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
