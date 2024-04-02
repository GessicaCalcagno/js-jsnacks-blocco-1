//--------------------- ESERCIZIO 3-------------------------------------
//Il software deve chiedere per 10 volte all'utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */


//Chiedo per 10 volte all'utente un numero con un ciclo for

let somma = 0;

for (let i = 0; i < 10; i++) {
    const numero = prompt("Inserisci un numero:");
    console.log(numero[i]);
    // Converto il valore inserito dall'utente da stringa a numero e aggiunge alla somma
    somma += parseInt(numero);
}

// Stampa la somma dei numeri inseriti
console.log("La somma di tutti i numeri inseriti è:", somma);

//devo inserire un blocco se l'utente non inserisce nessun numero!