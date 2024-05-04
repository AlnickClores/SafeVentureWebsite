const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    var confirmation = confirm("Are you sure you want to download the app?");
    if (!confirmation) {
      event.preventDefault(); // Prevent the default download behavior if the user cancels
    }
  });
