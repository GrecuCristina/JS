//1

function showEvenNumbers(n){
  let cnt  = 0;
  while(cnt <= n){
    console.log(cnt);
    cnt += 2;
    
  }
}
console.log("ex 1")
showEvenNumbers(11);

//2

function addNumbers(arr){
  let s = 0;
  for(let i = 0; i < arr.length; i++){
    s += arr[i];
  }
  return s;
}
console.log("ex 2 first example")
console.log(addNumbers([1, -5, 20, -34, 16, 29, 36, -4]));
console.log("ex 2 second example")
console.log(addNumbers([3.45, -2.68, 356, -75.96, 64, 19.28]));
//3
// 0 1 2 3 4 5
// i + j = arr.length - 1

function reverseArray(arr){
  for(let i = 0; i < arr.length / 2; i++){
    let aux = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = aux;
  }
  return arr;
}
function printArray(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i], ' ');
  }
}
const arr = [1, -5, 20, -34, 16, 29, 36, -4] ;
reverseArray(arr);
console.log("ex 3  first example")
printArray(arr);
const arr2 = [6, 5, 4, 3, 2, 1] ;
reverseArray(arr2);
console.log("ex 3  second example")
printArray(arr2);

function isVowel(char){
  const vowels = "aeiouAEIOU";
  for(let i = 0; i < vowels.length; i++){
    if(vowels[i] == char){
      return true;
    }
  }
  return false;
}
function numberOfVowels(string){
  let cnt = 0;
  for(let i = 0; i < string.length; i++){
    if(isVowel(string[i])){
      cnt++;
    }
  }
  return cnt;
}
console.log("ex 4")
console.log(numberOfVowels("string de test"));