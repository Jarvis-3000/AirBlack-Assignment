/* eslint-disable react/prop-types */
import "./select.css";

import ChevronDown from "../../../assets/icons/chevron-down.svg";
import Label from "../Label/Label";

const Select = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  required = false,
  ...props
}) => {
  return (
    <div className="custom-select-container" id="custom-select" {...props}>
      {label && <Label required={required} label={label} />}
      {/*  Select Section */}
      <div className="custom-select">
        <select
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        >
          {placeholder && (
            <option key={"-1"} value={""}>
              {placeholder}
            </option>
          )}
          {/*  */}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <img src={ChevronDown} alt="chevron-down" />
      </div>
    </div>
  );
};

export default Select;
