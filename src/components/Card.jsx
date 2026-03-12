import React from "react";

function Card({ title, value, color = "#007BFF" }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        borderTop: `5px solid ${color}`,
        minWidth: "150px",
        flex: "1",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px 0",
          color: "#555",
          fontSize: "14px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          fontSize: "28px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default Card;
