import React from "react";

import "./textInput.css";

const Index = ({
  label,
  type,
  placeholder,
  styleContainer,
  className,
  labelStyle,
  name,
  onChange,
  value,
}) => {
  return (
    <div
      className={`d-flex input_container align-items-center w-100 ${className}`}
      style={{ ...styleContainer }}
    >
      {label && (
        <label className={`input_label ${""}`} style={{ ...labelStyle }}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="input_text rounded border-1 w-100"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Index;
