let menuOpen = false;

document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);

function toggleMenu() {
    const fullscreenMenu = document.querySelector(".fullscreen-menu");
    const menuItems = document.querySelectorAll(".menu-items li");
    const pageContent = document.querySelectorAll("header, section");

    if (!menuOpen) {
        gsap.to(fullscreenMenu, {
            display: "flex",
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        });
        menuItems.forEach((item, index) => {
            const direction = index % 2 === 0 ? -100 : 100;
            gsap.fromTo(item,
                { opacity: 0, y: direction, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    delay: index * 0.2,
                    ease: "power4.out"
                }
            );
        });
        gsap.to(".hamburger-icon .bar:nth-child(1)", { rotation: 45, y: 8, backgroundColor: "#ff6b6b" });
        gsap.to(".hamburger-icon .bar:nth-child(2)", { opacity: 0 });
        gsap.to(".hamburger-icon .bar:nth-child(3)", { rotation: -45, y: -8, backgroundColor: "#ff6b6b" });
        pageContent.forEach(content => {
            content.classList.add("blur");
        });

        menuOpen = true;
    } else {
        gsap.to(fullscreenMenu, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                fullscreenMenu.style.display = "none";
            }
        });
        gsap.to(".hamburger-icon .bar:nth-child(1)", { rotation: 0, y: 0, backgroundColor: "black" });
        gsap.to(".hamburger-icon .bar:nth-child(2)", { opacity: 1, backgroundColor: "black" });
        gsap.to(".hamburger-icon .bar:nth-child(3)", { rotation: 0, y: 0, backgroundColor: "black" });
        pageContent.forEach(content => {
            content.classList.remove("blur");
        });

        menuOpen = false;
    }
}
