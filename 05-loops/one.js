// // For loop

// for ( let i=0; i<=10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element)
// }

// for (let i=1; i<=10; i++) {
//     console.log(`Table of: ${i}`);
//     for (let j=1; j<=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`); 
//     }
    
// }


// const myArray = ["flash", "batman", "superman"];
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// } 

// Break and continue

for (let i=1; i<=20; i++) {
    if(i == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`)
}