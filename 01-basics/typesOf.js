// typeof returns the type as a string.

let fname = "Shyam";
let myNumber = 95;
let useBool = true;
let bigNumber = 141421376415466525n; // BigInt can be defined as BigInt() or by adding "n" at the last of the number.
let bigNumber2 = BigInt(551244521554552);
let mySymbol = Symbol("1234");
let myClass;
let myGrades = null;

console.log(typeof fname);
console.log(typeof myNumber);
console.log(typeof useBool);
console.log(typeof bigNumber);
console.log(typeof bigNumber2);
console.log(typeof mySymbol);
console.log(typeof myClass);
console.log(typeof myGrades); // typeof null => object

const arr = ["shyam", "verma"];
const obj = {
    myName: "shyam",
    myClass: 12
}

console.log(typeof arr); // typeof array => object
console.log(typeof obj); // typeof object => object

const myFunction = function() {
    console.log("shyam");
}

console.log(typeof myFunction); // typeof function => function

