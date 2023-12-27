const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

//마우스 커서

gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

window.addEventListener("mousemove", (e) => {
    gsap.to(".cursor", 0.1, {
        x: e.x,
        y: e.y,
        ease: "none",
    });
});

// 괄호
btext = $(".bracket-textbox2");

$(".link-menu.main").hover(
    function () {
        w = $(this).find(".bracket-textbox2 span").width();
        gsap.to($(this).find(".bracket-textbox2"), 0.2, {
            opacity: 1,
            width: w,
            ease: "none",
        });
        gsap.to($(this).find(".bracket-after"), 0.2, {
            left: 32 + w,
            ease: "none",
        });
    },
    function () {
        gsap.to($(this).find(".bracket-textbox2"), 0.2, {
            opacity: 0,
            width: 0,
            ease: "none",
        });
        gsap.to($(this).find(".bracket-after"), 0.2, {
            left: 32,
            ease: "none",
        });
    }
);

// header

//sc-intro , sc-blog , sc-util show

form1tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".show1",
        start: "0% 70%",
        end: "120% 70%",
        toggleActions: "play reverse play reverse",
    },
});
blogtl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc-blog",
        start: "0% 50%",
        end: "100% 50%",
        toggleActions: "play reverse play reverse",
    },
});
form1t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".util-box",
        start: "0% 80%",
        end: "100% 80%",

        toggleActions: "play reverse play reverse",
    },
});
form1tl.to($(".show1").find(".up-text"), {
    y: 0,
    stagger: 0.08,
});
blogtl.to($(".show2").find(".up-text"), {
    y: 0,
    stagger: 0.08,
});
form1t2.to($(".show3").find(".up-text"), {
    y: 0,
    stagger: 0.08,
});
//
// .sc-welcom text

welconShow = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc-welcom",
        start: "0% 50%",
        end: "100% 50%",
        toggleActions: "play reverse play reverse",
    },
});

welconShow.to($(".welcom-box").find("p"), {
    opacity: 1,
});

//sc-showCase video, text

gsap.to(".video-box", {
    scrollTrigger: {
        trigger: ".sticky-wrap",
        start: "0% 60%",
        end: "100% 0%",
        scrub: 0,
    },
    scale: 1,
});
gsap.to(".text-left", {
    scrollTrigger: {
        trigger: ".text-box",
        start: "0% 60%",
        end: "100% 0%",
        scrub: 0,
    },
    x: 0,
});
gsap.to(".text-right", {
    scrollTrigger: {
        trigger: ".text-box",
        start: "0% 60%",
        end: "100% 0%",
        scrub: 0,
    },
    x: 0,
});

//sc-project 가로스크롤

w = $(".project-item").outerWidth();

gsap.to(".project-list", {
    scrollTrigger: {
        trigger: ".sc-project",
        start: "3% 0%",
        end: "100% 100%",
        scrub: 1,
        invalidateOnRefresh: true,
    },
    ease: "none",
    xPercent: -100,
    x: function () {
        return window.innerWidth;
    },
});

//sc-project img-up

projectSlide = gsap.timeline({
    defaults: {
        ease: "none",
        duration: 1,
    },
    scrollTrigger: {
        trigger: ".project-list",
        start: "10% 100%",
        end: "100% 100%",
        scrub: 1,
    },
});

projectSlide.fromTo(
    ".project-item:nth-child(1) .link-project",

    { y: 200 },
    { y: 0 }
);
projectSlide.fromTo(
    ".project-item:nth-child(3) .link-project",

    { y: 200 },
    { y: 0 },
    "b"
);
projectSlide.fromTo(
    ".project-item:nth-child(2) .link-project",

    { y: 200 },
    { y: 0 },
    "a"
);
projectSlide.fromTo(
    ".project-item:nth-child(4) .link-project",

    { y: 200 },
    { y: 0 },
    "a"
);

//sc-blog img scale

gsap.to(".up1", {
    scrollTrigger: {
        trigger: ".sticky-blog1",
        start: "50% 50%",
        end: "100% 0%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
    },

    scale: 0.5,
    ease: "none",
});
gsap.to(".up2", {
    scrollTrigger: {
        trigger: ".sticky-blog2",
        start: "50% 50%",
        end: "100% 0%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
    },

    scale: 0.5,
    ease: "none",
});
gsap.to(".up3", {
    scrollTrigger: {
        trigger: ".sticky-blog3",
        start: "10% 10%",
        end: "100% 50%",
        scrub: 1,
        toggleActions: "play reverse none reverse",
    },
    scale: 0.5,
    ease: "none",
});

// sc-tbi

gsap.to(".tbi-circle", {
    scrollTrigger: {
        trigger: ".sc-tbi",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
        toggleActions: "play reverse none reverse",
    },
    scale: 1,
    ease: "none",
});

//sc-tbi text
tbiUp = gsap.timeline({
    defaults: {},

    scrollTrigger: {
        trigger: ".tbi-box",
        start: "50% 50%",
        end: "200% 50%",

        toggleActions: "play reverse play reverse",
    },
});

tbiUp.to(".tbi-up", { y: 0, stagger: 0.08, duration: 1, ease: "expo.inOut" });

//sc-discover

gsap.to(".text-left1 ", {
    scrollTrigger: {
        trigger: ".sc-discover",
        start: "-100% 0%",
        end: "100% 100%",
        scrub: 1,
        toggleActions: "play none none reverse",
    },
    x: 0,
    ease: "none",
    stagger: 1,
});
gsap.to(".text-right1 ", {
    scrollTrigger: {
        trigger: ".sc-discover",
        start: "-100% 0%",
        end: "100% 100%",
        scrub: 1,
        toggleActions: "play none none reverse",
    },
    x: 0,
    ease: "none",
    stagger: 1,
});

gsap.to($(".text-up"), {
    y: 0,
    stagger: 0.08,
    ease: "expo.in",
});

circleMotion = gsap.to(".headline-box .circle", {
    "--button-mask-width": "100%",
    paused: true,
});

$(".headline-box").hover(
    function () {
        circleMotion.play();
    },
    function () {
        circleMotion.reverse();
    }
);
