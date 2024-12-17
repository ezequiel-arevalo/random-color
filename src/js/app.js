"use strict";
    
let container = document.querySelector(".container");
let color     = "#";
let pattern   = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let id        = 1;

// Está función se encarga de crear divs
const generateBoxes = (pattern) => {

    // Creamos el elemento div
    let div = document.createElement("div");
    // Asignamos clase, id
        div.className        = "box";
        div.id               = `box__element-${id++}`
    // Añadimos el texto y el background
        div.textContent      = `${color}${generateColors(pattern)}`;
        div.style.background = `${color}${generateColors(pattern)}`;

    return div;
}

// Está función se encarga de recortar el retorno del shuffle y eliminar las separaciones ","
const generateColors = (pattern) => {
    let newColor = shuffle(pattern).slice(2, 8);
    return newColor.join('');
}

// La función shuffle es la encargada de mezclar el pattern
const shuffle = (pattern) => {
    for (let i = pattern.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pattern[i], pattern[j]] = [pattern[j], pattern[i]];
    }
    return pattern; // Devuelve el resultado al final
};

// Generamos 20 boxes, con 20 colores distintos y con appendchild lo añadimos en nuestro contrainer
for (let i = 0; i < 20; i++) {
    let newBox = generateBoxes(pattern);
    container.appendChild(newBox)
}