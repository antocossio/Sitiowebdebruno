document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("burger-menu");
    const header = document.querySelector("header");
    
    menuButton.addEventListener("click", () => {
        header.classList.toggle("menu-open");
    });
});