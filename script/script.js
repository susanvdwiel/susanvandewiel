var nav = document.getElementById("navigatie");
var button = document.getElementById("toggle");
var button2 = document.getElementById("toggleTwee");

function openMenu() {
    nav.classList.toggle("active");
}

button.addEventListener("click", openMenu);
button2.addEventListener("click", openMenu);
