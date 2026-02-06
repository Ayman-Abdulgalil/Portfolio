import CertCard from './CertCard'

const Certifications = () => {
  const certificates = [
    {
      name: 'Google Cybersecurity Professional Certificate',
      provider: 'Google',
    },
    {
      name: 'IBM Security Intelligence Engineer',
      provider: 'IBM',
    },
    {
      name: 'IT Specialist - Cybersecurity',
      provider: 'Pearson',
    },
    {
      name: 'Networking Essentials',
      provider: 'Cisco',
    },
    {
      name: 'Scientific Computing with Python (300 hours)',
      provider: 'freeCodeCamp',
    },
    {
      name: 'Introduction to Psychology',
      provider: 'Yale University',
    },
    {
      name: 'Learning How to Learn',
      provider: 'Deep Teaching Solutions',
    },
  ]

  const currentlyPursuing = [
    'ISC2 Certified in Cybersecurity (CC)',
    'CompTIA Security+',
  ]

  return (
    <section id="certificates">
      <h2>Certifications & Education</h2>
      <div className="certs-grid">
        {certificates.map((cert, index) => (
          <CertCard key={index} name={cert.name} provider={cert.provider} />
        ))}
      </div>

      <div className="learning-section">
        <h3>// Currently Pursuing</h3>
        <div className="learning-list">
          {currentlyPursuing.map((item, index) => (
            <div key={index} className="learning-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
