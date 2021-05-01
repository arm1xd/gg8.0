//slider\\
let slides = document.querySelectorAll("#slides .slide");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);
let nav = document.querySelector(".navigation");
function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}

//animation bg nav scroll\\

window.addEventListener("scroll", (Event) => {
  if (window.pageYOffset > 300) {
    nav.style.position = "fixed";
    nav.style.backgroundColor = "rgba(0,0,0,1)";
    nav.style.transition = "2s all ease";
  } else if (window.pageYOffset < 50) {
    nav.style.backgroundColor = "rgba(0,0,0,0)";
  }
});

let themeBut = document.querySelector(".but_theme");
let baseURL =
  "file:///home/student-pc-3/Documents/mikhaylets/gg-project-master/html/home.html/";
let file = document.querySelector("link[href]");
let cont = document.querySelector(".container-home");

themeBut.addEventListener("click", function () {
  if (file.attributes[1].textContent === "../css/light-theme.css") {
    file.attributes[1].textContent = "../css/dark-theme.css";
  } else if (file.attributes[1].textContent === "../css/dark-theme.css") {
    file.attributes[1].textContent = "../css/light-theme.css";
  }
});
