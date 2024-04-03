//--------------------- ESERCIZIO 3-------------------------------------
//Il software deve chiedere per 10 volte all'utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
"use strict";
//**************************************************** */


//Chiedo per 10 volte all'utente un numero con un ciclo for

let sum = 0;
let isError = false;

for (let i = 0; i < 10; i++) {
    const numb = prompt("Inserisci un numero:");
    console.log(numb, isNaN(numb));
    

    //!isNaN è uguale a isNaN === false
    if (!isNaN(numb)) {
        // Converto il valore inserito dall'utente da stringa a numero 
        //somma = somma + numero;
        sum += parseInt(numb);
    } else {
        //Inserisco uno stop se l'utente non inserisce nessun numero!
        isError = true;
        break;
    }

}


//Output
if (isError) {
    alert("Hai sbagliato!");
} else {
    console.log(sum);
}

// Stampa la somma dei numeri inseriti
console.log("La somma di tutti i numeri inseriti è:", sum);

