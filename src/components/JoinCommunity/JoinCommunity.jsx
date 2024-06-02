import "./joinCommunity.css";

import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Twitter from "../../assets/icons/twitter.svg";

import GradientButton from "../common/GradientButton";

function JoinCommunity() {
  return (
    <div className="join-community">
      <div className="title">
        <text>
          Join our growing <br /> community of <br /> 35,000+ alumni
        </text>
      </div>
      {/* Apply Now Button */}
      <GradientButton>Apply Now</GradientButton>
      {/* Social Media */}
      <div className="social-icons">
        <a href="https://www.instagram.com/beauty.airblack" target="_blank">
          <img src={Instagram} alt="Instagram Icon" />
        </a>
        <a href="https://www.facebook.com/beauty.airblack/" target="_blank">
          <img src={Facebook} alt="Facebook icon" />
        </a>
        <a href="https://www.linkedin.com/company/airblack/" target="_blank">
          <img src={LinkedIn} alt="Linkedin icon" />
        </a>
        <a href="https://x.com/clubairblack?lang=en" target="_blank">
          <img src={Twitter} alt="Twitter icon" />
        </a>
      </div>
    </div>
  );
}

export default JoinCommunity;
