import { useState } from "react";
import {
  COUNTRY_CODES,
  DEFAULT_COUNTRY_CODE,
  GOALS,
  INDIAN_CITIES,
  PROFESSIONS,
} from "../../utils/constants";

import "./enquiryForm.css";

import Input from "../common/Input";
import Select from "../common/Select";
import Label from "../common/Label/Label";
import GradientButton from "../common/GradientButton";

function EnquiryForm({ ...props }) {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE);
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [goal, setGoal] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  function isValidPhoneNumber(number) {
    // Regular expression to match exactly 10 digits
    const regex = /^\d{10}$/;
    return regex.test(number);
  }

  const handleSubmit = () => {
    if (!name || !whatsappNumber || !profession || !goal || !city) {
      setError("Please fill required fields");
      return false;
    }

    if (!isValidPhoneNumber(whatsappNumber)) {
      setError("Please enter valid contact number");
      return false;
    }

    setError("");
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setCountryCode(DEFAULT_COUNTRY_CODE);
    setWhatsappNumber("");
    setProfession("");
    setGoal("");
    setCity("");
  };

  return (
    <div style={{  padding: "12px 24px 30px" }}>
      <div className="enquiry-form-container" {...props}>
        <div className="enquiry-form-heading">
          <span>FILL THE FORM BELOW TO ENQUIRE</span>
        </div>
        {/* form */}
        <div className="enquiry-form">
          {/* fields */}
          <div className="enquiry-form-fields">
            <Input
              label="Enter your name"
              placeholder="Eg. Aneesha Mehra"
              required
              value={name}
              onChange={(value) => setName(value)}
            />
            {/* country code and number */}
            <div>
              <Label label="*Enter your WhatsApp number" />
              <div className="enquiry-form-country-code">
                <Select
                  id="select"
                  value={countryCode}
                  options={COUNTRY_CODES}
                  onChange={(value) => setCountryCode(value)}
                />
                <Input
                  placeholder="Eg. 0000000000"
                  value={whatsappNumber}
                  onChange={(value) => setWhatsappNumber(value)}
                  required
                  maxLength={10}
                />
              </div>
            </div>
            {/* Profession */}
            <Select
              label="Select your profession"
              placeholder="Choose the most relevant option"
              value={profession}
              options={PROFESSIONS}
              onChange={(value) => setProfession(value)}
              required
            />
            {/* Goal */}
            <Select
              label="Select your goal"
              placeholder="Choose the most relevant option"
              value={goal}
              options={GOALS}
              onChange={(value) => setGoal(value)}
              required
            />
            {/* City */}
            <Select
              label="Select your city"
              placeholder="Choose the most relevant option"
              value={city}
              options={INDIAN_CITIES}
              onChange={(value) => setCity(value)}
              required
            />
          </div>
          {/* Error Message */}
          {error && <p className="error">{error}</p>}
          {/* Submit Button */}
          <GradientButton
            className="enquiry-form-submit"
            onClick={handleSubmit}
          >
            Submit
          </GradientButton>
        </div>
      </div>
    </div>
  );
}

export default EnquiryForm;
