import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
import DevelopmentApproach from './components/DevelopmentApproach'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Update browser UI theme metadata without introducing a separate runtime dependency.
    document.documentElement.style.scrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <DevelopmentApproach />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
