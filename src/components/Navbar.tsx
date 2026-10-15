import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell page-wrap" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Yuhesh R home">
          <span className="brand-mark">YR<span /></span>
          <span className="brand-name">Yuhesh R<span className="brand-period">.</span></span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div id="primary-navigation" className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={15} strokeWidth={2.4} /></a>
        </div>
      </nav>
    </header>
  )
}
