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



/* ----------------------Memory---------------------- */
// Stack memory is used in Primitive datatypes and Heap memory is used in Non-Primitive/Reference datatypes.

let myName = "shyam";
let fullName = myName; // fullName will get the copy of myName.
fullName = "shyam verma"; // The change will occur in the copy. 
console.log(myName); // returns shyam.
console.log(fullName); // returns shyam verma.



let userOne = {
    email: "shyshy@gmail.com",
    upi: "user@ybl"
};

let userTwo = userOne; // It will give the reference of userOne.

userTwo.email = "shy@google.com"; // It will change the value of email in userOne.

console.log(userOne.email);  // returns shy@google.com
console.log(userTwo.email); // returns shy@google.com
