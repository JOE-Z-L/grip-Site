const navSlider = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
  });
};

const app = () => {
  navSlider();
};
app();

//nav bar

function bgChanger() {
  if (this.scrollY > this.innerHeight / 2) {
    document.body.classList.add("bg-Active");
  } else {
    document.body.classList.remove("bg-Active");
  }
}
window.addEventListener("scroll", bgChanger);
