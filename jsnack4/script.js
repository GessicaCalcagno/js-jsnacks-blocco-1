//--------------------- ESERCIZIO 4-------------------------------------
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */


// Array contenente i nomi degli invitati alla festa
const guests = ["Pippo", "Paperino", "Antonella", "Loris", "Olga", "Luca"];

// Chiedo all'utente di inserire il suo nome
const userName = prompt("Inserisci il tuo nome:");

let = result 

// Verifico se il nome dell'utente è presente nell'array degli invitati
if (guests.includes(userName)) {
    result = "Benvenut* alla festa del Grande Gatsby!"
    console.log("Benvenut* alla festa del Grande Gatsby!");
} else {
    result = "Mi dispiace, non sei stato invitat*"
    console.log("Mi dispiace, non sei stato/a invitato/a alla festa del Grande Gatsby.");
}

//Stampo il risultato
document.getElementById("result").innerHTML = result;
