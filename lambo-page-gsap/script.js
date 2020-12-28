const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav__toggle", "nav-menu");

gsap.from(".home__title", { opacity: -1, duration: 1.5, delay: 1 });
gsap.from(".home__img", { opacity: 0, duration: 1, delay: 1, x: 100, y: -400 });
gsap.from(".home__information", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: -30,
});

/*BOX*/
gsap.from(".box__medium", { opacity: 0, duration: 1.5, delay: 1.3, y: -50 });
gsap.from(".box__small", { opacity: -1, duration: 1.5, delay: 1.4, y: -50 });
