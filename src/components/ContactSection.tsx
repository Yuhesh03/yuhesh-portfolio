import { ArrowUpRight, AtSign, Github, MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function ContactSection() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="page-wrap">
        <Reveal><SectionHeading label="06 / CONTACT" title="Have an idea worth building?" description="I'm interested in connecting with developers, researchers, and teams working on useful software, full-stack applications, and AI-driven solutions." centered /></Reveal>
        <Reveal delay={0.1}>
          <div className="contact-panel">
            <div className="contact-panel-glow contact-panel-glow--a" /><div className="contact-panel-glow contact-panel-glow--b" />
            <div className="contact-panel-content"><span className="contact-kicker"><Sparkles size={14} /> OPEN TO GOOD CONVERSATIONS</span><h3>Let's make<br /><em>something matter.</em></h3><p>Have a project idea, a research question, or an opportunity to discuss? Drop me a line.</p><a className="contact-primary" href="mailto:yuheshraja2005@gmail.com">Let's talk <ArrowUpRight size={18} /></a><div className="contact-panel-caption"><span className="contact-caption-dot" /> Usually happy to talk tech, projects &amp; ideas</div></div>
            <div className="contact-art" aria-hidden="true"><div className="contact-art-orbit contact-art-orbit--one" /><div className="contact-art-orbit contact-art-orbit--two" /><div className="contact-art-orbit contact-art-orbit--three" /><div className="contact-message-card"><div className="message-card-top"><span /><span /><span /></div><div className="message-bubble message-bubble--left"><i /><i /></div><div className="message-bubble message-bubble--right"><i /><i /><i /></div><div className="message-bubble message-bubble--left short"><i /></div><div className="message-input"><span>Let's build...</span><span className="message-send"><ArrowUpRight size={13} /></span></div></div><div className="contact-art-star">✳</div><div className="contact-art-cross">✣</div><div className="contact-art-node"><span /><span /><span /></div></div>
          </div>
        </Reveal>
        <div className="contact-details">
          <a className="contact-detail contact-detail--email" href="mailto:yuheshraja2005@gmail.com"><span className="contact-detail-icon"><AtSign size={18} /></span><span><small>EMAIL ME</small><strong>yuheshraja2005@gmail.com</strong></span><ArrowUpRight size={15} className="contact-detail-arrow" /></a>
          <a className="contact-detail contact-detail--phone" href="tel:+919363131320"><span className="contact-detail-icon"><Phone size={18} /></span><span><small>GIVE ME A CALL</small><strong>+91-9363131320</strong></span><ArrowUpRight size={15} className="contact-detail-arrow" /></a>
          <div className="contact-detail contact-detail--location"><span className="contact-detail-icon"><MapPin size={18} /></span><span><small>BASED IN</small><strong>Madurai, Tamil Nadu, India</strong></span></div>
          <a className="contact-detail contact-detail--github" href="https://github.com/Yuhesh03" target="_blank" rel="noreferrer"><span className="contact-detail-icon"><Github size={18} /></span><span><small>CODE &amp; PROJECTS</small><strong>github.com/Yuhesh03</strong></span><ArrowUpRight size={15} className="contact-detail-arrow" /></a>
        </div>
        <div className="contact-signoff"><MessageCircle size={16} /><span>Thoughtful ideas welcome. Spam not so much.</span></div>
      </div>
    </section>
  )
}
