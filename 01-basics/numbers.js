const balance = new Number(100); // Will make a object having number 100.
console.log(balance);

console.log(balance.toString()); // Convert the number to string. After this you can also  use additional properties of strings.
console.log(balance.toFixed(2)); // It will rounds the number to 2 decimal places and returns a string.

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(4)); // It will round of the number to the value written inside the function and returns a string.

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // It will add commas in the number as of US standards and returns a string.
console.log(hundreds.toLocaleString('en-IN')); // It will add commas in the number as of Indian standards and returns a string.


/* -------------------- Maths -------------------- */


console.log(Math);
console.log(Math.abs(-69)); // It will convert the negative value into positive value.
console.log(Math.round(4.3)); // It will round of the number.
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(1, 2, 3)); // Finds the minimum value.
console.log(Math.max(1, 2, 3)); // Finds the maximum value.

console.log(Math.random()); // Returns a random value between 0 and 1.

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Formula to get the random numbers in between of the min and max value.



