import React from "react";

function Form({ onSubmit, title, children }) {
  return (
    <form
      // e.preventDefault() stops the page from refreshing when you click submit!
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: "20px", color: "#333" }}>
        {title}
      </h2>

      {/* This is where the Inputs, Checkbox, and Button will appear */}
      {children}
    </form>
  );
}

export default Form;
