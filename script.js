// Простой аккордеон
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      const panel = btn.nextElementSibling;
      if (!panel) return;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
});
