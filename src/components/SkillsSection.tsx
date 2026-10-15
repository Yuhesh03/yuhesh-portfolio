import { Braces, BrainCircuit, Code2, Database, GitBranch, Globe2, Server, Terminal } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const skillGroups = [
  { title: 'Languages', subtitle: 'The building blocks', icon: Braces, tone: 'skill-card--peach', chips: ['Python', 'Java', 'JavaScript', 'C'], className: 'skill-card--languages' },
  { title: 'Frontend development', subtitle: 'Interfaces with intent', icon: Globe2, tone: 'skill-card--blue', chips: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'], className: 'skill-card--frontend' },
  { title: 'Backend development', subtitle: 'Logic, routes & services', icon: Server, tone: 'skill-card--mint', chips: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'JWT Authentication'], className: 'skill-card--backend' },
  { title: 'Databases', subtitle: 'Structured and flexible data', icon: Database, tone: 'skill-card--lavender', chips: ['MongoDB', 'Mongoose', 'MySQL'], className: 'skill-card--database' },
  { title: 'AI & machine learning', subtitle: 'Models, patterns & signals', icon: BrainCircuit, tone: 'skill-card--violet', chips: ['Deep Learning', 'Graph Neural Networks', 'CNNs', 'LSTMs', 'EEG Analysis'], className: 'skill-card--ai' },
  { title: 'Tools & fundamentals', subtitle: 'The craft around the code', icon: Terminal, tone: 'skill-card--lime', chips: ['Git / GitHub', 'Axios', 'API Integration', 'OOP', 'DSA', 'CRUD Operations', 'Problem Solving'], className: 'skill-card--tools' },
]

export default function SkillsSection() {
  return (
    <section className="skills-section section-pad" id="skills">
      <div className="page-wrap">
        <Reveal><SectionHeading label="02 / TOOLKIT" title="My stack. My playground." description="A growing toolkit for building useful products — from responsive frontends to backend services and AI experiments." /></Reveal>
        <div className="skills-bento">
          {skillGroups.map(({ title, subtitle, icon: Icon, tone, chips, className }, index) => (
            <Reveal key={title} delay={index * 0.055} className={`skill-card ${tone} ${className}`}>
              <div className="skill-card-heading"><span className="skill-icon"><Icon size={21} strokeWidth={1.9} /></span><span className="skill-card-number">0{index + 1}</span></div>
              <h3>{title}</h3><p>{subtitle}</p>
              <div className="skill-chips">{chips.map(chip => <span className="skill-chip" key={chip}>{chip}</span>)}</div>
              {index === 4 && <div className="skill-node-art" aria-hidden="true"><svg viewBox="0 0 110 74"><path d="M10 37 L34 13 L64 31 L94 8 M34 13 L48 61 L94 57 L64 31"/><circle cx="10" cy="37" r="5"/><circle cx="34" cy="13" r="5"/><circle cx="64" cy="31" r="6"/><circle cx="94" cy="8" r="4"/><circle cx="48" cy="61" r="4"/><circle cx="94" cy="57" r="5"/></svg></div>}
              {index === 0 && <div className="skill-spark" aria-hidden="true">✳</div>}
              {index === 1 && <div className="skill-orb" aria-hidden="true" />}
              {index === 5 && <div className="skill-tools-decoration" aria-hidden="true"><Code2 size={32} /><GitBranch size={23} /></div>}
            </Reveal>
          ))}
        </div>
        <div className="skills-footnote"><span className="footnote-dot" />Skills reflect tools and concepts I've worked with or explored through projects and learning.</div>
      </div>
    </section>
  )
}
