gsap.from(".section1 img", {
  left: "50%",
  top: "50%",
  duration: 0.3,
  scrollTrigger: {
    trigger: ".section1",
    start: "top 50%",
    end: "bottom 40%",
  },
});

// Make sure to refresh ScrollTrigger on page load to account for initial positions
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

document
  .getElementsByClassName("section1")[0]
  .querySelectorAll("img")
  .forEach((img) => {
    img.addEventListener("mouseover", () => {
      gsap.to(img, {
        x: -5,
        y: -5,
        duration:0.2,
      });
    });
    img.addEventListener("mouseout", () => {
      gsap.to(img, {
        x: 5,
        y: 5,
        duration:0.2,
      });
    });
  });
