//--------------------- ESERCIZIO 6-------------------------------------
//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */



//Chiedo per 3 volte all'utente un numero con un ciclo for

for (let i = 0; i < 3; i++) {
    const numb = parseInt(prompt("Inserisci un numero:"));
    // Verifica se l'input dell'utente è un numero valido
    if (isNaN(numb)) {
        alert("Inserisci un numero valido!!");
    } else {
        // Calcolo il numero elevato alla terza 
        let power3 = Math.pow(numb, 3);
        console.log(power3)
    }


    //Stampo il risultato
    //document.getElementById("result").innerHTML = `Il numero elevato alla terza è : ${potenza}`;

  
}