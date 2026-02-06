import './App.css'

const App = () => {
  const handleCVDownload = () => {
    alert('Please add your CV file to enable download functionality');
  };

  return (
    <div>
      <header>
        <div className="header-background"></div>
        <div className="container hero">
          <h1>Ayman Al-Mankkadhi</h1>
          <p className="tagline">Cybersecurity Undergraduate</p>
          <p className="bio">
            Passionate about security engineering and architecture, building
            secure systems, and mitigating risks. Focused on designing robust
            security solutions and implementing best practices in access control
            and cryptography.
          </p>
          <div className="contact-links">
            <a
              href="https://github.com/Ayman-Abdulgalil"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ayman-al-mankkadhi-19a45435a"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              LinkedIn
            </a>
            <a href="mailto:ayman.29996266.ran@gmail.com" className="contact-link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
            <button className="cv-button" onClick={handleCVDownload}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        {/* Skills Section */}
        <section id="skills">
          <h2>Core Competencies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>// Security Engineering</h3>
              <p>
                Designing secure systems with focus on ABAC/RBAC configuration,
                security architecture, and risk mitigation strategies. Experienced
                in implementing robust access control mechanisms and
                security-first design principles.
              </p>
            </div>
            <div className="skill-category">
              <h3>// Cryptography</h3>
              <p>
                Deep knowledge of cryptographic concepts and encryption functions.
                Hands-on experience implementing various encryption algorithms and
                security protocols from the ground up.
              </p>
            </div>
            <div className="skill-category">
              <h3>// Advanced Programming</h3>
              <p>
                Strong programming capabilities with expertise in Python and Rust.
                Experienced in building secure applications, automation tools, and
                security-focused software solutions.
              </p>
            </div>
            <div className="skill-category">
              <h3>// Linux Systems</h3>
              <p>
                Nearly 2 years of exclusive Arch Linux usage for academic and
                personal projects. Proficient in system administration, shell
                scripting, and working in terminal-based environments.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Secure Drive</h3>
                <span className="project-status">In Development</span>
              </div>
              <p className="project-description">
                A security-focused cloud-based file storage system designed with
                security as the primary concern. Features robust access control,
                encrypted storage, and secure file management capabilities.
              </p>
              <div className="project-tech">
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">MinIO</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">React</span>
              </div>
              <a
                href="https://github.com/Ayman-Abdulgalil/cloud-storage"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">CUIMS Scraper</h3>
                <span className="project-status">Reworking</span>
              </div>
              <p className="project-description">
                Automated web scraper for Chandigarh University's student portal.
                Handles authentication, CAPTCHA solving via OCR, and extracts
                student information into structured JSON format.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Selenium</span>
                <span className="tech-tag">Pytesseract</span>
                <span className="tech-tag">OCR</span>
              </div>
              <a
                href="https://github.com/Ayman-Abdulgalil/CUIMS-Scraper"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">HIBP Wrapper</h3>
                <span className="project-status">Completed</span>
              </div>
              <p className="project-description">
                Intuitive GUI wrapper for the Have I Been Pwned API. Provides a
                user-friendly interface for checking compromised credentials and
                data breaches with clean data visualization.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Rust</span>
                <span className="tech-tag">Slint</span>
                <span className="tech-tag">API Integration</span>
              </div>
              <a
                href="https://github.com/Ayman-Abdulgalil/hibp_wrapper"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">ABC Optimizer</h3>
                <span className="project-status">Completed</span>
              </div>
              <p className="project-description">
                Proof-of-concept implementation of Artificial Bee Colony
                optimization algorithm. Demonstrates swarm intelligence principles
                through pure Python implementation.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Algorithm Design</span>
                <span className="tech-tag">Optimization</span>
              </div>
              <a
                href="https://github.com/Ayman-Abdulgalil/ABC-Optimizer"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates">
          <h2>Certifications & Education</h2>
          <div className="certs-grid">
            <div className="cert-card">
              <div className="cert-name">
                Google Cybersecurity Professional Certificate
              </div>
              <div className="cert-provider">Google</div>
            </div>
            <div className="cert-card">
              <div className="cert-name">IBM Security Intelligence Engineer</div>
              <div className="cert-provider">IBM</div>
            </div>
            <div className="cert-card">
              <div className="cert-name">IT Specialist - Cybersecurity</div>
              <div className="cert-provider">Pearson</div>
            </div>
            <div className="cert-card">
              <div className="cert-name">Networking Essentials</div>
              <div className="cert-provider">Cisco</div>
            </div>
            <div className="cert-card">
              <div className="cert-name">
                Scientific Computing with Python (300 hours)
              </div>
              <div className="cert-provider">freeCodeCamp</div>
            </div>
            <div className="cert-card">
              <div className="cert-name">Introduction to Psychology</div>
              <div className="cert-provider">Yale University</div>
            </div>
            <div className="cert-card">
              <div className="cert-name">Learning How to Learn</div>
              <div className="cert-provider">Deep Teaching Solutions</div>
            </div>
          </div>

          <div className="learning-section">
            <h3>// Currently Pursuing</h3>
            <div className="learning-list">
              <div className="learning-item">
                ISC2 Certified in Cybersecurity (CC)
              </div>
              <div className="learning-item">CompTIA Security+</div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2026 Ayman Al-Mankkadhi. Built with passion for security.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;