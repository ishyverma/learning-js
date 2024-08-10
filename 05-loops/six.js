const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((val) => (val > 4));
const newNums2 = [];
myNums.forEach((val) => {
    if(val > 4) {
        newNums2.push(val);
    }
})
console.log(newNums);
console.log(newNums2);