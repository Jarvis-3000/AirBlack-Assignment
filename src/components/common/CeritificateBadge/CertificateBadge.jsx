import "./certificateBadge.css";

import CertificationFlag from "../../../assets/icons/certification_flag.svg";

function CertificateBadge() {
  return (
    <div className="certificate-badge">
      <img src={CertificationFlag} alt="Certification Flag" />
      <span>Certification Programme</span>
    </div>
  );
}

export default CertificateBadge;
