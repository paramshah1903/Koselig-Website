var preloader= document.getElementById('loading')
const nav = document.querySelector(".nav--header");
let messageel =document.getElementById("msg").textContent;

function myFunction()
{
  preloader.style.display= 'none';
}

nav.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    // console.log("link clicked");

    const logo = link.closest(".nav--header").querySelector("img");
    const siblings = link.closest(".nav--header").querySelectorAll(".nav__link");
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

    const logo = link.closest(".nav--header").querySelector("img");
    const siblings = link.closest(".nav--header").querySelectorAll(".nav__link");
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = "1";
      }
    });
    logo.style.opacity = "1";
  }
});



const btn= document.querySelector(".signup");
btn.addEventListener("click",() =>{
  
})

// const section1=document.querySelector("#info");
// const coords=section1.getBoundingClientRect();

// window.addEventListener("scroll",()=>{
//   if(window.scrollY>coords.top){
//     nav.classList.add("sticky");
//   }
//   else{
//     nav.classList.remove("sticky");
//   }
// })


const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
