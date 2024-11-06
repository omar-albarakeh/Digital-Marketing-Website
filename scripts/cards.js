const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.querySelector("p").style.opacity = 0;
  card.querySelector("p").style.transform = "translateY(20px)";
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.1,
      zIndex: 10,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      duration: 0.3
    });

    gsap.to(card.querySelector("h3"), {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "back.out(1.7)"
    });

    gsap.to(card.querySelector("p"), {
      opacity: 1,
      y: 0,
      duration: 0.3,
      delay: 0.2,
      ease: "back.out(1.7)"
    });
  });

-
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      zIndex: 1,
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      duration: 0.3
    });

    gsap.to(card.querySelector("p"), {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power1.in"
    });
  });
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".card-container", {
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".card-container",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  gsap.from('.service', {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.expertise',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1,
      markers: false
    }
  });
});