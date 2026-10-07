import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// Layout compartilhado por todas as páginas: Header + conteúdo + Footer.
// A rota atual é renderizada no lugar do <Outlet />.
export default function Layout() {
  const { pathname } = useLocation()

  // Volta ao topo da página a cada troca de rota.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
