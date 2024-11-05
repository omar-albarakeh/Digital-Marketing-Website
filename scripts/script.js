   document.addEventListener("DOMContentLoaded", function() {
            gsap.fromTo(
                "nav ul",
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 1.5, delay: 1.5 }
            );

            gsap.fromTo(
                ".media ul li",
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 1, delay: 3, stagger: 0.2, ease: "power2.out" } 
            );
            gsap.from(".text h1 .text-bar", {
                duration: 1.5,
                delay: 1.6,
                y: "100%",
                ease: "expo.inOut"
            });
            gsap.from(".text p .text-bar", {
                duration: 1.5,
                delay: 2,
                y: "100%",
                ease: "expo.inOut"
            });
            gsap.to(".bg", {
                duration: 2,
                width: "100%",
                backgroundColor: "black",
                ease: "expo.inOut"
            });

        });