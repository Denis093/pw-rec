import PageIntro from '../components/PageIntro.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

// Página /projetos: grade com todos os projetos do escritório.
// Cada card leva ao detalhe do projeto em /projetos/:id.
export default function Projects() {
  return (
    <>
      <PageIntro kicker="Our" title="Projects" crumbs={[{ label: 'Projects' }]} />
      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
