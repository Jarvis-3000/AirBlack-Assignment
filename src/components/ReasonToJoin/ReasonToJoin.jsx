import "./reasonToJoin.css";

import Vector from "../../assets/icons/vector.svg";
import Broadcast from "../../assets/icons/broadcast.svg";
import Rated from "../../assets/icons/rated.svg";
import Members from "../../assets/icons/members.svg";
import GradientButton from "../common/GradientButton";

function ReasonToJoin() {
  return (
    <div className="reason-to-join">
      {/*  */}
      <div className="title">
        <img
          src={Vector}
          alt="vector icon"
          style={{ transform: "rotate(180deg)" }}
        />
        <text>
          Why Should You <br /> Join Airblack?
        </text>
        <img src={Vector} alt="vector icon" />
      </div>
      {/*  */}
      <div className="reasons">
        <div className="reason">
          <img src={Broadcast} alt="broadcast icon" />
          <text>
            Do-it-together <br />
            live on zoom
          </text>
        </div>
        <div className="reason">
          <img src={Rated} alt="rating icon" />
          <text>
            4.8/5 <br />
            Rated Classes
          </text>
        </div>
        <div className="reason">
          <img src={Members} alt="members icon" />
          <text>
            35000+ <br />
            Members
          </text>
        </div>
      </div>
      {/* Apply Now Button */}
      <GradientButton>Apply Now</GradientButton>
    </div>
  );
}

export default ReasonToJoin;
