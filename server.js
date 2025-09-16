// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Simulated patient data
let patientData = {
  heartRate: 75,
  spo2: 98,
  bloodPressure: "120/80"
};

// Endpoint to fetch patient data
app.get("/api/data", (req, res) => {
  res.json(patientData);
});

// Update data every 5 seconds
setInterval(() => {
  patientData.heartRate = Math.floor(60 + Math.random() * 80); // 60–140 bpm
  patientData.spo2 = Math.floor(90 + Math.random() * 10);      // 90–100%
  const systolic = Math.floor(110 + Math.random() * 20);
  const diastolic = Math.floor(70 + Math.random() * 15);
  patientData.bloodPressure = `${systolic}/${diastolic}`;
}, 5000);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend API running at http://localhost:${PORT}`);
});
