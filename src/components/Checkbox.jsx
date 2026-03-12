import React from "react";

function Checkbox({ label, checked, onChange }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "15px",
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ width: "18px", height: "18px" }}
      />
      <span style={{ fontSize: "16px" }}>{label}</span>
    </label>
  );
}

export default Checkbox;
