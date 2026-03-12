import React from "react";

function Table({ headers, children }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#007BFF", color: "white" }}>
          {/* This loops through whatever headers we give it and creates the columns */}
          {headers.map((header, index) => (
            <th key={index} style={{ padding: "15px", textAlign: "left" }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* This is where our DataTables (rows) will go */}
        {children}
      </tbody>
    </table>
  );
}

export default Table;
