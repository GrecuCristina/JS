//1
// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

// Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și ingrediente (o șir de elemente - array). Va fi afișată pe rânduri separate (o instrucțiune console.log pentru fiecare) toate informațiile obiectului după crearea acestuia.

// Exemplu 1:

// Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]

// Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }

console.log("---------------ex1 -----------------");
function createObject(title, portions, ingredients) {
  const obj = {
    titlu: title,
    portii: portions,
    ingrediente: ingredients,
  };
  return obj;
}
console.log(createObject("Pizza", 3, ["sunca", "cas", "ketchup"]));

//2
// Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

// Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.

// Exemplu 1:

// Input: obiect = { a: 1, b: 2 }, proprietate = “b”

// Output: { a: 1 }
console.log("---------------ex2-----------------");
function deletePropertyOfObject(obj, property) {
  delete obj[property];
  return obj;
}
console.log(deletePropertyOfObject({ a: 1, b: 2 }, "b"));

//3
// Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).

// Scrieți o funcție care:

// Iterează prin gama de cărți. Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R. Tolkien”.
// Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, iar dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”.
// Exemplu 1:

// Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];

// Output:

// “Carte 1 de Autor 1”
// ”Ai citit deja “Carte 1” de Autor 1”
// ”Carte 2 de Autor 2”
// ”Trebuie sa citesti “Carte 2” de Autor 2”
console.log("---------------ex3 -----------------");

function printMessages(arr) {
  for (obj of arr) {
    const values = Object.values(obj);

    console.log(`${values[0]} de ${values[1]}`);
    console.log(
      values[2] === true
        ? `Ai citit deja "${values[0]}" de ${values[1]}`
        : `Trebuie sa citesti "${values[0]}" de ${values[1]}`,
    );
  }
}
printMessages([
  { titlu: "Carte 1", autor: "Autor 1", esteCitita: true },
  { titlu: "Carte 2", autor: "Autor 2", esteCitita: false },
]);
