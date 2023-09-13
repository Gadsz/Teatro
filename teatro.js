//capturar os elementos da página
const frm = document.querySelector("from");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240; //quantidade de poltronas

const reservadas =[]; //vetor com as poltronas reservadas

window.addEventListener("load", () => {
    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : [];

    for (let i = 1; 1 <= POLTRONAS; i++) {
        const figure = document.createElement("figure");
        const imgStatus = document.createElement("img");

        imgStatus.src = ocupadas

        const figureCap = document.createElement("figCaption");

        //quantidade de zeros antes do número da poltrona
        const zeros = i < 10 ? "10": i < 100 ? "0" : "";
        
        //cria o número da poltrona
        const num = document.createTextNode(`[${zeros}]`);

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        dvPalco.appendChild(figure);
    }
})