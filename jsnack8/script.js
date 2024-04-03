//--------------------- ESERCIZIO 8-------------------------------------
//Chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */

// Richiedi all'utente di inserire un numero di 4 cifre
const numb = prompt("Inserisci un numero di 4 cifre:");

// Verifica se l'input dell'utente è valido
if (numb.length !== 4 || isNaN(numb)) {
    alert("Inserisci un numero di 4 cifre valido!");
} else {

    // Dichiaro la variabile della somma
    let sum = 0;

    // Calcola la somma delle cifre
    for (let i = 0; i < numb.length; i++) {
        sum += parseInt(numb[i]);
        console.log(numb[i])
    }

     // Stampa la somma delle cifre
     document.getElementById("result").innerHTML = "La somma delle cifre del numero " + numb + " è: " + sum;
}