document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".button", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "bounce.out",
    });

    const button = document.querySelector(".button");
    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            scale: 1.05,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            duration: 0.3,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
        });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            scale: 1,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            duration: 0.3,
            ease: "power1.inOut",
        });
    });
});