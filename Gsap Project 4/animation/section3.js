gsap.to(".section3 .top", {
  transform: "translateX(-10%)",

  scrollTrigger: {
    trigger: ".section3",
    start: "top center",
    end: "bottom center",
    scrub: true,
  }
});

gsap.to(".section3 .bottom", {
  transform: "translateX(10%)",

  scrollTrigger: {
    trigger: ".section3",
    start: "top center",
    end: "bottom center",
    scrub: true,
  }
});
