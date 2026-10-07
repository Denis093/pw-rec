import PageIntro from '../components/PageIntro.jsx'
import AboutSection from '../components/AboutSection.jsx'
import MissionSection from '../components/MissionSection.jsx'
import ProjectsMosaic from '../components/ProjectsMosaic.jsx'

// Página /sobre: versão estendida da seção "About" da home.
export default function About() {
  return (
    <>
      <PageIntro kicker="About" title="Us" crumbs={[{ label: 'About' }]} />
      <AboutSection readMore={false} />
      <MissionSection />
      <ProjectsMosaic />
    </>
  )
}
