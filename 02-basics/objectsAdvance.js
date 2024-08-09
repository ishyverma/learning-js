// This is how to make an singleton object.

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn  = false;

console.log(tinderUser); 


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "shyam",
            lastName: "verma"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {...obj1, ...obj2} // Using spread method
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2) // Assigning values
console.log(obj4)

const users = [{
    id: 1, 
    email: "s@gmail.com"
}, {
    id: 1, 
    email: "s@gmail.com"   
}, {
    id: 1, 
    email: "s@gmail.com"
}]
console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Output will be an array.
console.log(Object.values(tinderUser)); // Output will be an array.
console.log(Object.entries(tinderUser)); // Returns every key-value pair as an array in an array.

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Returns true if it has key that you have written.




const course = {
    courseName: "js",
    coursePrice: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course; // syntactical sugar, we can assign a name to the keys by adding ":" and giving the name. It will not change the value of the key in the real object. Use for extracting values from an object.  

console.log(instructor);



