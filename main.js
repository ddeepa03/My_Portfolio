var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



const menuToggle = document.getElementById("menu-toggle-sm");
const navLinks = document.getElementById("nav-links-sm");


menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active-sm");
});


const navItems = navLinks.querySelectorAll("a");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("nav-active-sm");
  });
});
