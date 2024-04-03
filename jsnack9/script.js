//--------------------- ESERCIZIO 9-------------------------------------
//Calcola la somma e la media dei primi 10 numeri.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
"use strict";
//**************************************************** */

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
    console.log("La somma è:", i, sum);
}

let average = sum / 10;
console.log("La media è:" + average);

document.getElementById("result").innerHTML = `La somma dei primi 10 numeri è: ${sum} <br> La media dei primi 10 numeri è ${average}`