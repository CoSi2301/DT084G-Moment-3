/* Moment 3 , Uppgift Fibonaccis Talföljd.
Deklarerar en variabel (i) med värdet 1. Så länge i <= 10 körs loopen och värdet på (i) ökar med 1 för varje iteration.
Deklarerar två variabler med värdet 1 och en variabel med värdet 0.
För varje iteration av loopen adderas (myNumberOne) och (myNumberTwo) och lagras i (myNumberTotal).
Detta skrivs ut till konsolen och därefter får (myNumberOne) värdet från (myNumberTwo) och (myNumberTwo) får värdet från (myNumberTotal).
Conny Sirviö, HT2023 */

"use strict"; // Kör i strikt läge.

function printFibonacci() {
  let myNumberOne = 1;
  let myNumberTwo = 1;
  let myNumberTotal = 0;

  for (let i = 1; i <= 10; i++) {
    myNumberTotal = myNumberOne + myNumberTwo;
    console.log(`${myNumberOne} + ${myNumberTwo} = ${myNumberTotal}`);
    myNumberOne = myNumberTwo;
    myNumberTwo = myNumberTotal;
  }
}

printFibonacci();
