$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width:992px)": function () {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".product_image",

          start: "top 10%",
          end: "bottom 15%",
          scrub: true,
          pin: true,
        },
      });
      tl.to(".step_one_content", {
        opacity: 0,
        duration: 0.5,
      })
        .to(".product_image", { x: "-100%", duration: 1 })
        .fromTo(".step_two_content", { opacity: 0 }, { opacity: 1 });
    },
  });
});
