gsap.to(".title-1", 2, {
  x: 30,
  opacity: 1,
  ease: Expo.easeInOut,
});

gsap.to(".title-2", 2, {
  delay: 0.2,
  x: -80,
  opacity: 1,
  ease: Expo.easeInOut,
});

gsap.from(".runner", 2, {
  delay: 1.6,
  x: -80,
  opacity: 1,
  ease: Expo.easeInOut,
});

gsap.from(".box-1", 4, {
  delay: 1,
  rotation: 200,
  transformOrigin: "50% 50%",
  x: -180,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".box-2", 4, {
  delay: 2,
  rotation: 90,
  transformOrigin: "50% 50%",
  x: -180,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".box-3", 3, {
  delay: 1,
  rotation: 180,
  transformOrigin: "50% 50%",
  x: -180,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".pattern", 2, {
  delay: 0.8,
  width: 0,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".logo", 2, {
  delay: 1.6,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".menu ul li",
  2,
  {
    delay: 1.6,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  },
  0.1
);

gsap.from(".cart", 2, {
  delay: 1.7,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".media ul li",
  2,
  {
    delay: 1.6,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  },
  0.1
);

gsap.from(".content p", 2, {
  delay: 2.4,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".content button", 2, {
  delay: 2.6,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
});
