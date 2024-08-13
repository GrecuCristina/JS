//1. Scrieți o funcție care returnează pătratul unui număr

const { start } = require("repl");

// Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).

// Exemplu 1:

// Input: num = 6

// Output: 36

// Exemplu 2:

// Input: num = 0

// Output: 0

// Exemplu 3:

// Input: num = -12

// Output: 144
const findSquare = (x) => {
  return x * x;
};
console.log("----------ex 1-------------");
console.log(findSquare(6));
console.log(findSquare(0));
console.log(findSquare(-12));

// 2.Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)

// Funcția getRandom(start, end) returnează un număr întreg aleator generat în intervalul definit de variabilele de început și sfârșit furnizate.

// Exemplu 1:

// Input: start = 3, end = 5

// Output: < un număr mai ≥ 3 și < 5>

//
const getRandom = (start, end) => {
  return Math.random() * (end - start) + start;
  // [0 ...1) * 2 = [0, 2) + 3 = [3, 5]
};
console.log("----------ex 2 -------------");
console.log(getRandom(3, 5));

// ex 3 .Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

// Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.

// Exemplu 1:

// Input: sir = “Îmi place programarea” litera = “a”

// Output: 4

// Exemplu 2:

// Input: sir = “Vreau să lucrez în IT”, litera = “r”

// Output: 2

// Notă: Nu se ține cont de scrierea cu majuscule sau minuscule. Litera A și litera a trebuie numărate la calcularea numărului de apariții pentru A sau pentru a.

const letterCount = (string, letter) => {
  const charsArr = string
    .split("")
    .filter((char) => char.toLowerCase() === letter.toLowerCase());
  return charsArr.length;
};
console.log("----------ex 3 -------------");
console.log(letterCount("VReau să lucrez în IT", "r"));

// 4.Scrieți o funcție pentru a adăuga numere nelimitate

// Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.

// Exemplu 1:

// Input: addNumber(1, 2, 3)

// Output: 6

// Exemplu 2:

// Input: addNumber(1, 2, 3, 4, 5)

// Output: 15

// Hint: Pentru a rezolva problema, vom folosi operatorul spread / rest (...) pentru a defini argumentele funcției:
// const addNumber = (…argumente) ⇒ {}

const addNumber = (...arguments) => {
  return [...arguments].reduce((acc, val) => acc + val, 0);
};
console.log("----------ex 4 -------------");
console.log(addNumber(1, 2, 3));
console.log(addNumber(1, 2, 3, 4, 5));
