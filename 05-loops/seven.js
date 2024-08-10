const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.map((val) => {
    return val + 10;
})

const newArr = [];

const newNums2 = myNums.map((val) => (val * 10)).map((val) => {    // This is called chaining.
    if(val > 50) {
        newArr.push(val);
    }
})

console.log(newNums)

console.log(newArr)