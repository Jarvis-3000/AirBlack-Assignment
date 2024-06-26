/* eslint-disable react/prop-types */
import "./input.css";

import Label from "../Label/Label";

const Input = ({
  label,
  placeholder,
  type = "text", // Set default type to text
  value,
  onChange,
  required = false,
  ...props
}) => {
  return (
    <div className="custom-input-container" id="custom-input">
      {label && <Label required={required} label={label} />}
      <input
        type={type} 
        className="custom-input"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
