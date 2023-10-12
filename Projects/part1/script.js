const showNav = () => {
    document.getElementById("nav-list").classList.toggle("hide-small");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = showNav;
};