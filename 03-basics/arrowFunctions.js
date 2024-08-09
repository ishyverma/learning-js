const user = {
    username: "Shyam",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this);

function arrow() {
    console.log(this);
}
arrow()



const chai = () => {
    console.log("hi");
}

const addTwo = (a, b) => {
    console.log(a+b);
};
addTwo(1, 2)


function thisIs() {
    console.log(this); // This will refer to a global object.
}
thisIs()

const thisIs1 = () => {
    console.log(this) // Will return empty object because there is no context of "this" in arrow function
}
thisIs1()


const implicit = (num1, num2) => (num1 + num2); //Implicit return, we dont have to write return.
//If we write curly braces we hvae to write return and if we are using paranthesis we have to write return.