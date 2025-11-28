// Simple mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

navToggle.addEventListener("click", () => {
  const isVisible = navMobile.style.display === "flex";
  navMobile.style.display = isVisible ? "none" : "flex";
});
