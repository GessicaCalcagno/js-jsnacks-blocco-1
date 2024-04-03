
const uNumb1 = parseInt(prompt("Dimmi un numero"));
const uNumb2 = parseInt(prompt("Dimmi un altro numero"));

let maggiore

if (uNumb1 > uNumb2) {
    maggiore = uNumb1;
    console.log(uNumb1)
} else if (uNumb1 < uNumb2) {
    maggiore = uNumb2;
    console.log(uNumb2)
} else {
    maggiore = "pari";
}

console.log(maggiore)