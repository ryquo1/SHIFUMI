let Pierre = document.getElementById("Pierre");
let Feuille = document.getElementById("Feuille");
let Ciseau = document.getElementById("Ciseau");
let clicked;

Pierre.addEventListener('click', () => {
    clicked = "Pierre";
    document.getElementById("joueur").textContent = "Joueur : " + clicked;
});

Feuille.addEventListener('click', () => {
    clicked = "Feuille";
    document.getElementById("joueur").textContent = "Joueur : " + clicked;
});

Ciseau.addEventListener('click', () => {
    clicked = "Ciseau";
    document.getElementById("joueur").textContent = "Joueur : " + clicked;
});

