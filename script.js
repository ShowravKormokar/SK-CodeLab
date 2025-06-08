// GSAP TimeLine
let tl = gsap.timeline();

tl.to(".preloader", {
    y: "-100%",
    borderRadius: "10% 10% 36% 39% / 10% 10% 55% 56%",
    duration: 1,
    ease: "power2.out"
})
    .add(() => {
        document.querySelector(".preloader").style.dispaly = "none";
    })
    .from(".navbar", {
        duration: 1,
        y: "-100%"
    });

// SVG animation
let paths = document.querySelectorAll("svg path");
tl.to(paths, {
    y: 0,
    opacity: 1,
    stagger: 0.15,
    duration: 0.75,
    ease: "power2.out",
    onStart: function () {
        paths.forEach((path) => (path.style.transform = "translateY(100%"));
    }
});

tl.from(".hero-desc h4 svg", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power4.out"
}, "-=0.4");


gsap.from(".hero-desc p", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
}, "-=0.4")
gsap.from(".hero-desc button", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
}, "-=0.4")
gsap.from(".hero-img", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
}, "-=0.4")
gsap.from(".hero-date", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
}, "-=0.4")
gsap.from(".hero-date p, .hero-date h2", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
}, "-=0.4")
