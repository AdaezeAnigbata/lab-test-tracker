import React, { useState } from "react";
import Form from "./components/Form";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import Table from "./components/Table";
import DataTable from "./components/DataTable";
import Select from "./components/Select";
import Textarea from "./components/TextArea";
import Alert from "./components/Alert";
import Card from "./components/Card";

function App() {
  const [patientName, setPatientName] = useState("");
  const [testType, setTestType] = useState("");
  const [notes, setNotes] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [labQueue, setLabQueue] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  const availableTests = [
    "Malaria Parasite (MP)",
    "Packed Cell Volume (PCV)",
    "Urinalysis",
    "Full Blood Count (FBC)",
    "Fasting Blood Sugar (FBS)",
  ];

  const handleAddTest = () => {
    if (!patientName || !testType) {
      alert("Please enter the patient name and select a test.");
      return;
    }

    const generatedLabId = `LAB-${String(labQueue.length + 1).padStart(3, "0")}`;

    const newTest = {
      id: Date.now(),
      labId: generatedLabId,
      patientName: patientName,
      testType: testType,
      isUrgent: isUrgent,
      notes: notes,
    };

    setLabQueue([...labQueue, newTest]);

    setAlertMessage(`${patientName}'s test was added successfully!`);
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);

    setPatientName("");
    setTestType("");
    setNotes("");
    setIsUrgent(false);
  };

  const totalTests = labQueue.length;
  const urgentTests = labQueue.filter((test) => test.isUrgent).length;

  return (
    // TWEAK 1: Reduced the padding slightly so it doesn't waste space on mobile
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "15px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h1
        style={{ textAlign: "center", color: "#2c3e50", marginBottom: "30px" }}
      >
        Clinical Lab Test Tracker
      </h1>

      {/* TWEAK 2: Added "flexWrap: 'wrap'" so the stat cards stack gracefully on small screens */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        <Card title="Total Pending Tests" value={totalTests} color="#007BFF" />
        <Card title="Urgent Tests" value={urgentTests} color="#e74c3c" />
      </div>

      {/* TWEAK 3: Dropped the minimum column size from 350px to 280px so it fits narrow phones */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          alignItems: "start",
        }}
      >
        <div>
          <Alert message={alertMessage} />

          <Form title="Log New Patient Test" onSubmit={handleAddTest}>
            <Input
              placeholder="Patient Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />

            <Select
              defaultText="-- Select Test Type --"
              options={availableTests}
              value={testType}
              onChange={(e) => setTestType(e.target.value)}
            />

            <Textarea
              placeholder="Clinical Notes (e.g., Fever, Fasting)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <Checkbox
              label="Mark as Urgent"
              checked={isUrgent}
              onChange={(e) => setIsUrgent(e.target.checked)}
            />
            <Button label="Add to Queue" />
          </Form>
        </div>

        {/* TWEAK 4: Added "overflowX: 'auto'". This is the magic fix! It stops the table from stretching the whole page and instead creates a neat little sideways scrollbar just for the table. */}
        <div style={{ width: "100%", overflowX: "auto" }}>
          <h2 style={{ color: "#2c3e50", marginTop: 0 }}>Current Queue</h2>

          <Table headers={["Lab ID", "Patient Name", "Test Type", "Status"]}>
            {labQueue.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    padding: "15px",
                    textAlign: "center",
                    color: "#777",
                  }}
                >
                  No pending tests.
                </td>
              </tr>
            ) : (
              labQueue.map((test) => (
                <DataTable
                  key={test.id}
                  labId={test.labId}
                  patientName={test.patientName}
                  testType={test.testType}
                  isUrgent={test.isUrgent}
                />
              ))
            )}
          </Table>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
          paddingTop: "20px",
          borderTop: "1px solid #ddd",
          color: "#777",
          fontSize: "14px",
        }}
      >
        <p>Generated by Adaeze | Medical Laboratory Dashboard</p>
      </div>
    </div>
  );
}

export default App;
