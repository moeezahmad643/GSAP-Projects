let headerAnimation = gsap.timeline();

headerAnimation.from("header .ball", {
  y: 50,
  opacity: 0,
});

headerAnimation.from("header img", {
  x: 50,
  opacity: 0,
});

headerAnimation.from("header .main", {
  y: 50,
  opacity: 0,
});

headerAnimation.from("header .main span", {
  x: -50,
  opacity: 0,
});

