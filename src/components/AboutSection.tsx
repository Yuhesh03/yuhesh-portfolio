import { ArrowUpRight, BrainCircuit, Code2, Database, GitBranch, Layers3, Server, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const highlights = [
  { icon: Code2, number: '01', title: 'Web applications', text: 'Building responsive interfaces and practical full-stack workflows.', tone: 'blue' },
  { icon: Server, number: '02', title: 'Backend engineering', text: 'Working with APIs, authentication, and database operations.', tone: 'orange' },
  { icon: BrainCircuit, number: '03', title: 'AI exploration', text: 'Exploring deep learning, graph-based learning, and EEG analysis.', tone: 'pink' },
]

export default function AboutSection() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="page-wrap">
        <Reveal><SectionHeading label="01 / ABOUT ME" title="Curious by nature. Building with purpose." /></Reveal>
        <div className="about-layout">
          <Reveal className="about-story" delay={0.08}>
            <p className="about-lead">I like making the pieces of technology work together — from an interface someone enjoys using to the logic and data moving behind it.</p>
            <p>I'm a Computer Science Engineering student at Paavai Engineering College, interested in full-stack development, backend engineering, databases, and APIs. I enjoy turning ideas into useful applications and understanding the engineering decisions that make them work.</p>
            <p>Alongside software development, I explore research-oriented AI work, including Graph Neural Networks and deep learning approaches for EEG analysis. I'm drawn to the space where dependable software meets intelligent systems.</p>
            <a className="text-link" href="#projects">See what I've been building <ArrowUpRight size={16} /></a>
            <div className="about-mini-tags"><span><Layers3 size={14} /> Full-stack thinking</span><span><GitBranch size={14} /> Curious iteration</span><span><Sparkles size={14} /> AI exploration</span></div>
          </Reveal>
          <Reveal className="about-visual-wrap" delay={0.16}>
            <div className="about-visual">
              <div className="about-visual-pattern" />
              <div className="about-visual-sticker sticker-code"><Code2 size={20} /><span>code</span></div>
              <div className="about-visual-sticker sticker-data"><Database size={19} /><span>data</span></div>
              <div className="about-orbit-ring ring-a" /><div className="about-orbit-ring ring-b" />
              <div className="about-core"><div className="core-monogram">YR<span>.</span></div><p>curiosity → creation</p></div>
              <div className="about-visual-note"><span className="note-mark">✳</span><div><strong>Learn. Build. Repeat.</strong><small>Always exploring what's next.</small></div></div>
              <div className="about-floating-square square-a" /><div className="about-floating-square square-b" />
            </div>
          </Reveal>
        </div>
        <div className="feature-grid">
          {highlights.map(({ icon: Icon, number, title, text, tone }, index) => (
            <Reveal key={title} delay={index * 0.08} className={`feature-item feature-item--${tone}`}>
              <div className="feature-top"><span className="feature-icon"><Icon size={21} strokeWidth={1.9} /></span><span className="feature-number">{number}</span></div>
              <h3>{title}</h3><p>{text}</p>
              <span className="feature-accent" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
        <div className="about-bottom-line"><span /><p>Building a broad toolkit, one thoughtful project at a time.</p><span /></div>
      </div>
    </section>
  )
}
