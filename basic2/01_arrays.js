// Array


const myArr = [1,2,3,4,5]
const myHeors = ["shaktyman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);



//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//  myArr.unshift(8)
// myArr.shift()


// console.log(myArr.includes(2));
// console.log(myArr.indexOf(1));


// const newArr = myArr.join()   //convert in string

// console.log(myArr);
// console.log(typeof newArr);  


// slice and splice 

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)
console.log("C",myArr);

console.log(myn2); 
