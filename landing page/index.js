const nav = document.querySelector(".nav--header");
var preloader= document.getElementById('loading')

function myFunction()
{
  preloader.style.display= 'none';
}
nav.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    console.log("link clicked");

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
    console.log("link clicked");

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

// const section1 = document.querySelector(".divide");
// const initialCords = section1.getBoundingClientRect();
// // console.log(initialCords);

// window.addEventListener("scroll", () => {
//   if (window.scrollY > initialCords.top) {
//     nav.classList.add("sticky");
    
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

// window.addEventListener("resize",(e)=>{
// // console.log(e);
// // console.log(window.innerWidth);
// // nav.classList.remove("sticky");
// console.log(nav.classList);

// if(window.innerWidth<1028){
//   nav.classList.remove("sticky");
//   console.log(nav.classList);
//   console.log("hh")
// }
// })


// const cords1 = dish1.getBoundingClientRect();
// console.log(cords1);

const dish1 = document.querySelector("#dish1");
const revealCard1 = (entries, observer) => {
  const [entry] = entries;
  //   console.log(entry);
  if (entry.isIntersecting) {
    dish1.querySelector(".dish__content").classList.add("slide-in-right");
  }
};

const dish1Observer = new IntersectionObserver(revealCard1, {
  root: null,
  threshold: 0.1,
});

dish1Observer.observe(dish1);

const dish2 = document.querySelector("#dish2");

const revealCard2 = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);
  if (entry.isIntersecting) {
    dish2.querySelector(".dish__content").classList.add("slide-in-left");
  }
};

const dish2Observer = new IntersectionObserver(revealCard2, {
  root: null,
  threshold: 0.1,
});

dish2Observer.observe(dish2);

const dish3 = document.querySelector("#dish3");

const revealCard3 = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    dish3.querySelector(".dish__content").classList.add("slide-in-right");
  }
};

const dish3Observer = new IntersectionObserver(revealCard3, {
  root: null,
  threshold: 0.1,
});

dish3Observer.observe(dish3);

const dish4 = document.querySelector("#dish4");


const revealCard4 = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    dish4.querySelector(".dish__content").classList.add("slide-in-left");
  }
};

const dish4Observer = new IntersectionObserver(revealCard4, {
  root: null,
  threshold: 0.1,
});

dish4Observer.observe(dish4);

const dish5 = document.querySelector("#dish5");


const revealCard5 = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    dish5.querySelector(".dish__content").classList.add("slide-in-right");
  }
};

const dish5Observer = new IntersectionObserver(revealCard5, {
  root: null,
  threshold: 0.1,
});

dish5Observer.observe(dish5);

const dish6 = document.querySelector("#dish6");


const revealCard6 = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    dish6.querySelector(".dish__content").classList.add("slide-in-left");
  }
};

const dish6Observer = new IntersectionObserver(revealCard6, {
  root: null,
  threshold: 0.1,
});

dish6Observer.observe(dish6);


const dish7 = document.querySelector("#dish7");


const revealCard7 = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    dish7.querySelector(".dish__content").classList.add("slide-in-right");
  }
};

const dish7Observer = new IntersectionObserver(revealCard7, {
  root: null,
  threshold: 0.1,
});

dish7Observer.observe(dish7);

const dish8 = document.querySelector("#dish8");


const revealCard8 = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    dish8.querySelector(".dish__content").classList.add("slide-in-left");
  }
};

const dish8Observer = new IntersectionObserver(revealCard8, {
  root: null,
  threshold: 0.1,
});

dish8Observer.observe(dish8);


const dish9 = document.querySelector("#dish9");


const revealCard9 = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    dish9.querySelector(".dish__content").classList.add("slide-in-right");
  }
};

const dish9Observer = new IntersectionObserver(revealCard9, {
  root: null,
  threshold: 0.1,
});

dish9Observer.observe(dish9);

function FbotonOn(event, inputText){
  event.preventDefault();
  //remaining function logic goes here
}

function FbotonOn() { 

  if(document.getElementById('button').onclick)
      document.getElementById('texto').innerHTML = "Yay, now we can update you easily!";
}