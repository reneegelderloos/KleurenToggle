// Als gebruiker wil ik op een hamburger-icoon kunnen klikken dat uitklapt als ik er op klik.

const getHamburger = document.querySelector(".nav-toggle-btn");

function toggleHamburger() {
    const getKleurenMenuUl = document.querySelector(".kleurenmenu ul");
    if (getKleurenMenuUl.style.visibility === "hidden") {
        getKleurenMenuUl.style.visibility = "visible";
    } else {
        getKleurenMenuUl.style.visibility = "hidden";
    }
};

getHamburger.addEventListener("click", toggleHamburger);

// Als gebruiker wil ik op één van de kleuren kunnen klikken.
// Wanneer ik als gebruiker op de kleur in het menu heb geklikt verandert de achtergrondkleur van de gehele pagina in de aangeklikte kleur.

//selecteren van de button met class kleur
const HomeButton = document.querySelector(".home");
const backgroundGroen = document.querySelector(".groen");
const backgroundGeel = document.querySelector(".geel");
const backgroundOranje = document.querySelector(".oranje");
const backgroundPaars = document.querySelector(".paars");

//selecteren van element waarvan je de kleur gaat aanpassen
const body = document.querySelector("body");

//home, terug naar originele achtergrond
const changeColorHome = function () {
    body.classList.remove("groen");
    body.classList.remove("geel");
    body.classList.remove("oranje");
    body.classList.remove("paars");
    toggleHamburger();
};

HomeButton.addEventListener("click", changeColorHome);

// Groene button
const changeColorGreen = function () {
    body.classList.add("groen");
    body.classList.remove("geel");
    body.classList.remove("oranje");
    body.classList.remove("paars");
    toggleHamburger();
};

backgroundGroen.addEventListener("click", changeColorGreen);

//Geel
const changeColorGeel = function () {
    body.classList.add("geel");
    body.classList.remove("groen");
    body.classList.remove("oranje");
    body.classList.remove("paars");
    toggleHamburger();
};

backgroundGeel.addEventListener("click", changeColorGeel);

//Oranje
const changeColorOranje = function () {
    body.classList.add("oranje");
    body.classList.remove("geel");
    body.classList.remove("groen");
    body.classList.remove("paars");
    toggleHamburger();
};

backgroundOranje.addEventListener("click", changeColorOranje);

//Paars
const changeColorPaars = function () {
    body.classList.add("paars");
    body.classList.remove("geel");
    body.classList.remove("oranje");
    body.classList.remove("groen");
    toggleHamburger();
};

backgroundPaars.addEventListener("click", changeColorPaars);


// Wanneer ik als gebruiker op de kleur in het menu klik, klapt het menu weer terug in.
// toggleHamburger(); in elke kleur functie
