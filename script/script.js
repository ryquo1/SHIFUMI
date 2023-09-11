let Pierre = document.getElementById("Pierre");
let Feuille = document.getElementById("Feuille");
let Ciseau = document.getElementById("Ciseau");
let clicked;
let res;
let resultat;

Pierre.addEventListener('click', () => {
    clicked = "Pierre";
    document.getElementById("joueur").textContent = "Joueur : " + clicked;
    choicebot();
    res = "pierre";
    result();

});

Feuille.addEventListener('click', () => {
    clicked = "Feuille";
    document.getElementById("joueur").textContent = "Joueur : " + clicked;
    choicebot();
    res = "feuille";
    result();
});

Ciseau.addEventListener('click', () => {
    clicked = "Ciseau";
    document.getElementById("joueur").textContent = "Joueur : " + clicked;
    choicebot();
    res = "ciseau";
    result();
});



function choicebot() {
    let rng = Math.floor(Math.random() * 3);


    switch (rng) {
        case 0:
            document.getElementById("bot").textContent = "Bot : Pierre";
            resultat = "pierre";
            break;
        case 1:
            document.getElementById("bot").textContent = "Bot : Feuille";
            resultat = "feuille";
            break;
        case 2:
            document.getElementById("bot").textContent = "Bot : Ciseau";
            resultat = "ciseau";
            break;
    }
}

function result() {
    if (resultat == res) {
        console.log(resultat);
        console.log(res);
        document.getElementById("resultat").textContent = "Résultat = Égalité :O";
    }
    else if (res == "pierre") {
        if (resultat == "ciseau") {
            document.getElementById("resultat").textContent = "Résultat = Victoire :D";
        }
        else {
            document.getElementById("resultat").textContent = "Résultat = Défaite :(";
        }
    }

    else if (res == "ciseau") {
        if (resultat == "feuille") {
            document.getElementById("resultat").textContent = "Résultat = Victoire :D";
        }
        else {
            document.getElementById("resultat").textContent = "Résultat = Défaite :(";
        }
    }

    else if (res == "feuille") {
        if (resultat == "pierre") {
            document.getElementById("resultat").textContent = "Résultat = Victoire :D";
        }
        else {
            document.getElementById("resultat").textContent = "Résultat = Défaite :(";
        }
    }
}