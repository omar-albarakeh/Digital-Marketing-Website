     document.addEventListener("DOMContentLoaded", () => {
            gsap.from(".footer-content", {
                duration: 1,
                y: 50, 
                opacity: 0, 
                ease: "power3.out",
                delay: 1
            });

            const footerLinks = document.querySelectorAll('.footer-links a');

            footerLinks.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    gsap.to(link, {
                        scale: 1.1,
                        duration: 0.3,
                        ease: "power1.out",
                    });
                });

                link.addEventListener('mouseleave', () => {
                    gsap.to(link, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power1.out",
                    });
                });
            });
        });