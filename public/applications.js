document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/api/applications");
    const applications = await response.json();

    const tableBody = document.querySelector("#applicationsTable tbody");
    tableBody.innerHTML = "";

    if (applications.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5">No applications found.</td></tr>`;
      return;
    }

    applications.forEach(app => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${app.id}</td>
        <td>${app.citizen_name || "N/A"}</td>
        <td>${app.service_name || "N/A"}</td>
        <td>${app.status}</td>
        <td>${new Date(app.submitted_at).toLocaleString()}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error loading applications:", error);
  }
});
