gsap.to(".section2 h1",{
    transform: "translateX(-180%)",
    scrollTrigger: {
        trigger: ".section2",
        start: "10% 10%",
        end: "top -100%",
        scrub:2,
        pin:true
      },
})