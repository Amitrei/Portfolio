// GSAP Animations start

gsap.from(".main-headline-container", { opacity: 0, y: -50, duration: 1.2 });
gsap.from(".main-img", { opacity: 0, x: 50, duration: 1.2 });

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".project-card",
  },
  opacity: 0,
  y: -30,
  duration: 1.5,
  stagger: 0.2,
  ease: Power2.easeOut,
});

gsap.to(".bubbles", {
  scrollTrigger: {
    trigger: ".projects-section",
    scrub: 0.5,
  },
  y: 150,
  duration: 1,
});

gsap.from(".projects-h1", {
  scrollTrigger: {
    trigger: ".projects-h1",
    scrub: 2,
  },
  opacity: 0,
  x: -30,

  duration: 1,
  ease: Power2.easeOut,
});

gsap.from(".skills-icon", {
  scrollTrigger: {
    trigger: ".skills-icon",
  },
  opacity: 0,
  y: -30,

  duration: 1,
  stagger: 0.1,
  ease: Power2.easeOut,
});

gsap.from(".about-container", {
  scrollTrigger: {
    trigger: ".about-container",
  },
  opacity: 0,

  duration: 2,

  ease: Power2.easeOut,
});

gsap.from(".about-img", {
  scrollTrigger: {
    trigger: ".about-container",
  },
  opacity: 0,
  duration: 1.5,
  delay: 0.2,

  ease: Power2.easeOut,
});

gsap.from(".contact-container", {
  scrollTrigger: {
    trigger: ".contact-container",
  },
  opacity: 0,

  duration: 1.5,
  ease: Power2.easeOut,
});

gsap.from(".contact-icon", {
  scrollTrigger: {
    trigger: ".contact-container",
  },
  opacity: 0,

  duration: 1.5,
  stagger: 0.1,
  ease: Power2.easeOut,
});

// GSAP Animations end

// Bubbles color animations
const bubbles = document.querySelectorAll('[class^="bubbles"]');
const soonCard = document.querySelector(".portfolio-card");
const couponimCard = document.querySelector(".couponim-card");
const prettierCard = document.querySelector(".prittier-card");

soonCard.addEventListener("mouseover", () => changeBGColor("#57B268"));
couponimCard.addEventListener("mouseover", () => changeBGColor("#4186A5"));
prettierCard.addEventListener("mouseover", () => changeBGColor("#B64B5D"));

function changeBGColor(color) {
  bubbles.forEach((element) => {
    element.style.backgroundColor = color;
  });
}

// Burger menu
const burgerMenuBtn = document.querySelector(".burger-menu");
const sideMenu = document.querySelector(".side-menu");
const body = document.querySelector("body");
const burgerLinks = document.querySelectorAll(".burger-links li");

//Menu open
burgerMenuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
  burgerMenuBtn.classList.toggle("toggle-btn");
});

// Each link clicked will reset the burger menu.
burgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    burgerMenuBtn.classList.toggle("toggle-btn");
  });
});
