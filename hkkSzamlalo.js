let aktualisKor = 0;
let vPNoveles = 0;

// Helper function to update counter values with constraints
function updateCounter(selector, delta, min = 0, max = Infinity) {
    const element = document.querySelector(selector);
    const currentValue = Number(element.innerHTML);
    const newValue = Math.min(Math.max(currentValue + delta, min), max);
    element.innerHTML = newValue;
    return newValue;
}

function aktualisKorUpdate() {
    document.querySelector("#aktualisKor").innerHTML = aktualisKor
}

function automatikusVp() {
    let vpErtek = document.querySelector("#vpErtek");
    let maxVpErtek = document.querySelector("#maxVpErtek");
    let aktualisVp = Number(vpErtek.innerHTML);
    let maxVp = Number(maxVpErtek.innerHTML);

    if (aktualisKor <= 5) {
        vPNoveles = aktualisKor;
    }
    else {
        vPNoveles = 5;
    }

    aktualisVp += vPNoveles;

    if (aktualisVp > maxVp) {
        aktualisVp = maxVp;
    }

    vpErtek.innerHTML = aktualisVp;
}

function kovetkezoKor() {
    aktualisKor++;
    automatikusVp();
    aktualisKorUpdate();
}

//Kör számláló
document.querySelector("#kovetkezoKor").addEventListener("click", () => {
    updateCounter("#korErtek", 1);
    kovetkezoKor();
})

document.querySelector("#korMinusz").addEventListener("click", () => {
    updateCounter("#korErtek", -1, 0); //az első azt jelöli mennyivel csökkenjen a kattintásra, a második érték az jelöli mennyi legyen a minimum érték
})

// Élet számláló
document.querySelector("#epPlusz").addEventListener("click", () => {
    const maxEpValue = Number(document.querySelector("#maxEpErtek").innerHTML);
    updateCounter("#epErtek", 1, 0, maxEpValue);
});

document.querySelector("#epMinusz").addEventListener("click", () => {
    updateCounter("#epErtek", -1);
});

// Maximum élet számláló
document.querySelector("#mEpPlusz").addEventListener("click", () => {
    updateCounter("#maxEpErtek", 1);
});

document.querySelector("#mEpMinusz").addEventListener("click", () => {
    const newMaxEp = updateCounter("#maxEpErtek", -1, 0);
    const epValue = Number(document.querySelector("#epErtek").innerHTML);
    if (epValue > newMaxEp) {
        document.querySelector("#epErtek").innerHTML = newMaxEp;
    }
});

// Varázspont számláló
document.querySelector("#vpPlusz").addEventListener("click", () => {
    const maxVpValue = Number(document.querySelector("#maxVpErtek").innerHTML);
    updateCounter("#vpErtek", 1, 0, maxVpValue);
});

document.querySelector("#vpMinusz").addEventListener("click", () => {
    updateCounter("#vpErtek", -1);
});

// Maximum varázspont számláló
document.querySelector("#mVpPlusz").addEventListener("click", () => {
    updateCounter("#maxVpErtek", 1);
});

document.querySelector("#mVpMinusz").addEventListener("click", () => {
    const newMaxVp = updateCounter("#maxVpErtek", -1, 0);
    const vpValue = Number(document.querySelector("#vpErtek").innerHTML);
    if (vpValue > newMaxVp) {
        document.querySelector("#vpErtek").innerHTML = newMaxVp;
    }
});

// Szörnykomponens számláló
document.querySelector("#csontPlusz").addEventListener("click", () => {
    updateCounter("#szKErtek", 1);
});

document.querySelector("#csontMinusz").addEventListener("click", () => {
    updateCounter("#szKErtek", -1);
});

//Kocka megjelenítése
document.getElementById("kockaEldobasa").addEventListener("click", function () {
    const randomSzam = Math.floor(Math.random() * 6) + 1;
    const kockaKep = document.getElementById("kockakep");
    kockaKep.src = `${randomSzam}.png`;
})