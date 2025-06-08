// Border Animation
gsap.fromTo(
    ".border",
    { width: "0%" },
    {
        width: "100%",
        duration: 3,
        delay: 1,
        ease: "power3.out"
    }
);


// GSAP TimeLine
let tl = gsap.timeline();

tl.to(".preloader", {
    y: "-100%",
    borderRadius: "10% 10% 36% 39% / 10% 10% 55% 56%",
    duration: 1,
    ease: "power2.out"
})
    .add(() => {
        document.querySelector(".preloader").style.display = "none";
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
}, "-=0.4").to(".border", {
    opacity: 0,
    duration: 0.5
});


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


// ----------- Services Animation
gsap.set("#main #hero", {
    opacity: 0.873,
    transform: "translateY(5px) scale(1) translateZ(0px)"
})

const texts = document.querySelectorAll("#services .text-ser h2 span");

texts.forEach((text) => {
    gsap.set(text, {
        y: "100%",
        opacity: 0
    })
})

gsap.to(texts, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#services",
        start: "top 100%",
        toggleActions: "play none none none",
    },
});

gsap.to("#ser-1", {
    // duration: 1,
    scrollTrigger: {
        trigger: "#ser-1",
        pin: true,
        start: "top 100px",
        // end: "bottom -40%",
        end: "bottom -250px",
        scrub: true,
        pinSpacing: false,
        // markers: true
    }
});
gsap.to("#ser-2", {
    // duration: 3,
    scrollTrigger: {
        trigger: "#ser-2",
        pin: true,
        start: "top 230px",
        end: "bottom 260px",
        scrub: true,
        pinSpacing: false,
        // markers: true
    }
});
gsap.to("#ser-3", {
    // duration: 1,
    scrollTrigger: {
        trigger: "#ser-3",
        pin: true,
        start: "top 350px",
        end: "bottom 1000px",
        scrub: true,
        pinSpacing: false,
        // markers: true
    }
});