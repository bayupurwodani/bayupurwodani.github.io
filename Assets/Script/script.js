alert(
  "Selamat datang di website portofolio Bayu Purwodani! \nUntuk saat ini website hanya dapat diakses dalam versi desktop. \nMohon maaf atas ketidaknyamanannya 🙏."
);

function toggleMenu() {
  const nav = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");

  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
}

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
    document.querySelector(".hamburger").classList.remove("active");
  });
});

/* Tutup menu ketika klik di luar area menu */
document.addEventListener("click", function (e) {
  const nav = document.getElementById("navMenu");
  const burger = document.querySelector(".hamburger");

  const klikDiMenu = nav.contains(e.target);
  const klikDiBurger = burger.contains(e.target);

  // Jika menu sedang terbuka dan klik di luar menu & burger
  if (nav.classList.contains("active") && !klikDiMenu && !klikDiBurger) {
    nav.classList.remove("active");
    burger.classList.remove("active");
  }
});

function toggleMode() {
  document.body.classList.toggle("dark");
}
