const ProjectCard = ({ title, status, description, technologies, githubUrl }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <span className="project-status">{status}</span>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-tech">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={githubUrl}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub →
      </a>
    </div>
  )
}

export default ProjectCard
