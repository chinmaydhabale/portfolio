// const navbar = document.querySelector('#NavBar');
// let top = navbar.offsetTop;
// function stickynavbar() {
//   if (window.scrollY >= top) {    
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');    
//   }
// }
// window.addEventListener('scroll', stickynavbar);


// for dark mode 

const darkModeToggle = document.getElementById("sliderToggle");
let main = document.querySelector("main")
// var allElements = document.getElementsByTagName("*");
let anker = document.querySelectorAll(".forcol")


darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        main.classList.add("dark-mode");
        anker.forEach(element => {
            element.style.color = "white"
        });
        // anker.style.color = "white"
    } else {
        main.classList.remove("dark-mode");
        anker.forEach(element => {
            element.style.color = "black"
        });
    }
});