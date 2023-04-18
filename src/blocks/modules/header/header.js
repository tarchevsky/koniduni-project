const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 10) {
        header.style.background = "#fff";
    } else {
        header.style.background = "";
    }
});

