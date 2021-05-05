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



// // theme
// let themeBut = document.querySelector(".but_theme");
// let baseURL =
//   "file:///home/student-pc-3/Documents/mikhaylets/gg-project-master/html/home.html/";
// let file = document.querySelector("link[href]");
// let cont = document.querySelector(".container-home");

// themeBut.addEventListener('click', function () {
//   if (file.attributes[1].textContent === "../css/light-theme.css") {
//     file.attributes[1].textContent = "../css/dark-theme.css";
//   } else if (file.attributes[1].textContent === "../css/dark-theme.css") {
//     file.attributes[1].textContent = "../css/light-theme.css";
//   }
// });



// поп товары 
blockNg2 = document.querySelectorAll('.ng__block-slot2')
blockNg1 = document.querySelectorAll('.ng__block-slot1');
buttonRight = document.querySelector('.but__right');
buttonLeft = document.querySelector('.but__left');
buttonLeft.addEventListener('click',function (){
  
  for (let index = 0; index < blockNg1.length; index++) {
     blockNg1[index].style.display='none';
  }
  for (let index = 0; index < blockNg2.length; index++) {
    blockNg2[index].style.display="block";
    
  }

})
buttonRight.addEventListener('click',function (){
  
  for (let index = 0; index < blockNg1.length; index++) {
     blockNg1[index].style.display='block';
  }
  for (let index = 0; index < blockNg2.length; index++) {
    blockNg2[index].style.display="none";
    
  }

})