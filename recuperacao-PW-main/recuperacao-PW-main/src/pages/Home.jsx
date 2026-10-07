import Hero from '../components/Hero.jsx'
import AboutSection from '../components/AboutSection.jsx'
import MissionSection from '../components/MissionSection.jsx'
import ProjectsMosaic from '../components/ProjectsMosaic.jsx'
import ContactSection from '../components/ContactSection.jsx'

// Página inicial (/): reúne todas as seções da landing page do protótipo.
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MissionSection />
      <ProjectsMosaic />
      <ContactSection />
    </>
  )
}
