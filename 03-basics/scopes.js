// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a); // Error.
// console.log(b); // Error.
// console.log(c); // Will print 30 because var creates a variable in global scope.  



// function one() {
//     const username = "shyam";

//     function two() {
//         const website = "youtube";
//         console.log(username); 
//     }
//     two()
//     console.log(website);

    
// }
// one();

addOne(5)
function addOne(num) {
    return num++;

}



addTwo(5);
const addTwo = function(num) {
    return num + 2;
}
