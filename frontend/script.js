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
let darkmodeicon = document.querySelector(".darkmodeicon")
let sunlighticon = document.querySelector("#sunlighticon")
// let list = sunlighticon.classList
// console.log(list)

darkmodeicon.addEventListener("click", () => {
    if (sunlighticon.className == "fa-regular fa-sun") {
        sunlighticon.className = "fa-regular fa-moon"
        // sunlighticon.classList.remove("fa-regular fa-sun");
        main.classList.add("dark-mode");
        anker.forEach(element => {
            element.style.color = "white"
        });
    }
    else{
        sunlighticon.className = "fa-regular fa-sun"
        // sunlighticon.classList.remove("fa-regular fa-moon");
        main.classList.remove("dark-mode");
        anker.forEach(element => {
            element.style.color = "black"
        });
    }
})

// darkModeToggle.addEventListener("change", () => {
//     if (darkModeToggle.checked) {
//         main.classList.add("dark-mode");
//         anker.forEach(element => {
//             element.style.color = "white"
//         });
//         darktext.innerHTML = `<i class="fa-regular fa-moon"></i>`
//         // anker.style.color = "white"
//     } else {
//         main.classList.remove("dark-mode");
//         anker.forEach(element => {
//             element.style.color = "black"
//         });
//         darktext.innerHTML = `<i class="fa-regular fa-sun"></i>`
//     }
// });
