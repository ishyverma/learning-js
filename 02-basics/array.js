const arr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["IronMan", "Hulk"]
const arr2 = new Array(1, 2, 3, 4); // Another way of decalaring an array.
const arr3 = new Array("IronMan", "Hulk");

// Methods

arr.push(6, 7);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr.includes(9));
console.log(arr.indexOf(3));

const newArr = arr.join() // Makes the array into a string.

console.log(newArr);
console.log(arr);


console.log("A ", arr);

const myArray1 = arr.slice(1, 3); // It will not include the range and not modifies the original array.
console.log(arr);
console.log("B", myArray1);


const myArray2 = arr.splice(1, 3); // It will include the range and modifies the original array.
console.log(myArray2);
console.log(arr);
