import Certification from "../components/Certification";
import CourseInfo from "../components/CourseInfo/CourseInfo";
import EnquiryForm from "../components/EnquiryForm";
import Header from "../components/Header";
import JoinCommunity from "../components/JoinCommunity";
import ReasonToJoin from "../components/ReasonToJoin";

function Enquiry() {
  return (
    <div style={{ backgroundColor: "#0F1014" }}>
      <Header />
      <CourseInfo />
      <EnquiryForm />
      <ReasonToJoin />
      <Certification />
      <JoinCommunity />
    </div>
  );
}

export default Enquiry;
