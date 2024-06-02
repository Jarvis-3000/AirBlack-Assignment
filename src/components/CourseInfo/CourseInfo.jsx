import "./courseInfo.css";

import Tick from "../../assets/icons/tick.svg";

import CertificateBadge from "../common/CeritificateBadge";
import Rating from "../common/Rating";

function CourseInfo() {
  return (
    <div className="course-info">
      <text className="course-info-heading">
        Professional Online <br />
        Makeup Course
      </text>
      <div className="course-info-certi-rating">
        <CertificateBadge />
        <Rating rating="4.85/5" />
      </div>
      <div>
        <div className="course-info-achievements">
          <img src={Tick} alt="tick icon" />
          <span>India’s No.1 Online Makeup Course</span>
        </div>
        <div className="course-info-achievements">
          <img src={Tick} alt="tick icon" />
          <span>Learn by LIVE Do-it-Together Classes</span>
        </div>
        <div className="course-info-achievements">
          <img src={Tick} alt="tick icon" />
          <span>Unlimited Practise Session to master skills</span>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
