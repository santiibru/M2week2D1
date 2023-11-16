//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

// let Num1 = 10;
// let Num2 = 20;

// if (Num1 >= Num2) {
//   console.log(Num1 + " è maggiore di " + Num2);
// } else {
//   console.log(Num1 + " è minore di " + Num2);
// }


// ESERCIZIO 2
//   Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.
//   num < 5 - mostra in console "Tiny"
//   num < 10 - mostra in console "Small"
//   num < 15 - mostra in console "Medium"
//   num < 20 - mostra in console "Large"
//   num >= 20 - mostra in console "Huge"

// let num = 18;

// if (num < 5) {
//   console.log("Tiny");
  
// } else if  (num < 10) {
//   console.log("Small");
// } else if (num < 15) {
//   console.log("Medium");
// } else if (num < 20) {
//   console.log("Large");
// } else if (num >= 20) {
//   console.log("Huge");
// } else {
//   console.log("Too Big");
// }

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
// for (let Num = 0; Num < 11; Num++) {
//     if (Num === 3 || Num === 8) {
//         continue;
//       }
//       console.log(Num);
// }

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

// for (let Num = 0; Num < 16; Num++) {
//   if (Num % 2 === 1) {
//       console.log(Num + " il numero è dispari");
//   } else {
//     console.log(Num + " il numero è pari");
//   }  
// }

