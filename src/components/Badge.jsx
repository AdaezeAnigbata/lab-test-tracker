import React from "react";

// This accepts text and a color, making it perfectly reusable anywhere!
function Badge({ text, color }) {
  return (
    <span
      style={{
        padding: "6px 12px",
        borderRadius: "20px",
        backgroundColor: color,
        color: "white",
        fontWeight: "bold",
        fontSize: "12px",
        display: "inline-block",
      }}
    >
      {text}
    </span>
  );
}

export default Badge;
