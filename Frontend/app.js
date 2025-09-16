// frontend/app.js
async function fetchPatientData() {
  try {
    const res = await fetch("http://localhost:3000/api/data");
    const data = await res.json();

    document.getElementById("heartRate").textContent = data.heartRate;
    document.getElementById("spo2").textContent = data.spo2;
    document.getElementById("bloodPressure").textContent = data.bloodPressure;

    checkAlerts(data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

function checkAlerts(data) {
  const alertBox = document.getElementById("alertBox");
  if (data.heartRate < 50 || data.heartRate > 120 || data.spo2 < 92) {
    alertBox.classList.remove("hidden");
  } else {
    alertBox.classList.add("hidden");
  }
}

// Fetch immediately and every 5s
fetchPatientData();
setInterval(fetchPatientData, 5000);
