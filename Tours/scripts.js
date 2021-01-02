// function expression for selecting dom elements

const selectElement = (el) => document.querySelector(el);

// open menu
selectElement(".open").addEventListener("click", () => {
  //   console.log("open was clicked");
  selectElement(".nav-list").classList.add("active");
});

// close menu

selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});
