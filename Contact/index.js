const nav = document.querySelector(".nav__header");
var preloader= document.getElementById('loading')

function myFunction()
{
  preloader.style.display= 'none';
}
nav.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    // console.log("link clicked");

    const logo = link.closest(".nav__header").querySelector("img");
    const siblings = link.closest(".nav__header").querySelectorAll(".nav__link");
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = "0.5";
      }
    });
    logo.style.opacity = "0.5";
  }
});

nav.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    // console.log("link clicked");

    const logo = link.closest(".nav__header").querySelector("img");
    const siblings = link.closest(".nav__header").querySelectorAll(".nav__link");
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = "1";
      }
    });
    logo.style.opacity = "1";
  }
});

// const breakpoint=document.querySelector(".contact-text");
// const coords=breakpoint.getBoundingClientRect();
// console.log(coords);

// window.addEventListener("scroll",() =>{
//   if(window.scrollY>coords.top){
//     nav.classList.add("sticky");
//   }
//   else{
//   nav.classList.remove("sticky");
//   }
// })

var feild = document.querySelector("textarea");
var backUp = feild.getAttribute("placeholder");
var btn = document.querySelector(".btn");
var clear = document.getElementById("clear");

feild.onfocus = function(){
  this.setAttribute("placeholder", "");
  this.style.borderColor = "#333";
  btn.style.display = "block";
}

feild.onblur = function(){
  this.setAttribute("placeholder", backUp);
  this.style.borderColor = "#aaa"
}

clear.onclick = function(){
  btn.style.display = "none";
  feild.value = "";
}

// $("h1").slideUp(1000);


// $("h1").load(function(){
//   $(this).focusin();
// });

// document.getElementsByTagName("h1").addEventListener("onload", slideUp(1000))
