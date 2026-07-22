const menu = document.getElementById("menu");
const button = document.getElementById("menuToggle");

const overlay = document.createElement("div");
overlay.classList.add("menu-overlay");

document.body.appendChild(overlay);

button.addEventListener("click", () => {

    menu.classList.toggle("active");
    button.classList.toggle("active");
    overlay.classList.toggle("active");

});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", closeMenu);

});

function closeMenu(){

    menu.classList.remove("active");
    button.classList.remove("active");
    overlay.classList.remove("active");

}