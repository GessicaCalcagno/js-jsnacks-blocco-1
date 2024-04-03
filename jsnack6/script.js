//--------------------- ESERCIZIO 6-------------------------------------
//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */


const numb = parseInt(prompt("Inserisci un numero:"));


if (isNaN(numb)){
    alert("Inserisci un numero valido!!");
}

for (let i = 0; i < numb; i++) {

    // Calcolo il numero elevato alla terza 
    let power3 = Math.pow(i, 3);
    console.log(power3);

    //Stampo il risultato
    document.getElementById("result").innerHTML += `Il numero elevato alla terza è : ${power3}<br>`;

}