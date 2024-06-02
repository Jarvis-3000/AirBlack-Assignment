/* eslint-disable react/prop-types */
import "./label.css";

function Label({ required = false, label, ...props }) {
  return (
    <label className="custom-label" {...props}>
      {required && "*"}
      {label}
    </label>
  );
}

export default Label;
