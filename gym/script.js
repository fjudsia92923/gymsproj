const menuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav");

menuButton.addEventListener("click", function () {
  const isOpen = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const currentPage = location.pathname.split("/").pop() || "main.html";

document.querySelectorAll(".nav a, .site-footer a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});
