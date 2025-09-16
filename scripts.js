document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const status = document.getElementById("status");
  status.textContent = "pretend this sent! (static demo)";
});
