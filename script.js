document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form from submitting normally
    window.location.href = "services.html"; // redirect to services page
  });
});
