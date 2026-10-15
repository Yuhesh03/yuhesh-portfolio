import { ArrowRight, Compass, Hammer, RefreshCw } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const steps = [
  { number: '01', title: 'Understand', copy: 'Break down the problem, clarify the requirements, and identify suitable tools.', icon: Compass, tone: 'approach-blue', word: 'LISTEN' },
  { number: '02', title: 'Build', copy: 'Develop the interface, backend logic, APIs, and data workflows.', icon: Hammer, tone: 'approach-pink', word: 'CREATE' },
  { number: '03', title: 'Refine', copy: 'Test functionality, improve usability, and iterate toward a more reliable application.', icon: RefreshCw, tone: 'approach-orange', word: 'IMPROVE' },
]

export default function DevelopmentApproach() {
  return (
    <section className="approach-section section-pad" id="approach">
      <div className="page-wrap">
        <Reveal><SectionHeading label="MY APPROACH" title="From concept to working software." description="A practical loop that keeps the problem, the implementation, and the people using it in view." centered /></Reveal>
        <div className="approach-flow" aria-label="Three stages of a software development approach">
          <div className="approach-connector" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /></div>
          {steps.map(({ number, title, copy, icon: Icon, tone, word }, index) => (
            <Reveal key={title} delay={index * 0.11} className={`approach-card ${tone}`}>
              <div className="approach-card-top"><span>{number}</span><span className="approach-icon"><Icon size={23} /></span></div>
              <div className="approach-word">{word}</div><h3>{title}</h3><p>{copy}</p>
              <div className="approach-card-foot"><span className="approach-foot-line" /><span>{index === 0 ? 'Find the signal' : index === 1 ? 'Make it real' : 'Make it better'}</span></div>
              {index < 2 && <div className="approach-arrow"><ArrowRight size={18} /></div>}
            </Reveal>
          ))}
        </div>
        <div className="approach-note"><span>↳</span> Every project is different; the process adapts to its needs.</div>
      </div>
    </section>
  )
}
