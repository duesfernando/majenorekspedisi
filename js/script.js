function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function toggleLayanan() {
  const s = document.getElementById("submenu-layanan");
  const a = document.getElementById("arrow-layanan");
  s.style.display = s.style.display === "block" ? "none" : "block";
  a.style.transform = s.style.display === "block" ? "rotate(180deg)" : "rotate(0)";
}

function toggleTarif() {
  const s = document.getElementById("submenu-tarif");
  const a = document.getElementById("arrow-tarif");
  s.style.display = s.style.display === "block" ? "none" : "block";
  a.style.transform = s.style.display === "block" ? "rotate(180deg)" : "rotate(0)";
}

/* Tutup menu saat klik link */
document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("sidebar").classList.remove("active");
  });
});