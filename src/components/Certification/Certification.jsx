import "./certification.css";

import Vector from "../../assets/icons/vector.svg";
import Certificate from "../../assets/images/certificate.png";

function Certification() {
  return (
    <div className="certification">
      <div className="title">
        <img
          src={Vector}
          alt="vector icon"
          style={{ transform: "rotate(180deg)" }}
        />
        <text>
          Get Certified From
          <br /> India’s Biggest <br /> Beauty Platform
        </text>
        <img src={Vector} alt="vector icon" />
      </div>
      <img src={Certificate} alt="certificate" height="252px" />
    </div>
  );
}

export default Certification;
