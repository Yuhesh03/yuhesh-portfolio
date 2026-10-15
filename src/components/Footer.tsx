import { ArrowUpRight, Github } from 'lucide-react'

const footerLinks = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact']] as const

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-wrap">
        <div className="footer-main">
          <a href="#home" className="footer-brand" aria-label="Back to Yuhesh R home"><span className="brand-mark">YR<span /></span><span><strong>Yuhesh R<span className="brand-period">.</span></strong><small>Full Stack Developer · Python · AI/ML</small></span></a>
          <nav className="footer-nav" aria-label="Footer navigation">{footerLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
          <a className="footer-github" href="https://github.com/Yuhesh03" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Yuhesh R. All rights reserved.</span><span className="footer-motto">Designed with curiosity. Built with care. <i>✳</i></span><a href="#home" className="back-to-top">Back to top ↑</a></div>
      </div>
    </footer>
  )
}
