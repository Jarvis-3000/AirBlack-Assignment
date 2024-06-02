/* eslint-disable react/prop-types */
import "./gradientButton.css";

const GradientButton = ({ children, className, onClick, ...props }) => {
  return (
    <button
      type="button"
      className={`gradient-button ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
