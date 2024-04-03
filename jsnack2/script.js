const word1 = prompt("Inserisci la prima parola:");
const word2 = prompt("Inserisci la seconda parola:");

let shortWord;
let longWord;

if (word1.length < word2.length) {
    shortWord = word1;
    longWord = word2;
} else if (word2.length < word1.length) {
    shortWord = word2;
    longWord = word1;
} else {
    shortWord = "Le parole hanno la stessa lunghezza";
    longWord = "Le parole hanno la stessa lunghezza";
}

// Stampa la parola più corta
console.log("La parola più corta è:", shortWord);

// Stampa la parola più lunga
console.log("La parola più lunga è:", longWord);