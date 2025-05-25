document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Save to localStorage
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);

    alert("பதிவு வெற்றிகரமாக முடிந்தது! இப்போது உள்நுழையவும்.");
    window.location.href = "login.html";
  });
});
