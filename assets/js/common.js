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
