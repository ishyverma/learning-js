const myNums = [1, 2, 3];
// acc => accumulator and currval => current value.
const myTotal = myNums.reduce((acc, currval) => (acc + currval), 0);
console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    }, 
    {
        itemName: "python course",
        price: 999
    }, 
    {
        itemName: "mobiel dev course",
        price: 5999
    }, 
    {
        itemName: "data science",
        price: 12999
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => {
    return (item.price + acc);
}, 0)
console.log(totalPrice);