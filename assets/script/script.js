const menu = document.querySelector(".menu");
const navmenu = document.querySelector(".nav-ul");

menu.addEventListener("click", () => {
  navmenu.classList.toggle("open-nav");
});

const audio = document.querySelector("#audio");
const readyBtn = document.querySelector("#ready");
const loadingSec = document.querySelector("#loading");

readyBtn.addEventListener("click", () => {
  loadingSec.style.display = "none";
  audio.play();
});
