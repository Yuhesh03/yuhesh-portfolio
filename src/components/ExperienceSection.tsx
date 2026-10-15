import { ArrowUpRight, Atom, Network, Orbit } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function MolecularArt() {
  return (
    <div className="molecular-art" aria-label="Illustrative molecular network representing graph-based protein structure research" role="img">
      <div className="molecule-glow" />
      <svg className="molecule-lines" viewBox="0 0 500 360" aria-hidden="true">
        <g fill="none" strokeLinecap="round">
          <path d="M57 171 C103 93 146 80 190 119 S258 213 318 157 S396 99 441 141" stroke="#72c9ff" strokeWidth="2.2" />
          <path d="M92 269 C141 224 167 184 190 119 S267 66 292 109 S364 229 412 242" stroke="#9d7cff" strokeWidth="2" />
          <path d="M57 171 C110 210 131 268 92 269 M190 119 C220 151 228 197 253 222 S351 289 412 242 M318 157 L292 109 L441 141" stroke="#d7d0ff" strokeWidth="1.8" strokeDasharray="4 7" />
          <path d="M57 171 Q165 310 253 222 T441 141" stroke="#ff73b5" strokeWidth="1.6" opacity=".7" />
        </g>
        {[[57,171,7],[190,119,9],[318,157,10],[441,141,7],[92,269,6],[292,109,8],[412,242,9],[253,222,6],[139,207,5],[369,198,5]].map(([cx,cy,r], i) => <g key={i}><circle cx={cx} cy={cy} r={r + 5} fill={i % 3 === 0 ? '#ff70b8' : '#69d5ff'} opacity=".12"/><circle cx={cx} cy={cy} r={r} fill={i % 3 === 0 ? '#ff70b8' : i % 3 === 1 ? '#a17aff' : '#55c9ff'} stroke="#fff" strokeOpacity=".7" strokeWidth="1.5" /></g>)}
      </svg>
      <div className="molecule-label molecule-label--top"><Network size={15} /> Graph representation</div>
      <div className="molecule-label molecule-label--bottom"><Atom size={16} /> Protein dynamics</div>
      <div className="molecule-orbit orbit-x" /><div className="molecule-orbit orbit-y" />
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section className="experience-section section-pad" id="experience">
      <div className="page-wrap">
        <Reveal><SectionHeading label="03 / EXPERIENCE" title="Research meets engineering." description="A research-oriented internship experience exploring how graph-based learning can represent complex biological structures." /></Reveal>
        <Reveal delay={0.08}>
          <article className="experience-card">
            <div className="experience-left">
              <div className="experience-topline"><span className="experience-kicker"><span className="iisc-mark">I</span> RESEARCH INTERNSHIP</span><span className="experience-period">MAY 2025 <i>—</i> JULY 2025</span></div>
              <h3>Indian Institute of Science <span>(IISc)</span></h3>
              <div className="experience-role">Project Intern <span className="role-dot" /> Research &amp; computational exploration</div>
              <h4>Dynamic Protein Structure Prediction and Analysis Using Graph Neural Networks</h4>
              <div className="experience-details">
                <div className="experience-detail"><span className="detail-icon"><Network size={18} /></span><div><h5>Graph-based structural representation</h5><p>Worked on a deep learning-based project exploring Graph Neural Networks to represent protein structures and model interactions between structural components.</p></div></div>
                <div className="experience-detail"><span className="detail-icon detail-icon--pink"><Orbit size={18} /></span><div><h5>Protein dynamics exploration</h5><p>Investigated graph-based learning approaches for studying protein conformational flexibility and analysing dynamic protein structures for potential biomedical research applications.</p></div></div>
              </div>
              <div className="experience-tags"><span>Graph Neural Networks</span><span>Deep Learning</span><span>Protein Structures</span></div>
            </div>
            <div className="experience-right"><MolecularArt /><div className="research-caption"><span>COMPUTATIONAL BIOLOGY</span><ArrowUpRight size={16} /></div></div>
          </article>
        </Reveal>
        <div className="experience-footnote"><span className="experience-line" />Illustrative visualisation for a research topic — not an experimentally derived structure or result.</div>
      </div>
    </section>
  )
}
