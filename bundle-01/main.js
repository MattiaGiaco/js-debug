/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// - Fa un ciclo da indice = 0 fino a indice > di 5


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
// La funzione passa un numero, se questo è pari lo restituisce sommato a 5
// Non va bene il singolo uguale


// ESERCIZIO 3
function loopToFive() {
    while (i < 5) {
        console.log(i);
    }
}
// Funzione che crea un loop di 5 elementi
// Le virgole sono sbagliate
// Non va bene il for


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers % 2 === 0); {
            evenNumbers.push(numbers);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
//Funzione che, dato un array di numeri, prende i mumeri pari e li inserisce in un nuovo array
// Diversi errori di sintassi
// Non va pushato i