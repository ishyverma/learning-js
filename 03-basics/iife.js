// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    console.log(`DB CONNECTED`);
})(); // This is used to handle the pollution of the global scope variables.

(chai2 = (fname) => {
    console.log(`DB CONNECTED 2 ${fname}`);
})('shyam');



