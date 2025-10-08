document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const logoutBtn = document.getElementById("logoutBtn");

  // If no token, redirect to login
  if (!token) {
    console.log("⚠️ No token found. Redirecting to login...");
    window.location.href = "login.html";
    return;
  }

  console.log("✅ Token found:", token);

  try {
    // Fetch user data
    const res = await fetch("http://localhost:4000/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("📡 Fetch status:", res.status);

    if (res.ok) {
      const user = await res.json();
      console.log("👤 User data:", user);
      welcomeMessage.textContent = `Welcome, ${user.full_name} 👋`;
    } else {
      console.warn("⚠️ Could not fetch user data, status:", res.status);
      welcomeMessage.textContent = "Welcome, Citizen 👋";
    }
  } catch (err) {
    console.error("❌ Error fetching user info:", err);
  }

  // Logout button
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "login.html";
  });
});
