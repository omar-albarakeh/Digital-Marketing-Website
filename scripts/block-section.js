document.addEventListener('DOMContentLoaded', function () {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ".container", start: "top center" } });

      const blocks = document.querySelectorAll(".sblock");

      // Generate random starting positions for each word
      blocks.forEach((block, index) => {
        const randomX = Math.random() * window.innerWidth - block.offsetWidth / 2;
        const randomY = Math.random() * window.innerHeight - block.offsetHeight / 2;
        gsap.set(block, { x: randomX, y: randomY });
      });

      blocks.forEach((block, index) => {
        const targetX = ["-105", "40", "150"][index];
        const targetY = ["-10", "-10", "-10"][index];
        tl.to(block, {
          duration: 1,
          x: targetX,
          y: targetY,
          scale: ["1.8", "1.4", "1.6",][index],
          ease: "expo.inOut",
        });
      });
      tl.to(".bg-text h1", {
        duration: 1,
        delay: 0.5,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      });
    });