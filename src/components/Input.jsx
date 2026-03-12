import React from "react";

function Input({ placeholder, value, onChange, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "100%",
        marginBottom: "10px",
        fontSize: "16px",
      }}
    />
  );
}

export default Input;
