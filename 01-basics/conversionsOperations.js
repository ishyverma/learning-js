let score = "33";

console.log(typeof score); // Return string
console.log(typeof(score)); // Both are same.

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score2 = "33abc";

console.log(typeof score2); // Return string

let convertToNumber = Number(score2);
console.log(typeof convertToNumber); // It will convert the string into a  number but will returns NaN.
console.log(convertToNumber); // It will print NaN(not a number).


let score3 = null;

console.log(typeof score3); // Return object

let convertToNumber2 = Number(score3);
console.log(typeof convertToNumber2); // It will convert the null into a  number but will returns 0.
console.log(convertToNumber2); // It will print 0


let score4 = undefined;

console.log(typeof score4); // Return object

let convertToNumber3 = Number(score4);
console.log(typeof convertToNumber3); // It will convert the undefined into a  number but will returns NaN.
console.log(convertToNumber3); // It will return NaN.


let score5 = true;

console.log(typeof score5); // Return boolean.

let convertToNumber4 = Number(score5);
console.log(typeof convertToNumber4); // It will convert the true into a number but will returns 1.
console.log(convertToNumber4); // It will return 1(if false returns 0).


// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isHere = 0;
console.log(typeof isHere);

let booleanIsHere = Boolean(isHere);
console.log(typeof booleanIsHere);

console.log(booleanIsHere); // If 1 will print true and for 0 will print false.


let isHere1 = "";
console.log(typeof isHere1);

let booleanIsHere1 = Boolean(isHere1);
console.log(typeof booleanIsHere1);

console.log(booleanIsHere1); // For empty string will return false and for unempty string will return true.


// true => 1
// false => 0
// "" => false
// "shyam" => true


let someNumber = false;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// 33 => 33(it is a string)
// null => null
// undefined => undefined
// true => true
// false => false