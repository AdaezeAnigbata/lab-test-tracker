import React from "react";

function Button({ label, onClick, color = "#007BFF" }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        marginTop: "10px",
      }}
    >
      {label}
    </button>
  );
}

export default Button;
