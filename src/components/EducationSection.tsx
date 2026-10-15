import { ArrowUpRight, BookOpen, GraduationCap, School } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const education = [
  { year: '2023 — 2027', label: 'UNDERGRADUATE', title: 'Bachelor of Computer Science Engineering', school: 'Paavai Engineering College', detail: 'Expected graduation · 2027', result: 'CGPA 7.51 / 10', tone: 'education-blue', icon: GraduationCap },
  { year: '2023', label: 'HIGHER SECONDARY', title: 'Higher Secondary Certificate', school: 'Mahatma Montessori CBSE', detail: 'Completed in 2023', result: '67%', tone: 'education-coral', icon: BookOpen },
  { year: '2021', label: 'SECONDARY SCHOOL', title: 'Secondary School Leaving Certificate', school: 'Mahatma Montessori CBSE', detail: 'Completed in 2021', result: '78%', tone: 'education-mint', icon: School },
]

export default function EducationSection() {
  return (
    <section className="education-section section-pad" id="education">
      <div className="page-wrap">
        <Reveal><SectionHeading label="05 / EDUCATION" title="Building the foundation." description="The academic path behind my interest in software, systems, and intelligent computing." /></Reveal>
        <div className="education-layout">
          <div className="education-timeline" aria-label="Education timeline">
            <span className="timeline-rail" aria-hidden="true" />
            {education.map(({ year, label, title, school, detail, result, tone, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.1} className={`education-entry ${tone}`}>
                <span className="education-marker"><Icon size={17} /></span>
                <article className="education-card">
                  <div className="education-card-top"><span className="education-label">{label}</span><span className="education-year">{year}</span></div>
                  <h3>{title}</h3><p className="education-school">{school}</p>
                  <div className="education-card-bottom"><span>{detail}</span><strong>{result}</strong></div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="education-aside" delay={0.22}>
            <div className="education-aside-art"><div className="edu-circle edu-circle--one" /><div className="edu-circle edu-circle--two" /><div className="edu-book book-one" /><div className="edu-book book-two" /><div className="edu-book book-three" /><div className="edu-star">✳</div><div className="edu-orbit" /></div>
            <div className="education-aside-copy"><span className="aside-eyebrow">THE LEARNING MINDSET</span><h3>Always in progress.</h3><p>Learning is a continuous loop: study a concept, try it in a project, and keep refining the understanding.</p><a className="text-link" href="#approach">How I build <ArrowUpRight size={15} /></a></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
