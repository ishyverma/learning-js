const heroes = ["Thor", "IronMan", "SpiderMan"];
const DC = ["SuperMan", "Batman", "Flash"];

const allHeroes = heroes.concat(DC);
console.log(allHeroes[5]);

const allNew = [...heroes, ...DC]; // Spread Operator. Can spread 2 or more arrays and declaring them in a new array.
console.log(allNew);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7 ,[4, 5]]];

const realArr = anotherArr.flat(Infinity); // Flat operator makes all subarray a part of new array.
console.log(realArr);


console.log(Array.isArray("Shyam"));
console.log(Array.from("Shyam")); // Makes the input an array.
console.log(Array.from({fname: "shyam"})); // Returns an empty array.


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Makes the all inputs as an array.
