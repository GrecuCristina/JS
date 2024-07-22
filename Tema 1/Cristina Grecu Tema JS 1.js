// Returnează un boolean dacă un număr este divizibil cu 10

// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.

// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.

// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

// Exemplu 1:
// Input: 100

// Output: true

// Exemplu 2:

// Input: 23

// Output: false
function isDivisibleBy10(x) {
  return x % 10 === 0 ? true : false;
}
console.log(isDivisibleBy10(10));
console.log(isDivisibleBy10(23));

// Scrieți o funcție numită tellFortune care:

// primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
// afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
// În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).

// Exemplu 1:

// Input: numarCopii: 3, numePartener: “Emanuel”, locatieGeografica: “Italia”, locMunca: “Programator”

// Output: “Vei fi un Programator în Italia, căsătorit cu Emanuel și vei avea 3 copii.”

function tellFortune(N, Z, Y, X) {
  console.log(
    `Vei fi un ${X} în ${Y}, căsătorit cu ${Z} și vei avea ${N} copii.`
  );
}
tellFortune(3, "Emanuel", "Italia", "Programator");

// 3.Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

// Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

// Exemplu 1:

// Input: 1

// Output: “Luni”

// Exemplu 2:

// Input: 5

// Output: “Vineri”

function dayOfWeek(x) {
  switch (x) {
    case 1:
      return "Luni";
    case 2:
      return "Marti";
    case 3:
      return "Miercuri";
    case 4:
      return "Joi";
    case 5:
      return "Vineri";
    case 6:
      return "Sambata";
    case 7:
      return "Duminica";
    default:
      return "Zi inexistenta";
  }
}
console.log(dayOfWeek(1));
console.log(dayOfWeek(4));
console.log(dayOfWeek(8));
