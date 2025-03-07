//reduce js 

const myNums = [1,2,3]



// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);
    
//     return acc + currval
// },0)


myTotal = myNums.reduce( (acc,currval) => acc+currval,0)
// console.log(myTotal);



const shoppingCart = [
    {
        itemname: "js Cource",
        price: 2999
    },
    {
        itemname: "java",
        price: 299
    },
    {
        itemname: "python Cource",
        price: 2990
    },
    {
        itemname: "js Cource",
        price: 200
    },
]

const priceTopay = shoppingCart.reduce( (acc,Item) =>acc + Item.price,0)

console.log(priceTopay);
