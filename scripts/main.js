// GSAP Animations start

gsap.from(".main-headline-container", { opacity: 0, y: -50, duration: 1.2 });
gsap.from(".main-img", { opacity: 0, x: 50, duration: 1.2 });

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".project-card",
    toggleActions: "play none play reset",
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
    toggleActions: "play reset play reset",
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
    toggleActions: "play reset play reset",
  },
  opacity: 0,

  duration: 2,

  ease: Power2.easeOut,
});

gsap.from(".about-img", {
  scrollTrigger: {
    trigger: ".about-container",
    toggleActions: "play reset play reset",
  },
  opacity: 0,
  duration: 1.5,
  delay: 0.2,

  ease: Power2.easeOut,
});

gsap.from(".contact-container", {
  scrollTrigger: {
    trigger: ".contact-container",
    toggleActions: "play reset play reset",
  },
  opacity: 0,

  duration: 1.5,
  ease: Power2.easeOut,
});

// GSAP Animations end
