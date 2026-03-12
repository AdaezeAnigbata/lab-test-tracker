import React from "react";
import Badge from "./Badge";

function DataTable({ labId, patientName, testType, isUrgent }) {
  return (
    <tr style={{ borderBottom: "1px solid #eee" }}>
      {/* ---  Lab ID Column --- */}
      <td
        style={{
          padding: "15px",
          fontWeight: "bold",
          color: "#666",
          fontFamily: "monospace",
          fontSize: "16px",
        }}
      >
        {labId}
      </td>
      <td style={{ padding: "15px" }}>{patientName}</td>
      <td style={{ padding: "15px" }}>{testType}</td>
      <td style={{ padding: "15px" }}>
        <Badge
          text={isUrgent ? "Urgent" : "Routine"}
          color={isUrgent ? "#e74c3c" : "#2ecc71"}
        />
      </td>
    </tr>
  );
}

export default DataTable;
