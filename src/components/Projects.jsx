import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'Secure Drive',
      status: 'In Development',
      description:
        'A security-focused cloud-based file storage system designed with security as the primary concern. Features robust access control, encrypted storage, and secure file management capabilities.',
      technologies: ['FastAPI', 'PostgreSQL', 'MinIO', 'Vite', 'React'],
      githubUrl: 'https://github.com/Ayman-Abdulgalil/cloud-storage',
    },
    {
      title: 'CUIMS Scraper',
      status: 'Reworking',
      description:
        "Automated web scraper for Chandigarh University's student portal. Handles authentication, CAPTCHA solving via OCR, and extracts student information into structured JSON format.",
      technologies: ['Python', 'Selenium', 'Pytesseract', 'OCR'],
      githubUrl: 'https://github.com/Ayman-Abdulgalil/CUIMS-Scraper',
    },
    {
      title: 'HIBP Wrapper',
      status: 'Completed',
      description:
        'Intuitive GUI wrapper for the Have I Been Pwned API. Provides a user-friendly interface for checking compromised credentials and data breaches with clean data visualization.',
      technologies: ['Rust', 'Slint', 'API Integration'],
      githubUrl: 'https://github.com/Ayman-Abdulgalil/hibp_wrapper',
    },
    {
      title: 'ABC Optimizer',
      status: 'Completed',
      description:
        'Proof-of-concept implementation of Artificial Bee Colony optimization algorithm. Demonstrates swarm intelligence principles through pure Python implementation.',
      technologies: ['Python', 'Algorithm Design', 'Optimization'],
      githubUrl: 'https://github.com/Ayman-Abdulgalil/ABC-Optimizer',
    },
  ]

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
