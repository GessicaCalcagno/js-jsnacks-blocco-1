//--------------------- ESERCIZIO 7-------------------------------------
//Stampa le potenze di 2 fino a 1000
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */

// Dichiaro la variabile
let pow = 1;

// Calcolo e stampo tutte le potenze di 2 fino a 1000 in console
//pow = pow * 2 --> 4 = 4 * 2 --> 8 = 8 * 2 --> 16 = 16 *2 etc...
for (let pow = 1; pow <= 1000; pow *= 2) {
    console.log(pow);
}