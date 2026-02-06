import SkillCategory from './SkillCategory'

const Skills = () => {
  const skills = [
    {
      title: '// Security Engineering',
      description:
        'Designing secure systems with focus on ABAC/RBAC configuration, security architecture, and risk mitigation strategies. Experienced in implementing robust access control mechanisms and security-first design principles.',
    },
    {
      title: '// Cryptography',
      description:
        'Deep knowledge of cryptographic concepts and encryption functions. Hands-on experience implementing various encryption algorithms and security protocols from the ground up.',
    },
    {
      title: '// Advanced Programming',
      description:
        'Strong programming capabilities with expertise in Python and Rust. Experienced in building secure applications, automation tools, and security-focused software solutions.',
    },
    {
      title: '// Linux Systems',
      description:
        'Nearly 2 years of exclusive Arch Linux usage for academic and personal projects. Proficient in system administration, shell scripting, and working in terminal-based environments.',
    },
  ]

  return (
    <section id="skills">
      <h2>Core Competencies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCategory
            key={index}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
