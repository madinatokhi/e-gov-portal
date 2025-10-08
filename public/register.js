document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const full_name = document.getElementById("full_name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ full_name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      document.getElementById("message").style.color = "green";
      document.getElementById("message").textContent = "✅ Registration successful! You can now log in.";
      setTimeout(() => {
        window.location.href = "login.html"; // redirect to login after 2 sec
      }, 2000);
    } else {
      document.getElementById("message").textContent = data.message || "❌ Registration failed";
    }
  } catch (err) {
    document.getElementById("message").textContent = "⚠️ Error: " + err.message;
  }
});
