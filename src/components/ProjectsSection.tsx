import { ArrowUpRight, BarChart3, BrainCircuit, Check, ChevronDown, CircleUserRound, Code2, Github, Layers3, ShoppingBag, ShoppingCart, SlidersHorizontal, Users, Waves } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

type Project = {
  number: string
  category: string
  title: string
  description: string
  technologies: string[]
  theme: 'employee' | 'store' | 'eeg'
}

const projects: Project[] = [
  {
    number: '01', category: 'FULL STACK DEVELOPMENT', title: 'Employee Management System',
    description: 'Developed a full-stack application for managing employee records, implementing CRUD operations, JWT-based authentication, and Axios communication between frontend and backend APIs.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Axios'], theme: 'employee',
  },
  {
    number: '02', category: 'WEB APPLICATION', title: 'E-Commerce Web Application',
    description: 'Developed an e-commerce application featuring product browsing, shopping cart functionality, user login, and product management. Used Express.js routes and Mongoose for database operations.',
    technologies: ['React.js', 'Bootstrap', 'Express.js', 'MongoDB', 'Mongoose'], theme: 'store',
  },
  {
    number: '03', category: 'AI / DEEP LEARNING', title: 'Brain Epileptic Seizure Detection Using Deep Learning',
    description: 'Explored CNN and LSTM architectures for identifying seizure-related patterns in EEG signals, with the aim of supporting automated seizure detection and patient monitoring.',
    technologies: ['Python', 'CNN', 'LSTM', 'EEG', 'Deep Learning'], theme: 'eeg',
  },
]

function EmployeePreview() {
  return <div className="project-preview employee-preview" aria-label="Illustrative employee management dashboard preview" role="img">
    <div className="mock-sidebar"><div className="mock-sidebar-logo">YR</div><span className="mock-sidebar-item active"><Layers3 size={12} /></span><span className="mock-sidebar-item"><BarChart3 size={12} /></span><span className="mock-sidebar-item"><Users size={12} /></span><span className="mock-sidebar-item"><SlidersHorizontal size={12} /></span><div className="mock-sidebar-bottom"><CircleUserRound size={15} /></div></div>
    <div className="employee-screen"><div className="mock-screen-top"><span>Workspace / People</span><div className="mock-avatar">YR</div></div><div className="employee-header"><div><small>MONDAY, OCTOBER 12</small><strong>Team overview</strong></div><span className="mock-add-button">+ Add member</span></div><div className="employee-metrics"><div><small>Total team</small><b>24</b><span className="metric-chip">+4 this month</span></div><div><small>Departments</small><b>06</b><span className="metric-mini-line" /></div><div><small>On project</small><b>18</b><span className="metric-bars"><i /><i /><i /><i /></span></div></div><div className="employee-table-head"><span>Team member</span><span>Department</span><span>Status</span></div>{[['AR','Alex Reed','Engineering','Active'],['MK','Mia Kim','Design','Active'],['JS','Jordan Smith','Product','Review']].map((row, i) => <div className="employee-row" key={row[0]}><span className={`employee-avatar employee-avatar--${i}`}>{row[0]}</span><strong>{row[1]}</strong><small>{row[2]}</small><em className={i === 2 ? 'status-review' : ''}>{row[3]}</em></div>)}</div>
    <div className="preview-float preview-float--auth"><span className="auth-check"><Check size={12} /></span><div><b>JWT Auth</b><small>Session secure</small></div></div>
  </div>
}

function StorePreview() {
  return <div className="project-preview store-preview" aria-label="Illustrative e-commerce storefront preview with product cards" role="img">
    <div className="store-top"><div className="store-logo"><span>○</span> studio<span className="store-logo-dot">.</span></div><div className="store-nav-items"><span>Shop</span><span>Our story</span><span>Journal</span></div><div className="store-cart"><ShoppingCart size={14} /><i>2</i></div></div>
    <div className="store-hero"><div><small>THE EVERYDAY EDIT</small><strong>Small things.<br /><em>Big delight.</em></strong><span className="store-shop-button">Explore collection <ArrowUpRight size={10} /></span></div><div className="store-hero-art"><div className="hero-product product-vase"><span /></div><div className="hero-product product-orb" /><div className="hero-product product-candle"><i /></div><span className="store-sparkle">✳</span></div></div>
    <div className="store-section-line"><strong>Made to make you smile</strong><span>View all <ArrowUpRight size={10} /></span></div>
    <div className="store-products"><div className="store-product"><div className="product-art product-art--one"><span /></div><small>01 / HOME</small><b>Ceramic vase</b><span>₹ 899</span></div><div className="store-product"><div className="product-art product-art--two"><span /></div><small>02 / LIVING</small><b>Soft form lamp</b><span>₹ 1,499</span></div><div className="store-product"><div className="product-art product-art--three"><span /></div><small>03 / OBJECTS</small><b>Daily cup</b><span>₹ 399</span></div></div>
    <div className="store-float-tag"><ShoppingBag size={13} /> Cart updated</div>
  </div>
}

function EEGPreview() {
  return <div className="project-preview eeg-preview" aria-label="Illustrative EEG waveform and neural network research dashboard" role="img">
    <div className="eeg-window-top"><div className="eeg-window-brand"><span className="eeg-brand-icon"><Waves size={12} /></span><span>neuro<span>scope</span></span></div><div className="eeg-window-right"><span>DEMO SIGNAL</span><i /></div></div>
    <div className="eeg-overview"><div><small>EEG SIGNAL EXPLORER</small><strong>Signal patterns</strong></div><span className="eeg-filter"><SlidersHorizontal size={12} /> Filter <ChevronDown size={11} /></span></div>
    <div className="signal-card"><div className="signal-card-title"><span><i className="signal-dot" /> Channel Fp1</span><small>Illustrative data</small></div><svg viewBox="0 0 540 108" preserveAspectRatio="none" aria-hidden="true"><defs><pattern id="eegGrid" width="27" height="18" patternUnits="userSpaceOnUse"><path d="M 27 0 L 0 0 0 18" fill="none" stroke="#d9d3f4" strokeWidth=".75"/></pattern><linearGradient id="eegWave" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#45c9f5"/><stop offset=".5" stopColor="#8e55ff"/><stop offset="1" stopColor="#f05caf"/></linearGradient></defs><rect width="540" height="108" fill="url(#eegGrid)"/><path d="M0 55 C8 50 12 57 20 53 S32 51 40 55 S47 63 54 53 S63 50 71 54 S78 61 87 54 S95 51 103 56 S109 44 116 54 S126 62 133 55 S141 19 149 55 S159 95 168 51 S180 49 187 56 S200 60 209 53 S220 48 226 56 S236 64 245 54 S256 47 265 53 S275 59 282 55 S290 36 297 55 S309 68 319 53 S331 48 340 55 S350 62 359 53 S370 45 378 54 S387 66 396 54 S408 48 416 55 S429 62 437 53 S447 43 455 55 S464 61 474 54 S483 50 490 54 S503 65 511 54 S527 51 540 55" fill="none" stroke="url(#eegWave)" strokeWidth="2.5" strokeLinecap="round"/></svg><div className="signal-time"><span>00:00</span><span>00:05</span><span>00:10</span><span>00:15</span></div></div>
    <div className="eeg-lower-row"><div className="eeg-info-tile"><span>MODEL EXPLORATION</span><div className="model-flow"><i>CNN</i><b>→</b><i>LSTM</i><b>→</b><i className="model-output">Output</i></div></div><div className="eeg-info-tile eeg-info-tile--purple"><span>NETWORK VIEW</span><div className="neural-mini"><svg viewBox="0 0 110 46" aria-hidden="true"><g stroke="#ad90ff" strokeWidth="1" opacity=".8">{[10,23,36].flatMap(y=>[25,55,85].map(x=><path key={`${x}-${y}`} d={`M 10 ${y} L ${x} 23 M ${x} 23 L 100 ${y}`} />))}</g>{[[10,10],[10,23],[10,36],[40,16],[40,30],[70,10],[70,23],[70,36],[100,10],[100,23],[100,36]].map(([cx,cy], i)=><circle key={i} cx={cx} cy={cy} r="3.5" fill={i%3===0?'#ff6bb5':'#53d2f2'} stroke="#fff" strokeWidth="1" />)}</svg></div></div></div>
    <div className="eeg-float-chip"><BrainCircuit size={14} /> Research exploration</div>
  </div>
}

function ProjectVisual({ theme }: { theme: Project['theme'] }) {
  if (theme === 'employee') return <EmployeePreview />
  if (theme === 'store') return <StorePreview />
  return <EEGPreview />
}

export default function ProjectsSection() {
  return (
    <section className="projects-section section-pad" id="projects">
      <div className="page-wrap">
        <Reveal><SectionHeading label="04 / SELECTED PROJECTS" title="Ideas turned into applications." description="A selection of full-stack applications and AI-focused explorations that reflect my interest in practical software development and intelligent systems." /></Reveal>
        <div className="projects-list">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.06}>
              <article className={`project-card project-card--${project.theme}`}>
                <div className="project-card-top"><span className="project-category"><span />{project.category}</span><span className="project-number">{project.number}</span></div>
                <div className="project-card-layout">
                  <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="project-tech">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-card-footer"><span className="project-status"><span /> Concept &amp; implementation</span><span className="project-type-icon">{project.theme === 'employee' ? <Users size={17} /> : project.theme === 'store' ? <ShoppingBag size={17} /> : <BrainCircuit size={18} />}</span></div></div>
                  <div className="project-visual-wrap"><ProjectVisual theme={project.theme} /><div className="project-visual-label">{project.theme === 'employee' ? 'TEAM WORKSPACE' : project.theme === 'store' ? 'STOREFRONT STUDY' : 'SIGNAL EXPLORATION'} <ArrowUpRight size={13} /></div></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal><div className="projects-note"><span className="projects-note-icon"><Code2 size={18} /></span><p>Want to explore the code behind my work?</p><a href="https://github.com/Yuhesh03" target="_blank" rel="noreferrer">Visit GitHub <Github size={15} /><ArrowUpRight size={14} /></a></div></Reveal>
      </div>
    </section>
  )
}
