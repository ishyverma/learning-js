if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a); // Error.
console.log(b); // Error.
console.log(c); // Will print 30 because var creates a variable in global scope. 