if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
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
const galleryGrid = document.getElementById('galleryGrid');
if (galleryGrid) {
  const images = Array.from(galleryGrid.querySelectorAll('img'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.classList.add('open');
  }
  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }
  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });
  closeBtn.addEventListener('click', () => lightbox.classList.remove('open'));
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
  lightbox.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchEndX < touchStartX - 50) showNext();
    if (touchEndX > touchStartX + 50) showPrev();
  });
}
const memoriesTrack = document.getElementById('memoriesTrack');
const memoriesPrev = document.getElementById('memoriesPrev');
const memoriesNext = document.getElementById('memoriesNext');

if (memoriesTrack && memoriesPrev && memoriesNext) {
  memoriesNext.addEventListener('click', () => {
    memoriesTrack.scrollBy({ left: memoriesTrack.clientWidth * 0.85, behavior: 'smooth' });
  });
  memoriesPrev.addEventListener('click', () => {
    memoriesTrack.scrollBy({ left: -memoriesTrack.clientWidth * 0.85, behavior: 'smooth' });
  });
}
