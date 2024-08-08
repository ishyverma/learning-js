// This is how to make an object literal or non-singleton object.

const mySym = Symbol("key1");


console.log(newUser);

const user = {
    fname: "shyam",    
    "full name": "shyam verma",      // We can also put a key like this. 
    [mySym]: "mykey1", // Whenever we want to declare a symbol as a key this is how we have to do that
    age: 18,
    location: "delhi",
    email: "shyshy@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
};

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySym]); // Whenever we want to declare a symbol as a key 


Object.freeze(user); // It will not allow to change the value of the key.


user.email = "shyam@googel.com";
console.log(user.email);

user.greeting = function() {
    console.log("Hello user!");
}
user.greeting2 = function() {
    console.log(`Hello user!, ${this.fname}`); // This is used when we have to refer the same object, this is used.
}

console.log(user.greeting());
console.log(user.greeting2());
