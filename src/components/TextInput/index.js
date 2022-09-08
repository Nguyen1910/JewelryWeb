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
  icon,
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
      <div className="d-flex align-items-center rounded border border-2 w-100 px-3 py-1">
        <input
          type={type}
          placeholder={placeholder}
          className="bg-transparent border-0 w-100 pe-3 py-1"
          name={name}
          value={value}
          onChange={onChange}
        />
        {icon && icon}
      </div>
    </div>
  );
};

export default Index;
