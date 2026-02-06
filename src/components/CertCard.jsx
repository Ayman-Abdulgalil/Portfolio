const CertCard = ({ name, provider }) => {
  return (
    <div className="cert-card">
      <div className="cert-name">{name}</div>
      <div className="cert-provider">{provider}</div>
    </div>
  )
}

export default CertCard
