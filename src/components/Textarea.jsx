import React from "react";

function Textarea({ placeholder, value, onChange }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows="3"
      style={{
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "100%",
        marginBottom: "10px",
        fontSize: "16px",
        fontFamily: "sans-serif",
        resize: "vertical",
      }}
    />
  );
}

export default Textarea;
