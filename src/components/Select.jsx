import React from "react";

// This takes an array of 'options' so you can use it for any list!
function Select({ options, value, onChange, defaultText }) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "100%",
        marginBottom: "10px",
        fontSize: "16px",
        backgroundColor: "white",
      }}
    >
      <option value="" disabled>
        {defaultText}
      </option>

      {/* This loops through your list and creates the dropdown choices */}
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
