/* een variable aangemaakt voor de buttons die ik oproep via de ID die ik in de html mee heb gegeven aan de elementen */
var nav = document.getElementById("navigatie");
var button = document.getElementById("toggle");
var button2 = document.getElementById("toggleTwee");

/* een function aangemaakt dat het menu open gaat */
function openMenu() {
    nav.classList.toggle("active");
}

/* de button klikbaar gemaakt, dus wanneer je op de hamburger klikt gaat die "open" en wanneer je op het kruisje klikt gaat hij "dicht" */
button.addEventListener("click", openMenu);
button2.addEventListener("click", openMenu);
