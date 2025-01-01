let headerAnimtion = gsap.timeline({
  repeat: -1,
});

headerAnimtion.to("header", {
  delay: 5,
  duration: 1,
  x: "-100vw",
});
headerAnimtion.to("header", {
  delay: 5,
  duration: 1,
  x: "-200vw",
});
headerAnimtion.to("header", {
  delay: 5,
  duration: 1,
  x: "-100vw",
});

headerAnimtion.to("header", {
  delay: 5,
  duration: 1,
  x: "-0vw",
});


let tl = gsap.timeline()

tl.from("header div",{
        width:"0vw"
})
tl.from("header div img",{
        y:10,
        opacity:0,
        duration:0.2,
})
tl.from("header div span",{
        y:10,
        opacity:0,
        duration:0.2,        
})


