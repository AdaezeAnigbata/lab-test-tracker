import React from "react";

function Alert({ message }) {
  // If there is no message, the box will not appear at all
  if (!message) return null;

  return (
    <div
      style={{
        padding: "15px",
        marginBottom: "20px",
        backgroundColor: "#d4edda",
        color: "#155724",
        borderRadius: "5px",
        border: "1px solid #c3e6cb",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {message}
    </div>
  );
}

export default Alert;
