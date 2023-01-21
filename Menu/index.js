const nav = document.querySelector(".nav");
var preloader= document.getElementById('loading')

function myFunction()
{
  preloader.style.display= 'none';
}
nav.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    // console.log("link clicked");

    const logo = link.closest(".nav").querySelector("img");
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
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

    const logo = link.closest(".nav").querySelector("img");
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
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
//     // console.log("hh");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

// const stickyNav = (entries) => {
//   const [entry] = entries;
//   console.log(entry);
//   if (entry.isIntersecting) {
//     nav.classList.add("sticky");
//   } else {
//     // console.log("no");
//     nav.classList.remove("sticky");
//   }
// };

// const section1Observer = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0.1,
// });

// section1Observer.observe(section1);

// const section2 = document.querySelector(".snacks");

// // const stickyNav = (entries) => {
// //   const [entry] = entries;
// //   console.log(entry);
// //   if (entry.isIntersecting) {
// //     nav.classList.add("sticky");
// //   } else {
// //     // console.log("no");
// //     nav.classList.remove("sticky");
// //   }
// // };

// const section2Observer = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0.1,
// });

// section2Observer.observe(section2);

//Rotating Card

const cards = document.querySelectorAll(".card__inner");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});

//DROPDOWN

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = document.querySelector(".select");
  const caret = document.querySelector(".caret");
  const menu = document.querySelector(".menu");
  const options = document.querySelectorAll(".menu li");
  const selected = document.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

const opt1 = document.querySelector(".op1");
opt1.addEventListener("click", () => {
  console.log("clicked");
  const snacks = document.querySelector(".snacks");
  snacks.scrollIntoView();
});

const opt2 = document.querySelector(".op2");
opt2.addEventListener("click", () => {
  const mains = document.querySelector(".mains");
  mains.scrollIntoView();
});

const opt3 = document.querySelector(".op3");
opt3.addEventListener("click", () => {
  const mains = document.querySelector(".desserts");
  mains.scrollIntoView();
});
