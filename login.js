document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const registeredEmail = localStorage.getItem("registeredEmail");
    const registeredPassword = localStorage.getItem("registeredPassword");

    if (email === registeredEmail && password === registeredPassword) {
      window.location.href = "services.html"; // ✅ SUCCESS
    } else {
      alert("தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்.");
    }
  });
});
