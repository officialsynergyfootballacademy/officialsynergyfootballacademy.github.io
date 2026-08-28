const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
const galleryToggle = document.getElementById('gallery-toggle');
const galleryPanel = document.getElementById('nav-gallery-panel');

if (galleryToggle && galleryPanel) {
  galleryToggle.addEventListener('click', function (e) {
    e.preventDefault();
    galleryPanel.classList.toggle('open');
  });
}
