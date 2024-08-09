function sayMyName() {
    console.log("Shyam");
}
sayMyName //This is the reference of the function. It tells that function lives there. Will return nothing.
sayMyName() //This is the execution of the function.

function addNumbers(a, b) {
    console.log(a + b);  
    return a;
}
const result = addNumbers(3, 4); // Result will store the returned value of the function.
console.log("Result: ", result); // Returns a.


function loginUserMessage(username) {
    if (username === undefined) {
        return `Please enter a username`
    } else {
        return `${username} just LoggedIn`;
    }
    
}
console.log(loginUserMessage("Shyam"));
console.log(loginUserMessage()); // Whenever we dont pass an argument the result will be undefined.