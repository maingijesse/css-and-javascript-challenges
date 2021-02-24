new fullpage("#fullpage", {
  //   autoScrolling: true,
  navigation: true,
  slidesNavigation: true,
  slidesNavPosition: "top",
  onLeave: (origin, destination, direction) => {
    // console.log(origin, destination, direction)
    let section = destination.item
    let title = section.querySelector("h1")
    const tl = gsap.timeline({ delay: 0.5 })

    tl.from(title, { duration: 1, x: -600, opacity: 0 })
    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair")
      const description = document.querySelector(".description")
      tl.from(description, { duration: 0.6, opacity: 0 }, "-=0.6")
      tl.from(chairs, { duration: 0.7, opacity: 0, x: 300, stagger: 0.4 })
      tl.to(chairs, { duration: 0.4, x: "-20%" })
    }
  },
})
