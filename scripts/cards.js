 document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          duration: 0.3,
          scale: 1.1,
          zIndex: 10,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
          ease: "power3.out" 
        });

        gsap.to(card.querySelector("h3"), {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "back.out(1.7)"
        });

        gsap.to(card.querySelector("p"), {
          duration: 0.6,
          delay: 0.1, 
          opacity: 1,
          y: 0,
          ease: "back.out(1.7)"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          duration: 0.3,
          scale: 1,
          zIndex: 1,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          ease: "power3.in" 
        });

        gsap.to(card.querySelector("h3"), {
          duration: 0.3,
          opacity: 0,
          y: 20,
          ease: "power2.in"
        });

        gsap.to(card.querySelector("p"), {
          duration: 0.3,
          opacity: 0,
          y: 20,
          ease: "power2.in" 
        });
      });
    });

  gsap.registerPlugin(ScrollTrigger);

    gsap.to(".card-container", {
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".card-container",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
   cards.forEach((card, index) => {
  gsap.fromTo(card, {
    x: -100,
    opacity: 0
  }, {
    duration: 1,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: card,
      start: `top 80%`,
      toggleActions: "play none none none"
    }
  });
});
      });