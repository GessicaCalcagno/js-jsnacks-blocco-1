//--------------------- ESERCIZIO 5-------------------------------------
//Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */

// Array vuoto
const numbOdd = [];

//Chiedo per 6 volte all'utente un numero con un ciclo for

for (let i = 0; i < 6; i++) {
    const numbUser = parseInt(prompt("Inserisci un numero:"));
    // Verifico se il numero è dispari
    if (numbUser % 2 !== 0) {
        numbOdd.push(numbUser);
    }

}

// Stampa l'array dei numeri dispari
console.log("Numeri dispari inseriti:", numbOdd);
