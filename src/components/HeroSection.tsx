import { ArrowDown, ArrowRight, ArrowUpRight, Github, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

function HeroArtwork() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="hero-art" aria-label="Abstract illustration of a developer workspace with code, connected nodes, and technology labels" role="img">
      <div className="art-glow art-glow--blue" />
      <div className="art-glow art-glow--pink" />
      <div className="orbit orbit--one" />
      <div className="orbit orbit--two" />
      <div className="orbit orbit--three" />
      <motion.div className="hero-sphere sphere--violet" animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="hero-sphere sphere--orange" animate={reduceMotion ? undefined : { y: [0, 8, 0], x: [0, 4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
      <div className="art-star star--one">✳</div><div className="art-star star--two">✦</div>
      <motion.div className="code-float" animate={reduceMotion ? undefined : { y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="code-float-top"><span /><span /><span /><small>app.tsx</small></div>
        <div className="code-lines"><i /><b /><em /><i className="short" /><b className="mid" /><em className="long" /></div>
      </motion.div>
      <motion.div className="stack-tag stack-tag--react" animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [-3, 0, -3] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}><span className="tag-orbit">◉</span> React.js</motion.div>
      <motion.div className="stack-tag stack-tag--python" animate={reduceMotion ? undefined : { y: [0, 6, 0], rotate: [2, 0, 2] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}><span className="python-glyph">Py</span> Python</motion.div>
      <motion.div className="stack-tag stack-tag--gnn" animate={reduceMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 4.3, repeat: Infinity, ease: 'easeInOut' }}><span className="gnn-points">⌘</span> GNN / AI</motion.div>
      <motion.div className="browser-window" initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}>
        <div className="browser-top"><div className="browser-dots"><span /><span /><span /></div><div className="browser-url"><span /> yuhesh.dev / workspace</div><div className="browser-menu">···</div></div>
        <div className="browser-content">
          <div className="browser-sidebar"><div className="sidebar-logo">YR</div><span className="sidebar-active" /><span /><span /><span /><div className="sidebar-bottom" /></div>
          <div className="browser-main">
            <div className="browser-greeting"><div><span className="mini-label">CREATIVE MODE</span><h3>Make something<br /><strong>meaningful.</strong></h3></div><div className="sparkle-tile"><Sparkles size={22} /></div></div>
            <div className="browser-stats"><div className="stat-tile stat-tile--blue"><span>Build</span><strong>01</strong><i>↗</i></div><div className="stat-tile stat-tile--pink"><span>Explore</span><strong>02</strong><i>✳</i></div><div className="stat-tile stat-tile--lime"><span>Refine</span><strong>03</strong><i>⌁</i></div></div>
            <div className="browser-lower"><div className="lower-lines"><span /><span /><span /></div><div className="mini-chart"><svg viewBox="0 0 140 48" role="presentation" aria-hidden="true"><path d="M2 38 C16 34 16 9 31 21 S49 42 63 21 S84 4 99 20 S122 36 138 5" fill="none" stroke="#8b54ff" strokeWidth="3" strokeLinecap="round" /><path d="M2 38 C16 34 16 9 31 21 S49 42 63 21 S84 4 99 20 S122 36 138 5 L138 48 L2 48 Z" fill="url(#chartFade)" opacity=".25"/><defs><linearGradient id="chartFade" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#8b54ff"/><stop offset="1" stopColor="#8b54ff" stopOpacity="0"/></linearGradient></defs></svg></div></div>
          </div>
        </div>
      </motion.div>
      <div className="node-network" aria-hidden="true"><svg viewBox="0 0 180 128"><path d="M20 72 L58 28 L104 47 L149 14 M58 28 L72 96 L130 105 L149 14 M104 47 L130 105 M20 72 L72 96" /><circle cx="20" cy="72" r="6"/><circle cx="58" cy="28" r="7"/><circle cx="104" cy="47" r="9"/><circle cx="149" cy="14" r="5"/><circle cx="72" cy="96" r="5"/><circle cx="130" cy="105" r="7"/></svg></div>
      <div className="art-caption"><span className="caption-dot" /> Code with curiosity <span>✦</span></div>
    </div>
  )
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="hero-section" id="home">
      <div className="hero-background-grid" aria-hidden="true" />
      <div className="hero-container page-wrap">
        <div className="hero-copy">
          <motion.div className="availability-pill" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><span className="availability-dot" /> COMPUTER SCIENCE ENGINEERING STUDENT</motion.div>
          <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>Building digital<br />experiences with<br /><span className="gradient-text">code &amp; intelligence.</span></motion.h1>
          <motion.p className="hero-intro" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.23 }}>I'm Yuhesh R, a full-stack developer exploring web technologies, backend engineering, and AI-driven applications. I enjoy building practical software and exploring how intelligent systems can solve real problems.</motion.p>
          <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.36 }}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="#contact">Let's connect <ArrowUpRight size={17} /></a>
          </motion.div>
          <motion.div className="hero-meta" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <span className="meta-location"><span className="location-pin" /> Madurai, Tamil Nadu</span>
            <span className="meta-divider" />
            <span className="meta-stack">React.js <i>·</i> Node.js <i>·</i> Python <i>·</i> AI/ML</span>
          </motion.div>
          <a className="hero-github" href="https://github.com/Yuhesh03" target="_blank" rel="noreferrer"><Github size={16} /> Explore my GitHub <ArrowUpRight size={13} /></a>
        </div>
        <HeroArtwork />
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><span className="scroll-cue-icon"><ArrowDown size={15} /></span></a>
      <div className="hero-bottom-swoosh" aria-hidden="true" />
    </section>
  )
}
