// For of

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num);
}

const greeting = "Hello world!";
for (const greet of greeting) {
    if(greet == " "){
        console.log(`Space detected`);
        continue;
    }
    console.log(`Each char is ${greet}`)  
}


// Map datatype
const map = new Map();
map.set('IN', "India") 
map.set('USA', "United States Of America") 
map.set('FRA', "France")
console.log(map);

for(const [key, value] of map) {    // Destructuring of an array (keys and values). 
    console.log(key, ":-", value);
}

// Objects are not iterable.

